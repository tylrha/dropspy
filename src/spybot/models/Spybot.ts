import {
  SPYBOT_APP_USER,
  BROWSER_EXTENSIONS,
  BROWSER_WIDTH,
  BROWSER_HEIGHT,
  BROWSER_HEADLESS_MODE,
  DELAY,
  ALIHUNTER_GMAIL_USERNAME,
  ALIHUNTER_GMAIL_PASSWORD,
  NODE_ENV,
  LOGGER,
  SERVER_BASE
} from "../../../configs/configs"

import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
import { runJsOnPage, waitTillHTMLRendered } from "../../../utils/libraries/puppeteer"
import { getSpyedStores, updateBotInfo, ENUM_UPDATE_BOT_INFO } from "../components/spy-sheets-api"
import IAlihunterSale from '../interfaces/IAlihunterSale'

import IStoreSheets from '../interfaces/IStoreSheets'
import fetchJsonUrl from "../../../utils/functions/fetch-json-url"
import addNewSaleToDatabase from "../database/add-new-sales-to-database"

export default class Spybot {

  public botIndex: string
  public isBotActive: boolean
  public isLoggedInGoogle: boolean
  public isLoggedInAlihunter: boolean
  public botBrowser: any
  public spyedStoresArr: Array<IStoreSheets>
  public initialSpyDate: string
  public spyCheckedTime: Number

  constructor(index?: string) {
    this.botIndex = index ? index : SPYBOT_APP_USER
    this.isBotActive = false
    this.isLoggedInGoogle = false
    this.isLoggedInAlihunter = false
    this.botBrowser = {}
    // this.spyedStoresArr = []
    // this.initialSpyDate = ""
    this.spyCheckedTime = 0
  }

  async init_browser() {
    try {
      this.botBrowser = await this.getBrowserInstance()
      if (!this.botBrowser) { throw new Error("Browser não foi iniciado corretamente") }
      this.setBrowserEvents()
    } catch (e) {
      return e.message
    }
  }

  async setup_spybot() {
    try {
      const googlePage = await this.setupGooglePage()
      await this.loginAtGoogle(googlePage)
      this.isLoggedInGoogle = await this.checkGoogleLogin(googlePage)
      if (!this.isLoggedInGoogle) { throw new Error("Erro ao logar no google") }

      const [width, height] = await this.getPageScreenResolution(googlePage)
      LOGGER(`Bot ${this.botIndex} - resolução atual: ${width} x ${height}`, { from: 'SPYBOT', pid: true })

      const alihunterPage = await this.setupAlihunterPage()
      await this.loginAtAlihunterWithGoogle(alihunterPage, height)
      this.isLoggedInAlihunter = await this.checkAlihunterLogin(alihunterPage)
      if (!this.isLoggedInAlihunter) { throw new Error("Erro ao logar no alihunter") }

      await googlePage.close()
      return true
    } catch (e) {
      return e.message
    }
  }

  private async getBrowserInstance() {

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

    try {
      return await puppeteer.launch(pupOptions)
    } catch (e) {
      return false
    }

  }

  private setBrowserEvents() {
    this.botBrowser.on('disconnected', async () => {
      LOGGER(`Bot ${this.botIndex} - o browser fechado`, { from: 'SPYBOT', pid: true })
    });
  }

  private async setupGooglePage() {
    const googlePage = (await this.botBrowser.pages())[0];
    await googlePage.setViewport({ width: BROWSER_WIDTH, height: BROWSER_HEIGHT });
    await googlePage.setDefaultNavigationTimeout(0);
    return googlePage
  }

