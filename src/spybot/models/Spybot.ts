import {readdirSync, statSync, existsSync} from 'fs'
import {join} from 'path'
import mongoose from 'mongoose'
import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
import { Browser, Page } from "puppeteer"

import {
  BROWSER_HEADLESS_MODE,
  DELAY,
  ALIHUNTER_GMAIL_USERNAME,
  ALIHUNTER_GMAIL_PASSWORD,
  NODE_ENV,
  LOGGER,
  SERVER_BASE,
  DEFALT_NODE_ENV,
  BROWSER_EXTENSIONS_PATH,
  BROWSER_EXTENSIONS_UNZIPED_PATH,
  ROOT_PATH,
  DIST_FOLDER,
  CURRENT_DATETIME,
  SPYBOT_LOOP_INTERVAL,
  DATABASE_LOGIN_URL,
  DATABASE_DATABASE_SPY
} from "../../../configs/configs"

import { checkIfBotIsAllowedToSpy } from '../components/check-spy-conditions'

import { runJsOnPage, waitTillHTMLRendered } from "../../../utils/libraries/puppeteer"
import { getSpyedStores, updateBotInfo, ENUM_UPDATE_BOT_INFO } from "../components/spy-sheets-api"

import fetchJsonUrl from "../../../utils/functions/fetch-json-url"
import addNewStoreSalesToDatabase from "../database/add-new-store-sales-to-database"

import IAlihunterSale from '../interfaces/IAlihunterSale'
import IStoreSheets from '../interfaces/IStoreSheets'
import extractBrowserExtensions from "../components/extract-browser-extensions"

import updateDatabasePreSpy from '../database/update-database-pre-spy'

interface ISharedStore extends IStoreSheets {
  salesCount?: number,
  salesRevenue?: number,
}

export default class Spybot {

  public botIndex: string
  public botCheckedTimes: number
  public botSpyedStoresArr: Array<ISharedStore>
  public botBrowser: Browser
  public botInitialSpyDate: string

  constructor(index: string) {
    this.botIndex = index
    this.botCheckedTimes = 0
    this.botSpyedStoresArr = []
    // this.botBrowser
    // this.botInitialSpyDate
  }

  // ==== INIT METHODS =========================================================

  async initSpyBot(): Promise<Spybot | string> {

    try {
      LOGGER(`Bot ${this.botIndex} - foi iniciado`, { from: 'SPYBOT', pid: true })

      await updateBotInfo(ENUM_UPDATE_BOT_INFO.INITIAL_INFO, this.botIndex)

      const isBotAllowedToSpy = await checkIfBotIsAllowedToSpy(this.botIndex)
      if (isBotAllowedToSpy !== true) { throw new Error(`Erro nas condições de espionagem: ${isBotAllowedToSpy}`) }
      LOGGER(`Bot ${this.botIndex} - pode espionar`, { from: 'SPYBOT', pid: true })

      this.botBrowser = await this.getBrowserInstance()
      if (!this.botBrowser) { throw new Error("Browser não foi iniciado corretamente") }
      this.setBrowserEvents()
      LOGGER(`Bot ${this.botIndex} - browser foi iniciado corretamente`, { from: 'SPYBOT', pid: true })

      const spybotSetupResult = await this.setup_spybot()
      if (spybotSetupResult !== true) { throw new Error(`Erro ao preparar browser para espionagem: ${spybotSetupResult}`) }
      LOGGER(`Bot ${this.botIndex} - está pronto para espionar`, { from: 'SPYBOT', pid: true })

      await updateBotInfo(ENUM_UPDATE_BOT_INFO.LAST_RESTARTED_TIME, this.botIndex)

      const initialDate = CURRENT_DATETIME('date')
      console.log("")
      LOGGER(`Bot ${this.botIndex} - iniciando espionagem - ${initialDate}\n`, { from: "SPYBOT", pid: true })
      global.WORKER.workerSharedInfo.workerData.workerInfo.isSpybotActive = true
      await this.initSpyLooping(initialDate)
      return this

    } catch (e) {

      LOGGER(`Erro ao iniciar spybot: ${e.message}`, { from: 'SPYBOT', pid: true, isError: true })

      if (this.botBrowser){
        LOGGER(`Fechando browser pra evitar múltiplas instâncias do mesmo bot`, { from: 'SPYBOT', pid: true })
        await this.botBrowser.close()
      }

      return e.message

    } finally {

      LOGGER(`Bot ${this.botIndex} - terminou de inciar\n`, { from: 'SPYBOT', pid: true })

    }

  }

