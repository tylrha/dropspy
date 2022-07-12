import {
  BROWSER_EXTENSIONS,
  BROWSER_WIDTH,
  BROWSER_HEIGHT,
  BROWSER_HEADLESS_MODE,
  DELAY,
  ALIHUNTER_GMAIL_USERNAME,
  ALIHUNTER_GMAIL_PASSWORD,
  NODE_ENV,
  LOGGER,
  SERVER_BASE,
  DEFALT_NODE_ENV
} from "../../../configs/configs"

import { runJsOnPage, waitTillHTMLRendered } from "../../../utils/libraries/puppeteer"
import { getSpyedStores, updateBotInfo, ENUM_UPDATE_BOT_INFO } from "../components/spy-sheets-api"

import mongoose from 'mongoose'
import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
import fetchJsonUrl from "../../../utils/functions/fetch-json-url"
import addNewSaleToDatabase from "../database/add-new-sales-to-database"

import { Browser, Page } from "puppeteer"
import IAlihunterSale from '../interfaces/IAlihunterSale'
import IStoreSheets from '../interfaces/IStoreSheets'

export default class Spybot {

  public botIndex: string
  public botCheckedTimes: number
  public botBrowser: Browser
  public botSpyedStoresArr: Array<IStoreSheets>
  public botInitialSpyDate: string

  constructor(index: string) {
    this.botIndex = index
    this.botCheckedTimes = 0
    // this.botBrowser
    // this.botSpyedStoresArr
    // this.botInitialSpyDate
  }

  // ==== INIT METHODS =========================================================

  async init_browser(): Promise<void> {
    try {
      this.botBrowser = await this.getBrowserInstance()
      if (!this.botBrowser) { throw new Error("Browser não foi iniciado corretamente") }
      this.setBrowserEvents()
    } catch (e) {
      return e.message
    }
  }

  private async getBrowserInstance(): Promise<Browser> {

    try {

      puppeteer.use(StealthPlugin())

      const customArgs = [
        '--no-sandbox',
        `--disable-extensions-except=${BROWSER_EXTENSIONS}`,
        `--load-extension=${BROWSER_EXTENSIONS}`,
        `--window-size=${BROWSER_WIDTH},${BROWSER_HEIGHT}`,
      ];

      const pupOptions = {
        headless: BROWSER_HEADLESS_MODE,
        args: customArgs
      }

      const browserObject = await puppeteer.launch(pupOptions)
      LOGGER(`Bot ${this.botIndex} - browser foi iniciado`, { from: 'SPYBOT', pid: true })

      return browserObject

    } catch (e) {
      console.log(e.message)
    }

  }

  private setBrowserEvents(): void {
    this.botBrowser.on('disconnected', async () => {
      LOGGER(`Bot ${this.botIndex} - o browser foi fechado`, { from: 'SPYBOT', pid: true })
    });
  }

  // ==== SETUP SPY METHODS ====================================================

