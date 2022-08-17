import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
import { Browser } from "puppeteer"
import { join } from 'path'
import { readdirSync, statSync, existsSync } from 'fs'
import { DELAY, BROWSER_EXTENSIONS_PATH, BROWSER_EXTENSIONS_UNZIPED_PATH, BROWSER_SESSION_PATH, BROWSER_SESSION_UNZIPED_PATH, BROWSER_HEADLESS_MODE, DIST_FOLDER, LOGGER, ROOT_PATH } from "../../../configs/configs"
import extractBrowserExtensions from "../components/extract-browser-extensions"
import extractBrowserSession from '../components/extract-browser-session'

export {
  getBrowserInstance,
  setBrowserEvents
}

async function getBrowserInstance(): Promise<Browser> {

  try {

    if (!existsSync(BROWSER_EXTENSIONS_UNZIPED_PATH)) {
      if (!existsSync(BROWSER_EXTENSIONS_PATH)) { throw new Error("Nãh há extensões para extrair") }
      LOGGER(`Extraindo extensões do bot`, { from: 'SPYBOT', pid: true })
      await extractBrowserExtensions()
    } else {
      LOGGER(`Extensões já estavam extraídas`, { from: 'SPYBOT', pid: true })
    }

    if (!existsSync(BROWSER_SESSION_UNZIPED_PATH)) {
      if (!existsSync(BROWSER_SESSION_PATH)) { throw new Error("Nãh há sessão para extrair") }
      LOGGER(`Extraindo sessão do bot`, { from: 'SPYBOT', pid: true })
      await extractBrowserSession()
    } else {
      LOGGER(`Sessão já estava extraída`, { from: 'SPYBOT', pid: true })
    }

    await DELAY(5000)
    console.log(`Pasta da sessão: ${BROWSER_SESSION_UNZIPED_PATH}`)

    puppeteer.use(StealthPlugin())

    const _getBrowserExtensionsString = () => {
      const _unzipedExtensionsContentArr = readdirSync(BROWSER_EXTENSIONS_UNZIPED_PATH)
      const _unzipedExtensionsFoldersArr = _unzipedExtensionsContentArr.filter(item => statSync(join(BROWSER_EXTENSIONS_UNZIPED_PATH, item)).isDirectory())
      const _unzipedExtensionsFoldersWithCompletePathArr = _unzipedExtensionsFoldersArr.map(extFolder => ROOT_PATH(join(BROWSER_EXTENSIONS_UNZIPED_PATH.replace(DIST_FOLDER, ""), extFolder)))
      const _allFoldersString = _unzipedExtensionsFoldersWithCompletePathArr.join()
      return _allFoldersString
    }

    const allExtensionsPathString = _getBrowserExtensionsString()

    if (allExtensionsPathString === "") { throw new Error("Não há extensões para o browser") }

    const customArgs = [
      '--no-sandbox',
      `--disable-extensions-except=${allExtensionsPathString}`,
      `--load-extension=${allExtensionsPathString}`,

      // "--ignore-certificate-errors",
      // "--unlimited-storage",
      // '--disable-setuid-sandbox',
      // '--disable-site-isolation-trials',
      // "--full-memory-crash-report",
      // "--disable-dev-shm-usage",
      // "--lang=en-US;q=0.9,en;q=0.8",
      // "--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36",
    ];

    const pupOptions = {
      headless: BROWSER_HEADLESS_MODE,
      args: customArgs,
      defaultViewport: null,
      userDataDir: BROWSER_SESSION_UNZIPED_PATH,
      // ignoreHTTPSErrors: true,
      // dumpio: false
    }


    const browserObject = await puppeteer.launch(pupOptions)
    LOGGER(`Browser foi iniciado`, { from: 'SPYBOT', pid: true })

    return browserObject

  } catch (e) {
    LOGGER(`${e.message}`, { from: 'SPYBOT', pid: true, isError: true })
  }

}

function setBrowserEvents(browser: Browser): void {
  browser.on('disconnected', async () => {
    LOGGER(`O browser foi fechado`, { from: 'SPYBOT', pid: true })
    browser = undefined
  });
}