  // ==== BROWSER METHODS ======================================================

  private async getBrowserInstance(): Promise<Browser> {

    try {

      if (!existsSync(BROWSER_EXTENSIONS_UNZIPED_PATH)) {
        if (!existsSync(BROWSER_EXTENSIONS_PATH)){throw new Error("Nãh há extensões para extrair")}
        LOGGER(`Bot ${this.botIndex} - extraindo extensões do bot`, { from: 'SPYBOT', pid: true })
        await extractBrowserExtensions()
      } else {
        LOGGER(`Bot ${this.botIndex} - extensões já estavam extraídas`, { from: 'SPYBOT', pid: true })
      }

      puppeteer.use(StealthPlugin())

      const _getBrowserExtensionsString = () => {
        const _unzipedExtensionsContentArr = readdirSync(BROWSER_EXTENSIONS_UNZIPED_PATH)
        const _unzipedExtensionsFoldersArr = _unzipedExtensionsContentArr.filter(item => statSync(join(BROWSER_EXTENSIONS_UNZIPED_PATH, item)).isDirectory())
        const _unzipedExtensionsFoldersWithCompletePathArr = _unzipedExtensionsFoldersArr.map(extFolder => ROOT_PATH(join(BROWSER_EXTENSIONS_UNZIPED_PATH.replace(DIST_FOLDER, ""), extFolder)))
        const _allFoldersString = _unzipedExtensionsFoldersWithCompletePathArr.join()
        return _allFoldersString
      }

      const allExtensionsPathString = _getBrowserExtensionsString()

      if (allExtensionsPathString === ""){throw new Error("Nãh há extensões para o browser")}

      const customArgs = [
        '--no-sandbox',
        `--disable-extensions-except=${allExtensionsPathString}`,
        `--load-extension=${allExtensionsPathString}`,
      ];

      const pupOptions = {
        headless: BROWSER_HEADLESS_MODE,
        args: customArgs,
        defaultViewport: null
      }

      const browserObject = await puppeteer.launch(pupOptions)
      LOGGER(`Bot ${this.botIndex} - browser foi iniciado`, { from: 'SPYBOT', pid: true })

      return browserObject

    } catch (e) {
      LOGGER(`Bot ${this.botIndex} - erro ao criar o browser: ${e.message}`, { from: 'SPYBOT', pid: true, isError: true })
    }

  }

  private setBrowserEvents(): void {
    this.botBrowser.on('disconnected', async () => {
      LOGGER(`Bot ${this.botIndex} - o browser foi fechado`, { from: 'SPYBOT', pid: true })
      this.botBrowser = undefined
    });
  }

  // ==== SETUP SPY METHODS ====================================================

  private async setup_spybot(): Promise<true | string> {
    try {
      const googlePage = await this.setupGooglePage()
      await this.loginAtGoogle(googlePage)
      const isLoggedInGoogle = await this.checkGoogleLogin(googlePage)
      if (isLoggedInGoogle === false) { throw new Error("Erro ao logar no google") }

      const alihunterPage = await this.setupAlihunterPage()
      await this.loginAtAlihunterWithGoogle(alihunterPage)
      const isLoggedInAlihunter = await this.checkAlihunterLogin(alihunterPage)
      if (!isLoggedInAlihunter) { throw new Error("Erro ao logar no alihunter") }

      await googlePage.close()
      return true
    } catch (e) {
      return e.message
    }
  }