  async setup_spybot(): Promise<true | string> {
    try {
      const googlePage = await this.setupGooglePage()
      await this.loginAtGoogle(googlePage)
      const isLoggedInGoogle = await this.checkGoogleLogin(googlePage)
      if (isLoggedInGoogle === false) { throw new Error("Erro ao logar no google") }

      const [width, height] = await this.getPageScreenResolution(googlePage)
      LOGGER(`Bot ${this.botIndex} - resolução atual: ${width} x ${height}`, { from: 'SPYBOT', pid: true })

      const alihunterPage = await this.setupAlihunterPage()
      await this.loginAtAlihunterWithGoogle(alihunterPage, height)
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
    await googlePage.setViewport({ width: BROWSER_WIDTH, height: BROWSER_HEIGHT });
    googlePage.setDefaultNavigationTimeout(0);
    return googlePage
  }

  private async loginAtGoogle(googlePage: Page): Promise<void> {

    try {

      LOGGER(`Bot ${this.botIndex} - logando no Google`, { from: 'SPYBOT', pid: true })

      await googlePage.goto('https://accounts.google.com/')
      await waitTillHTMLRendered(googlePage)

      await googlePage.evaluate((emailToType) => {
        const elEmail: HTMLInputElement = document.querySelector('input[type="email"]')
        if (elEmail) { elEmail.value = emailToType }
      }, ALIHUNTER_GMAIL_USERNAME)

      await googlePage.keyboard.press('Enter')
      await waitTillHTMLRendered(googlePage)
      await DELAY(4000)

      await googlePage.evaluate((passwordToType) => {
        const elPassword: HTMLInputElement = document.querySelector('input[type="password"]')
        if (elPassword) { elPassword.value = passwordToType }
      }, ALIHUNTER_GMAIL_PASSWORD)

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

  private async getPageScreenResolution(page: Page): Promise<number[]> {
    const result = await page.evaluate(() => {
      const width = window.screen.width
      const height = window.screen.height
      return [width, height]
    })

    return result
  }

  private async setupAlihunterPage() {
    const aliHunterPage: Page = await this.botBrowser.newPage();
    await aliHunterPage.setViewport({ width: BROWSER_WIDTH, height: BROWSER_HEIGHT });
    aliHunterPage.setDefaultNavigationTimeout(0);
    return aliHunterPage
  }

  private async loginAtAlihunterWithGoogle(alihunterPage: Page, height: number): Promise<void> {

    try {

      const URL_ALIHUNTER_LOGIN = "https://alihunter.io/login"

      LOGGER(`Bot ${this.botIndex} - logando no Alihunter`, { from: 'SPYBOT', pid: true })

      await alihunterPage.goto(URL_ALIHUNTER_LOGIN)
      await waitTillHTMLRendered(alihunterPage)

      const googleClickButton = await alihunterPage.evaluate(async () => {

        const googleLoginQuery = ".LoginPage_btnGoogle__UQryr"
        const elGoogleLogin: HTMLElement = document.querySelector(googleLoginQuery)

        console.error(elGoogleLogin)

        if (elGoogleLogin){
          elGoogleLogin.click()
          return elGoogleLogin.innerText
        }

      })

      console.log(googleClickButton)

      await waitTillHTMLRendered(alihunterPage)
      await DELAY(10000)

    } catch (err) {
      LOGGER(err.message, { from: 'SPYBOT', pid: true, isError: true })
    }
  }

  private async checkAlihunterLogin(alihunterPage: Page): Promise<false | string> {

    LOGGER(`Bot ${this.botIndex} - verifica login no Alihunter`, { from: 'SPYBOT', pid: true })
    await waitTillHTMLRendered(alihunterPage)

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

  // ==== GET UPDATE SPYED STORES ==============================================

  async updateBotSpyedStores(): Promise<void> {

    LOGGER(`Bot ${this.botIndex} - Atualizando lista de lojas espionadas`, { from: "SPYBOT", pid: true })
    const tmpSpyedStores = await getSpyedStores(this.botIndex)

    if (typeof tmpSpyedStores === "string") {
      LOGGER(`Bot ${this.botIndex} - ${tmpSpyedStores}`, { from: "SPYBOT", pid: true })
      global.WORKER.workerInformation.workerInfo.spyedStores = []
    } else {
      LOGGER(`Bot ${this.botIndex} - Foram encontradas ${tmpSpyedStores.length} lojas a seram espionadas`, { from: "SPYBOT", pid: true })
      this.botSpyedStoresArr = tmpSpyedStores
      global.WORKER.workerInformation.workerInfo.spyedStores = tmpSpyedStores
    }
  }

  async hasChangeInSpyedStoresList(): Promise<boolean> {

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

  async openSpyStores(): Promise<void> {

    const currentSpyedStoresArr = this.botSpyedStoresArr
    if (currentSpyedStoresArr.length === 0) { return }

    for (let x = 0; x < currentSpyedStoresArr.length; x++) {
      const curStore: IStoreSheets = currentSpyedStoresArr[x]

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

  async handleSpyListChanges(): Promise<void>{

    LOGGER(`Bot ${this.botIndex} - lidando com mudanças na lista de espionagem`, { from: 'SPYBOT', pid: true })
    await this.closeAllPagesAndLetBlankPage()
    await this.openSpyStores()

  }

  async closeAllPagesAndLetBlankPage(): Promise<void>{

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

  async detectNewSalesInAllStores(): Promise<void> {

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

      const getUpperSalesNumber = await runJsOnPage(page, "getUpperSalesNumber()");

      if (getUpperSalesNumber === -4) {
        LOGGER(`Bot ${this.botIndex} - A loja ${storeName} está com aliblock!`, { from: 'SPYBOT', pid: true })
        continue
      }

      if (getUpperSalesNumber > 0) {
        const recentSalesArr = await this.getStoreRecentSalesArray(page)
        const newSalesArr = recentSalesArr.slice(0, getUpperSalesNumber);
        currentCheckSaleCount += Number(getUpperSalesNumber)
        LOGGER(`Bot ${this.botIndex} - A loja ${storeName} teve ${getUpperSalesNumber} novas vendas!`, { from: 'SPYBOT', pid: true })
        await addNewSaleToDatabase(newSalesArr, this.botSpyedStoresArr[storeIndex])
      } else {
        LOGGER(`Bot ${this.botIndex} - A loja ${storeName} não teve novas vendas!`, { from: 'SPYBOT', pid: true })
      }

      await DELAY(1000)
    }

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

  async pingBotServer(): Promise<void> {

    LOGGER(`Bot ${this.botIndex} - pingando servidor para evitar idle`, { from: 'SPYBOT', pid: true })
    await fetchJsonUrl(SERVER_BASE)

  }

  async close(): Promise<void>{
    LOGGER(`Bot ${this.botIndex} - fechando bot`, { from: 'SPYBOT', pid: true })

    if (this.botBrowser){
      await this.botBrowser.close()
      LOGGER(`Bot ${this.botIndex} - fechando browser`, { from: 'SPYBOT', pid: true })
    }

    if (mongoose.STATES[mongoose.connection.readyState] === "connected"){
      mongoose.connection.close()
      LOGGER(`Bot ${this.botIndex} - fechando conexão com banco de dados`, { from: 'SPYBOT', pid: true })
    }

  }

}