  private async loginAtGoogle(googlePage) {

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

  private async checkGoogleLogin(googlePage) {

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

  private async getPageScreenResolution(page) {
    const result = await page.evaluate(() => {
      const width = window.screen.width
      const height = window.screen.height
      return [width, height]
    })

    return result
  }

  private async setupAlihunterPage() {
    const aliHunterPage = await this.botBrowser.newPage();
    await aliHunterPage.setViewport({ width: BROWSER_WIDTH, height: BROWSER_HEIGHT });
    await aliHunterPage.setDefaultNavigationTimeout(0);
    return aliHunterPage
  }

  private async loginAtAlihunterWithGoogle(alihunterPage, height) {

    try {

      const URL_ALIHUNTER_LOGIN = "https://alihunter.io/login"

      LOGGER(`Bot ${this.botIndex} - logando no Alihunter`, { from: 'SPYBOT', pid: true })

      await alihunterPage.goto(URL_ALIHUNTER_LOGIN)
      await waitTillHTMLRendered(alihunterPage)

      if (NODE_ENV !== "production") {

        await alihunterPage.mouse.move(500, 464.4); // HEROKU -> 460.79999999999995 | 464.4
        await alihunterPage.mouse.down();
        await alihunterPage.mouse.up();
        await DELAY(2000);

      } else {

        const upper = height * 0.6
        const lower = height * 0.4
        const step = 10

        LOGGER(`LOOPING FROM ${upper} TO ${lower}`, { from: 'SPYBOT', pid: true })

        for (let x = upper; x > lower; x = x - step) {
          await alihunterPage.mouse.move(500, x);
          await alihunterPage.mouse.down();
          await alihunterPage.mouse.up();
          await DELAY(2000);

          const pageCount = (await this.botBrowser.pages()).length
          const lastPage = (await this.botBrowser.pages())[Number(pageCount - 1)];
          const pageLink = lastPage.url()

          if (pageCount > 2) {
            LOGGER(x + " - " + pageCount + " - " + pageLink, { from: 'SPYBOT', pid: true })
            LOGGER(await this.botBrowser.pages()[2], { from: 'SPYBOT', pid: true })
            break
          } else {
            LOGGER(x + " - " + pageLink, { from: 'SPYBOT', pid: true })
          }
        }

      }

      await waitTillHTMLRendered(alihunterPage)
      await DELAY(10000)

    } catch (err) {
      LOGGER(err.message, { from: 'SPYBOT', pid: true, isError: true })
    }
  }

  private async checkAlihunterLogin(alihunter) {

    LOGGER(`Bot ${this.botIndex} - verifica login no Alihunter`, { from: 'SPYBOT', pid: true })
    await waitTillHTMLRendered(alihunter)

    const loginResult = await alihunter.evaluate(async () => {
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

  async updateBotSpyedStores() {

    LOGGER(`Bot ${this.botIndex} - Atualizando lista de lojas espionadas`, { from: "SPYBOT", pid: true })
    const tmpSpyedStores = await getSpyedStores(this.botIndex)

    if (typeof tmpSpyedStores === "string") {
      LOGGER(`Bot ${this.botIndex} - ${tmpSpyedStores}`, { from: "SPYBOT", pid: true })
    } else {
      this.spyedStoresArr = tmpSpyedStores
    }
  }

  async openSpyStores() {

    const currentSpyedStoresArr = this.spyedStoresArr
    if (currentSpyedStoresArr.length === 0) { return }

    const {
      getAlihunterVariables,
      clickOnLiveSalesButton,
      getSoldProductsList,
      getUpperSalesNumber
    } = await import('../assets/aliHunterScripts')

    for (let x = 0; x < currentSpyedStoresArr.length; x++) {

      const curStore: IStoreSheets = currentSpyedStoresArr[x]

      let page = (await this.botBrowser.pages())[0];
      if (x > 0) { page = await this.botBrowser.newPage() }
      await page.setDefaultNavigationTimeout(0);

      LOGGER(`Bot ${this.botIndex} - abrindo loja: ${curStore.storeLink}`, { from: "SPYBOT", pid: true })
      await page.goto(curStore.storeLink);
      await DELAY(4000)

      await page.addScriptTag({ content: `\n${getAlihunterVariables}\n` });
      await page.addScriptTag({ content: `\n${clickOnLiveSalesButton}\n` });
      await page.addScriptTag({ content: `\n${getUpperSalesNumber}\n` });
      await page.addScriptTag({ content: `\n${getSoldProductsList}\n` });

    }

  }

  async hasChangeInSpyedStoresList() {

    LOGGER(`Bot ${this.botIndex} - verifica se houve mudança nas lojas espionadas`, { from: 'SPYBOT', pid: true })

    const pagesArr = await this.botBrowser.pages()
    const sortArray = (arr) => { return arr.slice().sort() }
    const pageLinkArr = sortArray(pagesArr.map(pg => pg.url()))
    const storesLinksArr = sortArray(this.spyedStoresArr.map(pg => pg.storeLink))

    const lengthCheck = pageLinkArr.length === storesLinksArr.length
    const valuesCheck = pageLinkArr.every((value, index) => value.toString().search(storesLinksArr[index]) > -1)
    const hasChanged = !lengthCheck || !valuesCheck

    return hasChanged
  }

  async pingBotServer() {

    LOGGER(`Bot ${this.botIndex} - pingando servidor para evitar idle`, { from: 'SPYBOT', pid: true })
    await fetchJsonUrl(SERVER_BASE)

  }

  async detectNewSalesInAllStores() {

    const initialPages = 0
    const browserPages = (await this.botBrowser.pages()).length
    let currentCheckSaleCount = 0

    for (let x = initialPages; x < browserPages; x++) {

      let page = (await this.botBrowser.pages())[x];
      const pageLink = page.url()
      const storeIndex = this.spyedStoresArr.findIndex(store => pageLink.search(store.storeLink) > -1)

      if (storeIndex === -1) {
        LOGGER(`Bot ${this.botIndex} - erro ao encontrar loja! | ${pageLink}`, { from: 'SPYBOT', pid: true })
        continue;
      }

      const currentStoreObj = this.spyedStoresArr[storeIndex]
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
        await addNewSaleToDatabase(newSalesArr, this.spyedStoresArr[storeIndex])
      } else {
        LOGGER(`Bot ${this.botIndex} - A loja ${storeName} não teve novas vendas!`, { from: 'SPYBOT', pid: true })
      }

      await DELAY(1000)
    }

    LOGGER(`Foram adicionadas um total de ${currentCheckSaleCount} vendas ao BD\n`, { from: 'SPYBOT', pid: true })
    if (currentCheckSaleCount > 0) { await updateBotInfo(ENUM_UPDATE_BOT_INFO.LAST_SALE_TIME) }

  }

  private async getStoreRecentSalesArray(page): Promise<IAlihunterSale[]>  {
    await runJsOnPage(page, "clickOnLiveSalesButton()");
    const recentSoldProductsArr = await runJsOnPage(page, "getSoldProductsList()");
    await runJsOnPage(page, "clickOnLiveSalesButton()");
    return recentSoldProductsArr;
  }
}