  private async setupGooglePage(): Promise<Page> {
    const googlePage: Page = (await this.botBrowser.pages())[0];
    googlePage.setDefaultNavigationTimeout(0);
    return googlePage
  }

  private async loginAtGoogle(googlePage: Page): Promise<void> {

    try {

      LOGGER(`Bot ${this.botIndex} - logando no Google [${ALIHUNTER_GMAIL_USERNAME}]`, { from: 'SPYBOT', pid: true })

      await googlePage.goto('https://accounts.google.com/')
      await waitTillHTMLRendered(googlePage)
      await DELAY(10000)

      await googlePage.type('input[type="email"]', ALIHUNTER_GMAIL_USERNAME)

      await googlePage.keyboard.press('Enter')
      await waitTillHTMLRendered(googlePage)
      await DELAY(10000)

      await googlePage.type('input[type="password"]', ALIHUNTER_GMAIL_PASSWORD)
      await googlePage.keyboard.press('Enter')
      await DELAY(10000)

    } catch (err) {
      LOGGER(err.message, { from: 'SPYBOT', pid: true, isError: true })
    }

  }

  private async checkGoogleLogin(googlePage: Page): Promise<false | string> {

    LOGGER(`Bot ${this.botIndex} - verifica login no Google`, { from: 'SPYBOT', pid: true })

    await waitTillHTMLRendered(googlePage)

    const loginResult = await googlePage.evaluate(async () => {

      const elName: HTMLElement = document.querySelector('h1.XY0ASe')

      if (elName) {
        var name = (elName.innerText).toString()
        name = name.replace("Olá, ", "")
        name = name.replace("Hi, ", "")
        name = name.replace("Welcome, ", "")
        name = name.replace("Bem-vindo, ", "")
        return name
      } else {
        return false
      }

    })

    if (loginResult === false) {
      LOGGER(`Bot ${this.botIndex} - não conseguiu logar no Google`, { from: 'SPYBOT', pid: true })
    } else {
      LOGGER(`Bot ${this.botIndex} - logou no Google como   : [${loginResult}]`, { from: 'SPYBOT', pid: true })
    }

    return loginResult

  }

  private async setupAlihunterPage() {
    const aliHunterPage: Page = await this.botBrowser.newPage();
    aliHunterPage.setDefaultNavigationTimeout(0);
    return aliHunterPage
  }

  private async loginAtAlihunterWithGoogle(alihunterPage: Page): Promise<void> {

    try {

      const URL_ALIHUNTER_LOGIN = "https://alihunter.io/login"

      LOGGER(`Bot ${this.botIndex} - logando no Alihunter`, { from: 'SPYBOT', pid: true })

      await alihunterPage.goto(URL_ALIHUNTER_LOGIN)
      await waitTillHTMLRendered(alihunterPage)
      await DELAY(5000)

      await alihunterPage.evaluate(async () => {

        const googleLoginQuery = ".LoginPage_btnGoogle__UQryr"
        const elGoogleLogin: HTMLElement = document.querySelector(googleLoginQuery)

        console.error(elGoogleLogin)

        if (elGoogleLogin){
          elGoogleLogin.click()
          return elGoogleLogin.innerText
        }

      })

      await waitTillHTMLRendered(alihunterPage)
      await DELAY(15000)

    } catch (err) {
      LOGGER(err.message, { from: 'SPYBOT', pid: true, isError: true })
    }
  }

