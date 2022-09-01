import puppeteer from 'puppeteer-extra'
import { Browser, executablePath } from "puppeteer"
import StealthPlugin from 'puppeteer-extra-plugin-stealth'


import { join } from 'path'
import { readdirSync, statSync, existsSync } from 'fs'
import { DELAY, USE_SAVED_ALIHUNTER_SESSIONS, BROWSER_EXTENSIONS_PATH, BROWSER_EXTENSIONS_UNZIPED_PATH, BROWSER_SESSION_PATH, BROWSER_SESSION_UNZIPED_PATH, BROWSER_HEADLESS_MODE, DIST_FOLDER, LOGGER, ROOT_PATH } from "../../../configs/configs"
import extractBrowserExtensions from "../components/extract-browser-extensions"
import extractBrowserSession from '../components/extract-browser-session'

export {
  getBrowserInstance,
  setBrowserEvents
}

async function getBrowserInstance(): Promise<Browser> {

  puppeteer.use(StealthPlugin())

  try {

    if (USE_SAVED_ALIHUNTER_SESSIONS) {
      if (!existsSync(BROWSER_SESSION_UNZIPED_PATH)) {
        if (!existsSync(BROWSER_SESSION_PATH)) { throw new Error("Nãh há sessão para extrair") }
        LOGGER(`Extraindo sessão do bot`, { from: 'SPYBOT', pid: true })
        await extractBrowserSession()
      } else {
        LOGGER(`Sessão já estava extraída`, { from: 'SPYBOT', pid: true })
      }

      await DELAY(5000)

    }

    if (!existsSync(BROWSER_EXTENSIONS_UNZIPED_PATH)) {
      if (!existsSync(BROWSER_EXTENSIONS_PATH)) { throw new Error("Nãh há extensões para extrair") }
      LOGGER(`Extraindo extensões do bot`, { from: 'SPYBOT', pid: true })
      await extractBrowserExtensions()
    } else {
      LOGGER(`Extensões já estavam extraídas`, { from: 'SPYBOT', pid: true })
    }

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
    ];

    let pupOptions = {
      headless: BROWSER_HEADLESS_MODE,
      args: customArgs,
      defaultViewport: null,
      executablePath: executablePath()
    }

    if (USE_SAVED_ALIHUNTER_SESSIONS){
      pupOptions['userDataDir'] = BROWSER_SESSION_UNZIPED_PATH
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