  private async checkAlihunterLogin(alihunterPage: Page): Promise<false | string> {

    LOGGER(`Bot ${this.botIndex} - verifica login no Alihunter`, { from: 'SPYBOT', pid: true })
    await waitTillHTMLRendered(alihunterPage)
    await DELAY(5000)

    const loginResult = await alihunterPage.evaluate(async () => {
      const el: HTMLElement = document.querySelector('span.msui-text-truncate')
      return el ? el.innerText : false
    })

    if (!loginResult) {
      LOGGER(`Bot ${this.botIndex} - não conseguiu logar no Alihunter`, { from: 'SPYBOT', pid: true })
    } else {
      LOGGER(`Bot ${this.botIndex} - logou no Alihunter como: [${loginResult}]`, { from: 'SPYBOT', pid: true })
    }

    return loginResult
  }

  // ===== DETECT SALES METHODS ================================================

  private async initSpyLooping(initialDate?: string){

    global.WORKER.workerSharedInfo.workerData.spyBotInfo.lastCheckedTime = CURRENT_DATETIME()
    global.WORKER.workerSharedInfo.workerData.spyBotInfo.checkedCount += 1
    this.botCheckedTimes += 1;

    LOGGER(`Bot ${this.botIndex} - checagem de número [${this.botCheckedTimes}] às ${CURRENT_DATETIME()} ---------------------`, {from: "SPYBOT", pid: true})
    global.WORKER.workerSharedInfo.workerData.workerInfo.botStep = `Verificando novas vendas pela [${this.botCheckedTimes}]a vez`

    const isFirstInit = this.botCheckedTimes === 1 ? true : false
    const currentDate = isFirstInit ? initialDate : CURRENT_DATETIME('date')
    const hasChangedSpyDate = isFirstInit ? false : this.botInitialSpyDate !== currentDate
    if (isFirstInit || hasChangedSpyDate){this.botInitialSpyDate = initialDate}
    let hasChangedStoreList = false

    try{

      if (this.botBrowser === undefined){throw new Error("O browser foi fechado, não tem como espionar")}

      await updateBotInfo(ENUM_UPDATE_BOT_INFO.CHECKED_INFO, this.botIndex)

      if (!isFirstInit){
        const isBotAllowedToSpy = await checkIfBotIsAllowedToSpy(this.botIndex)
        if (isBotAllowedToSpy !== true){
          this.botSpyedStoresArr = []
          await this.closeAllPagesAndLetBlankPage()
          throw new Error(`Bot ${this.botIndex} - bot não pode espionar [${isBotAllowedToSpy}]`)
        }
        LOGGER(`Bot ${this.botIndex} - pode espionar`, {from: 'SPYBOT', pid: true})
      }

      global.WORKER.workerSharedInfo.workerData.workerInfo.isSpybotActive = true
      await this.updateBotSpyedStores()

      if (!isFirstInit){
        hasChangedStoreList = await this.hasChangeInSpyedStoresList()
        if (hasChangedStoreList){await this.handleSpyListChanges()}
      }

      const databaseConnectionResult = await mongoose.connect(`${DATABASE_LOGIN_URL}/${DATABASE_DATABASE_SPY}`)
      if (!databaseConnectionResult){throw new Error(`Erro ao abrir conexão com banco de dados`)}
      LOGGER(`Bot ${this.botIndex} - conexão estabelecida com banco de dados`, {from: 'SPYBOT', pid: true})

      if (isFirstInit || hasChangedSpyDate || hasChangedStoreList){
        await updateDatabasePreSpy(this.botSpyedStoresArr, currentDate)
      }

      if (isFirstInit){await this.openSpyStores()}

      await this.detectNewSalesInAllStores()

      global.WORKER.workerSharedInfo.workerData.workerInfo.botStep = "Esperando loop delay para verificar novas vendas"

      await this.pingBotServer()

    } catch(e){

      console.log(e)
      LOGGER(`Bot ${this.botIndex} - Erro no looping: ${e.message}`, {from: "SPYBOT", pid: true, isError: true, logger: "mongodb"})
      LOGGER(`Erro no looping: ${e.message}`, {from: "SPYBOT", pid: true, isError: true})

      global.WORKER.workerSharedInfo.workerData.workerInfo.botStep = `Erro no looping, esperando delay -> ${e.message}`
      global.WORKER.workerSharedInfo.workerData.workerInfo.isSpybotActive = false

    } finally {

      if (mongoose.STATES[mongoose.connection.readyState] === "connected"){
        await mongoose.connection.close()
        LOGGER(`Bot ${this.botIndex} - conexão fechada com banco de dados`, {from: 'SPYBOT', pid: true})
      }

      this.loopAgainAfterTime()

    }

  }

  private loopAgainAfterTime() {

    LOGGER(`Bot ${this.botIndex} - checando dnv em ${SPYBOT_LOOP_INTERVAL / 60}min\n`, {from: "SPYBOT", pid: true})
    setTimeout(async () => {
      await this.initSpyLooping()
    }, SPYBOT_LOOP_INTERVAL * 1000)

  }

  // ==== GET UPDATE SPYED STORES ==============================================

  private async updateBotSpyedStores(): Promise<void> {

    LOGGER(`Bot ${this.botIndex} - Atualizando lista de lojas espionadas`, { from: "SPYBOT", pid: true })
    const tmpSpyedStores = await getSpyedStores(this.botIndex)

    if (typeof tmpSpyedStores === "string") {
      LOGGER(`Bot ${this.botIndex} - ${tmpSpyedStores}`, { from: "SPYBOT", pid: true })
      global.WORKER.workerSharedInfo.workerData.spyBotInfo.spyedStores = []
    } else {
      LOGGER(`Bot ${this.botIndex} - Foram encontradas ${tmpSpyedStores.length} lojas a seram espionadas`, { from: "SPYBOT", pid: true })

      const addpropertiesToStoreObj = (store) => {
        const newStoreObj = {
          ...store,
          salesCount: 0,
          salesRevenue: 0
        }
        return newStoreObj
      }

      // ISharedStore
      if (this.botSpyedStoresArr.length === 0){

        this.botSpyedStoresArr = tmpSpyedStores.map(store => addpropertiesToStoreObj(store))

      } else {

        // REMOVE NO LONGER SPYED STORES
        this.botSpyedStoresArr = this.botSpyedStoresArr.filter(oldStore => {
          const storeIndex = tmpSpyedStores.findIndex(newStore => newStore.storeLink === oldStore.storeLink)
          return storeIndex > -1
        })

        // ADD NEW SPYED STORES TO THIS
        tmpSpyedStores.map(newStore => {
          const storeIndex = this.botSpyedStoresArr.findIndex(oldStore => oldStore.storeLink === newStore.storeLink)
          if (storeIndex === -1){
            this.botSpyedStoresArr.push(addpropertiesToStoreObj(newStore))
          }
        })

      }
      global.WORKER.workerSharedInfo.workerData.spyBotInfo.spyedStores = this.botSpyedStoresArr
    }
  }

  private async hasChangeInSpyedStoresList(): Promise<boolean> {

    LOGGER(`Bot ${this.botIndex} - verifica se houve mudança nas lojas espionadas`, { from: 'SPYBOT', pid: true })

    const pagesArr = await this.botBrowser.pages()
    const sortArray = (arr) => { return arr.slice().sort() }
    const pageLinkArr = sortArray(pagesArr.map(pg => pg.url()))
    const storesLinksArr = sortArray(this.botSpyedStoresArr.map(pg => pg.storeLink))

    const lengthCheck = pageLinkArr.length === storesLinksArr.length
    const valuesCheck = pageLinkArr.every((value, index) => value.toString().search(storesLinksArr[index]) > -1)
    const hasChanged = !lengthCheck || !valuesCheck

    return hasChanged
  }

  // ==== STORE PAGES METHODS ==================================================

  private async openSpyStores(): Promise<void> {

    const currentSpyedStoresArr = this.botSpyedStoresArr
    if (currentSpyedStoresArr.length === 0) { return }

    for (let x = 0; x < currentSpyedStoresArr.length; x++) {
      const curStore: ISharedStore = currentSpyedStoresArr[x]

      let page = (await this.botBrowser.pages())[0];
      if (x > 0) { page = await this.botBrowser.newPage() }

      await this.openAndSetupSpyedStorePage(curStore.storeLink, page)
    }

  }

  private async openAndSetupSpyedStorePage(storeLink: string, page: Page): Promise<void>{

    const {
      getAlihunterVariables,
      clickOnLiveSalesButton,
      getSoldProductsList,
      getUpperSalesNumber
    } = await import('../assets/aliHunterScripts')

    await page.setDefaultNavigationTimeout(0);

    LOGGER(`Bot ${this.botIndex} - abrindo loja: ${storeLink}`, { from: "SPYBOT", pid: true })
    await page.goto(storeLink);
    await DELAY(4000)

    await page.addScriptTag({ content: `\n${getAlihunterVariables}\n` });
    await page.addScriptTag({ content: `\n${clickOnLiveSalesButton}\n` });
    await page.addScriptTag({ content: `\n${getUpperSalesNumber}\n` });
    await page.addScriptTag({ content: `\n${getSoldProductsList}\n` });

  }

  private async handleSpyListChanges(): Promise<void>{

    LOGGER(`Bot ${this.botIndex} - lidando com mudanças na lista de espionagem`, { from: 'SPYBOT', pid: true })

    // fecha lojas nao mais espionadas
    const browserPages = await this.botBrowser.pages()
    for (let x = 0; x < browserPages.length; x++) {

      const curPage = browserPages[x];
      const isStoreInNewList = this.botSpyedStoresArr.findIndex(spyedStoreObj => curPage.url().search(spyedStoreObj.storeLink) > -1)
      if (!isStoreInNewList){continue}

      if ((await this.botBrowser.pages()).length === 1){
        LOGGER(`Bot ${this.botIndex} - abrindo pagina em branco`, { from: 'SPYBOT', pid: true })
        await curPage.goto("about:blank")
      } else {
        LOGGER(`Bot ${this.botIndex} - fechando aba ${curPage.url()}`, { from: 'SPYBOT', pid: true })
        await curPage.close()
      }

    }

    // abre lojas novas que nao tenham ainda
    for (let x = 0; x < this.botSpyedStoresArr.length; x++) {

      const curPage = this.botSpyedStoresArr[x];
      const isStoreAlreadyOpen = (await this.botBrowser.pages()).findIndex(browserPage => browserPage.url().search(curPage.storeLink) > -1)
      if (!isStoreAlreadyOpen){continue}

      LOGGER(`Bot ${this.botIndex} - abrindo nova loja ${curPage.storeLink}`, { from: 'SPYBOT', pid: true })
      const page = await this.botBrowser.newPage()
      await this.openAndSetupSpyedStorePage(curPage.storeLink, page)

    }

    await DELAY(7000)

    // cloose blank apge if exist
    if ((await this.botBrowser.pages()).length > 1){
      for (let x = 0; x < (await this.botBrowser.pages()).length; x++) {
        const curPage = (await this.botBrowser.pages())[x]

        if (curPage.url() === "about:blank"){
          LOGGER(`Bot ${this.botIndex} - fechando página em branco`, { from: 'SPYBOT', pid: true })
          await curPage.close()
        }
      }
    }

    // old way
    // await this.closeAllPagesAndLetBlankPage()
    // await this.openSpyStores()

  }

  private async closeAllPagesAndLetBlankPage(): Promise<void>{

    const browserPages = await this.botBrowser.pages()

    for (let x = 0; x < browserPages.length; x++) {
      const curPage = browserPages[x];

      if (x === 0){
        await curPage.goto("about:blank")
      } else {
        LOGGER(`Bot ${this.botIndex} - fechando aba ${curPage.url()}`, { from: 'SPYBOT', pid: true })
        await curPage.close()
      }

    }

  }

  // ===== DETECT SALES METHODS ================================================

  private async detectNewSalesInAllStores(): Promise<void> {


    const initialPages = 0
    const browserPages = (await this.botBrowser.pages()).length
    let currentCheckSaleCount = 0

    for (let x = initialPages; x < browserPages; x++) {

      let page = (await this.botBrowser.pages())[x];
      const pageLink = page.url()
      const storeIndex = this.botSpyedStoresArr.findIndex(store => pageLink.search(store.storeLink) > -1)

      if (storeIndex === -1) {
        LOGGER(`Bot ${this.botIndex} - erro ao encontrar loja! | ${pageLink}`, { from: 'SPYBOT', pid: true })
        continue;
      }

      const currentStoreObj = this.botSpyedStoresArr[storeIndex]
      const storeName = currentStoreObj.storeName
      await page.bringToFront();
      global.WORKER.workerSharedInfo.workerData.workerInfo.botStep = `Detectando novas vendas na loja [${storeName}]`

      const getUpperSalesNumber = await runJsOnPage(page, "getUpperSalesNumber()");

      if (getUpperSalesNumber === -4) {
        LOGGER(`Bot ${this.botIndex} - A loja ${storeName} está com aliblock!`, { from: 'SPYBOT', pid: true })
        continue
      }

      if (getUpperSalesNumber > 0) {

        const recentSalesArr = await this.getStoreRecentSalesArray(page)
        const newSalesArr = recentSalesArr.slice(0, getUpperSalesNumber);

        currentCheckSaleCount += Number(getUpperSalesNumber)
        console.log("")
        LOGGER(`Bot ${this.botIndex} - A loja ${storeName} teve ${getUpperSalesNumber} novas vendas!`, { from: 'SPYBOT', pid: true })
        global.WORKER.workerSharedInfo.workerData.workerInfo.botStep = `Adicionando [${getUpperSalesNumber}] novas vendas na loja [${storeName}]`

        await addNewStoreSalesToDatabase(newSalesArr, storeIndex, this)
      } else {
        LOGGER(`Bot ${this.botIndex} - A loja ${storeName} não teve novas vendas!`, { from: 'SPYBOT', pid: true })
      }

      await DELAY(1000)
    }

    console.log("")
    LOGGER(`Foram adicionadas um total de ${currentCheckSaleCount} vendas ao BD`, { from: 'SPYBOT', pid: true })
    if (currentCheckSaleCount > 0) { await updateBotInfo(ENUM_UPDATE_BOT_INFO.LAST_SALE_TIME, this.botIndex); console.log("")}

  }

  private async getStoreRecentSalesArray(page: Page): Promise<IAlihunterSale[]>  {
    await runJsOnPage(page, "clickOnLiveSalesButton()");
    const recentSoldProductsArr = await runJsOnPage(page, "getSoldProductsList()");
    await runJsOnPage(page, "clickOnLiveSalesButton()");
    return recentSoldProductsArr;
  }

  // ===== UTILS METHODS =======================================================

  private async pingBotServer(): Promise<void> {

    LOGGER(`Bot ${this.botIndex} - pingando servidor para evitar idle`, { from: 'SPYBOT', pid: true })
    await fetchJsonUrl(`${SERVER_BASE}/?skip_api=true`)

  }

  async close(): Promise<void>{
    LOGGER(`Bot ${this.botIndex} - fechando bot`, { from: 'SPYBOT', pid: true })

    if (this.botBrowser){
      await this.botBrowser.close()
      LOGGER(`Bot ${this.botIndex} - fechando browser`, { from: 'SPYBOT', pid: true })
    }

    if (mongoose.STATES[mongoose.connection.readyState] === "connected"){
      await mongoose.connection.close()
      LOGGER(`Bot ${this.botIndex} - fechando conexão com banco de dados`, { from: 'SPYBOT', pid: true })
    }

  }

}
