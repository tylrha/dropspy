import mongoose from 'mongoose';
import { Browser, Page } from 'puppeteer';

import {
  checkAlihunterLogin,
  loginAtAlihunterWithFacebook,
  loginAtAlihunterWithGoogle
} from '../../utils/libraries/alihunter';

import {
  loginAtFacebook
} from '../../utils/libraries/facebook';

import {
  loginAtGoogle
} from '../../utils/libraries/google';

import {
  clickOnLiveSalesButton,
  getAlihunterVariables,
  getSoldProductsList,
  getUpperSalesNumber
} from './methods/aliHunterScripts';

import {
  SPYBOT_LOOP_INTERVAL,
  DATABASE_DATABASE_SPY,
  DATABASE_LOGIN_URL,
  CURRENT_DATETIME,
  SERVER_BASE,
  LOGGER,
  DELAY,
  USE_SAVED_ALIHUNTER_SESSIONS,
  ALIHUNTER_USER
} from '../../configs/configs';

import { getBrowserInstance, setBrowserEvents } from './methods/browser-methods';

import { runJsOnPage, waitTillHTMLRendered } from '../../utils/libraries/puppeteer';

import fetchJsonUrl from '../../utils/functions/fetch-json-url';
import addNewStoreSalesToDatabase from './database/add-new-store-sales-to-database';

import IAlihunterSale from './interfaces/IAlihunterSale';
import IStoreSheets from './interfaces/IStoreSheets';

import updateDatabasePreSpy from './database/update-database-pre-spy';
import Worker from '../clusters/worker/models/Worker';
import { ENUM_UPDATE_BOT_INFO, checkIfBotIsAllowedToSpyInDatabase, getSpyedStoresInDatabase, updateBotInfoInDatabase } from './components/spy-db-api';

interface ISharedStore extends IStoreSheets {
  salesCount?: number,
  salesRevenue?: number,
}

export default class Spybot {

  public botIndex: string;
  public botCheckedTimes: number;
  public botSpyedStoresArr: Array<ISharedStore>;
  public botBrowser: Browser;
  public botInitialSpyDate: string;
  public botWorker: Worker;

  constructor(index: string, worker: Worker) {
    this.botIndex = index;
    this.botCheckedTimes = 0;
    this.botSpyedStoresArr = [];
    // this.botBrowser
    // this.botInitialSpyDate
    this.botWorker = worker;
  }

  // ==== INIT METHODS =========================================================

  async initSpyBot(): Promise<Spybot | string | boolean> {

    try {

      await mongoose.connect(`${DATABASE_LOGIN_URL}/${DATABASE_DATABASE_SPY}`);
      LOGGER(`Bot ${this.botIndex} - foi iniciado`, { from: 'SPYBOT', pid: true });

      await updateBotInfoInDatabase(ENUM_UPDATE_BOT_INFO.INITIAL_INFO, this.botIndex);

      const isBotAllowedToSpy = await checkIfBotIsAllowedToSpyInDatabase(this.botIndex);
      if (isBotAllowedToSpy !== true) { throw new Error(isBotAllowedToSpy); }
      LOGGER(`Bot ${this.botIndex} - pode espionar`, { from: 'SPYBOT', pid: true });

      this.botBrowser = await getBrowserInstance();
      if (!this.botBrowser) { throw new Error('Browser não foi iniciado corretamente'); }
      setBrowserEvents(this.botBrowser);
      LOGGER(`Bot ${this.botIndex} - browser foi iniciado corretamente`, { from: 'SPYBOT', pid: true });

      const alihunterPage: Page = (await this.botBrowser.pages())[0];
      alihunterPage.setDefaultNavigationTimeout(0);

      if (!USE_SAVED_ALIHUNTER_SESSIONS) {
        LOGGER(`Bot ${this.botIndex} - logando com usuario ${ALIHUNTER_USER['email']}`, { from: 'SPYBOT', pid: true });
        await this.setup_spybot();
      } else {
        LOGGER(`Bot ${this.botIndex} - usando sessao salva`, { from: 'SPYBOT', pid: true });
        await alihunterPage.goto('https://alihunter.io/find-product/ae-products');
      }

      const isLogedIn = await checkAlihunterLogin(alihunterPage);
      if (isLogedIn === false) { throw new Error('Não foi possível logar no alihunter!'); }
      LOGGER(`Bot ${this.botIndex} - está pronto para espionar`, { from: 'SPYBOT', pid: true });

      await updateBotInfoInDatabase(ENUM_UPDATE_BOT_INFO.LAST_RESTARTED_TIME, this.botIndex);

      const initialDate = CURRENT_DATETIME('date');
      console.log('');
      LOGGER(`Bot ${this.botIndex} - iniciando espionagem - ${initialDate}\n`, { from: 'SPYBOT', pid: true });
      global.WORKER.workerSharedInfo.workerData.workerInfo.isSpybotActive = true;

      await this.initSpyLooping(initialDate);
      return this;

    } catch (e) {

      LOGGER(`${e.message}`, { from: 'SPYBOT', pid: true, isError: true });
      await updateBotInfoInDatabase(ENUM_UPDATE_BOT_INFO.CLEAN_INFO, this.botIndex);

      if (e.message === 'O bot está desativado' || e.message === 'Os bots foram desligados') {
        LOGGER(`Bot ${this.botIndex} - Finalizando spybot`, { from: 'SPYBOT', pid: true });
        await this.close();
        return false;

      } else {

        await this.restartBotServer(); // RESTART

        if (this.botBrowser) {
          LOGGER('Fechando browser pra evitar múltiplas instâncias do mesmo bot', { from: 'SPYBOT', pid: true });
          await this.botBrowser.close();
        }

        return e.message;

      }

    } finally {

      if (mongoose.STATES[mongoose.connection.readyState] === 'connected') {
        await mongoose.connection.close();
        LOGGER(`Bot ${this.botIndex} - conexão fechada com banco de dados`, { from: 'SPYBOT', pid: true });
      }

      LOGGER(`Bot ${this.botIndex} - terminou de inciar\n`, { from: 'SPYBOT', pid: true });

    }

  }


  // ==== SETUP SPY METHODS ====================================================

  private async setup_spybot(): Promise<true | string> {
    try {

      LOGGER(`Alihunter Auth: ${ALIHUNTER_USER['type']}`, { from: 'SPYBOT', pid: true });

      if (ALIHUNTER_USER['type'] === 'gmail') {

        const googlePage: Page = (await this.botBrowser.pages())[0];
        googlePage.setDefaultNavigationTimeout(0);
        await loginAtGoogle(googlePage, ALIHUNTER_USER['email'], ALIHUNTER_USER['password']);
        // const isLoggedInGoogle = await checkGoogleLogin(googlePage)
        // if (isLoggedInGoogle === false) {
        //   // await saveScreenShot(googlePage)
        //   throw new Error("Erro ao logar no google")
        // }

        const alihunterPage: Page = await this.botBrowser.newPage();
        await loginAtAlihunterWithGoogle(alihunterPage);

        await googlePage.close();

      } else if (ALIHUNTER_USER['type'] === 'facebook') {

        const facebookPage: Page = (await this.botBrowser.pages())[0];
        await loginAtFacebook(facebookPage, ALIHUNTER_USER['email'], ALIHUNTER_USER['password']);
        // const isLoggedInFacebook = await checkFacebookLogin(facebookPage)
        // if (isLoggedInFacebook === false) { throw new Error("Erro ao logar no facebook") }

        const alihunterPage: Page = await this.botBrowser.newPage();
        alihunterPage.setDefaultNavigationTimeout(0);
        await loginAtAlihunterWithFacebook(alihunterPage);

        LOGGER('Esperando 20s', { from: 'SPYBOT', pid: true });
        await DELAY(20000);
        LOGGER('Proseguindo', { from: 'SPYBOT', pid: true });

        const openedPage = (await this.botBrowser.pages())[1];
        await waitTillHTMLRendered(openedPage);

        await openedPage.evaluate(async () => {
          if (window.location.origin.search('facebook') > 0) {
            console.log('Achou facebook');
            const elConfirm = document.querySelectorAll('div[role="button"]')[1] as HTMLElement;
            if (elConfirm) { elConfirm.click(); }
          } else {
            console.log('Nao achou facebook');
          }
        });

        await facebookPage.close();

      }

      return true;
    } catch (e) {
      return e.message;
    }
  }

  // ===== DETECT SALES METHODS ================================================

  private async initSpyLooping(initialDate?: string) {

    global.WORKER.workerSharedInfo.workerData.spyBotInfo.lastCheckedTime = CURRENT_DATETIME();
    global.WORKER.workerSharedInfo.workerData.spyBotInfo.checkedCount += 1;
    this.botCheckedTimes += 1;

    LOGGER(`Bot ${this.botIndex} - checagem de número [${this.botCheckedTimes}] às ${CURRENT_DATETIME()} ---------------------`, { from: 'SPYBOT', pid: true });
    global.WORKER.workerSharedInfo.workerData.workerInfo.botStep = `Verificando novas vendas pela [${this.botCheckedTimes}]a vez`;

    const isFirstInit = this.botCheckedTimes === 1 ? true : false;
    const currentDate = isFirstInit ? initialDate : CURRENT_DATETIME('date');
    const hasChangedSpyDate = isFirstInit ? false : this.botInitialSpyDate !== currentDate;
    if (isFirstInit || hasChangedSpyDate) { this.botInitialSpyDate = initialDate; }
    let hasChangedStoreList = false;

    try {

      const databaseConnectionResult = await mongoose.connect(`${DATABASE_LOGIN_URL}/${DATABASE_DATABASE_SPY}`);
      if (!databaseConnectionResult) { throw new Error('Erro ao abrir conexão com banco de dados'); }
      LOGGER(`Bot ${this.botIndex} - conexão estabelecida com banco de dados`, { from: 'SPYBOT', pid: true });

      if (this.botBrowser === undefined) { throw new Error('O browser foi fechado, não tem como espionar'); }

      await updateBotInfoInDatabase(ENUM_UPDATE_BOT_INFO.CHECKED_INFO, this.botIndex);

      if (!isFirstInit) {
        const isBotAllowedToSpy = await checkIfBotIsAllowedToSpyInDatabase(this.botIndex);
        if (isBotAllowedToSpy !== true) {
          this.botSpyedStoresArr = [];
          await this.closeAllPagesAndLetBlankPage();
          throw new Error(isBotAllowedToSpy);
        }
        LOGGER(`Bot ${this.botIndex} - pode espionar`, { from: 'SPYBOT', pid: true });
      }

      global.WORKER.workerSharedInfo.workerData.workerInfo.isSpybotActive = true;
      await this.updateBotSpyedStores();

      if (!isFirstInit) {
        hasChangedStoreList = await this.hasChangeInSpyedStoresList();
        if (hasChangedStoreList) { await this.handleSpyListChanges(); }
      }

      if (isFirstInit || hasChangedSpyDate || hasChangedStoreList) {
        await updateDatabasePreSpy(this.botSpyedStoresArr, currentDate);
      }

      if (isFirstInit) { await this.openSpyStores(); }

      await this.detectNewSalesInAllStores();

      global.WORKER.workerSharedInfo.workerData.workerInfo.botStep = 'Esperando loop delay para verificar novas vendas';

      await this.pingBotServer();

      if (mongoose.STATES[mongoose.connection.readyState] === 'connected') {
        await mongoose.connection.close();
        LOGGER(`Bot ${this.botIndex} - conexão fechada com banco de dados`, { from: 'SPYBOT', pid: true });
      }

      this.loopAgainAfterTime();

    } catch (e) {

      LOGGER(e.message, { from: 'SPYBOT', pid: true, isError: true });

      global.WORKER.workerSharedInfo.workerData.workerInfo.botStep = `Erro no looping, esperando delay -> ${e.message}`;
      global.WORKER.workerSharedInfo.workerData.workerInfo.isSpybotActive = false;

      if (mongoose.STATES[mongoose.connection.readyState] === 'connected') {
        await mongoose.connection.close();
        LOGGER(`Bot ${this.botIndex} - conexão fechada com banco de dados`, { from: 'SPYBOT', pid: true });
      }

      if (e.message === 'O bot está desativado' || e.message === 'Os bots foram desligados') {

        LOGGER(`Bot ${this.botIndex} - Finalizando spybot`, { from: 'SPYBOT', pid: true });
        await this.close();
        await this.botWorker.closeWorker();

      } else {

        LOGGER(`Bot ${this.botIndex} - Erro no looping: ${e.message}`, { from: 'SPYBOT', pid: true, isError: true });
        LOGGER(`${e.message}`, { from: 'SPYBOT', pid: true, isError: true });

        this.loopAgainAfterTime();

      }

    }

  }

  private loopAgainAfterTime() {

    LOGGER(`Bot ${this.botIndex} - checando dnv em ${SPYBOT_LOOP_INTERVAL / 60}min\n`, { from: 'SPYBOT', pid: true });
    setTimeout(async () => {
      await this.initSpyLooping();
    }, SPYBOT_LOOP_INTERVAL * 1000);

  }

  // ==== GET UPDATE SPYED STORES ==============================================

  private async updateBotSpyedStores(): Promise<void> {

    LOGGER(`Bot ${this.botIndex} - Atualizando lista de lojas espionadas`, { from: 'SPYBOT', pid: true });
    const tmpSpyedStores = await getSpyedStoresInDatabase(this.botIndex);

    if (typeof tmpSpyedStores === 'string') {
      LOGGER(`Bot ${this.botIndex} - ${tmpSpyedStores}`, { from: 'SPYBOT', pid: true });
      global.WORKER.workerSharedInfo.workerData.spyBotInfo.spyedStores = [];
    } else {
      LOGGER(`Bot ${this.botIndex} - Foram encontradas ${tmpSpyedStores.length} lojas a seram espionadas`, { from: 'SPYBOT', pid: true });

      const addpropertiesToStoreObj = (store) => {
        const newStoreObj = {
          ...store,
          salesCount: 0,
          salesRevenue: 0
        };
        return newStoreObj;
      };

      // ISharedStore
      if (this.botSpyedStoresArr.length === 0) {

        this.botSpyedStoresArr = tmpSpyedStores.map(store => addpropertiesToStoreObj(store));

      } else {

        // REMOVE NO LONGER SPYED STORES
        this.botSpyedStoresArr = this.botSpyedStoresArr.filter(oldStore => {
          const storeIndex = tmpSpyedStores.findIndex(newStore => newStore.storeLink === oldStore.storeLink);
          return storeIndex > -1;
        });

        // ADD NEW SPYED STORES TO THIS
        tmpSpyedStores.map(newStore => {
          const storeIndex = this.botSpyedStoresArr.findIndex(oldStore => oldStore.storeLink === newStore.storeLink);
          if (storeIndex === -1) {
            this.botSpyedStoresArr.push(addpropertiesToStoreObj(newStore));
          }
        });

      }
      global.WORKER.workerSharedInfo.workerData.spyBotInfo.spyedStores = this.botSpyedStoresArr;
    }
  }

  private async hasChangeInSpyedStoresList(): Promise<boolean> {

    LOGGER(`Bot ${this.botIndex} - verifica se houve mudança nas lojas espionadas`, { from: 'SPYBOT', pid: true });

    const pagesArr = await this.botBrowser.pages();
    const sortArray = (arr) => { return arr.slice().sort(); };
    const pageLinkArr = sortArray(pagesArr.map(pg => pg.url()));
    const storesLinksArr = sortArray(this.botSpyedStoresArr.map(pg => pg.storeLink));

    const lengthCheck = pageLinkArr.length === storesLinksArr.length;
    const valuesCheck = pageLinkArr.every((value, index) => value.toString().search(storesLinksArr[index]) > -1);
    const hasChanged = !lengthCheck || !valuesCheck;

    return hasChanged;
  }

  // ==== STORE PAGES METHODS ==================================================

  private async openSpyStores(): Promise<void> {

    const currentSpyedStoresArr = this.botSpyedStoresArr;
    if (currentSpyedStoresArr.length === 0) { return; }

    for (let x = 0; x < currentSpyedStoresArr.length; x++) {
      const curStore: ISharedStore = currentSpyedStoresArr[x];
      let page = (await this.botBrowser.pages())[0];
      if (x > 0) {
        page = await this.botBrowser.newPage();
        page.setDefaultNavigationTimeout(0);
      }

      await this.openAndSetupSpyedStorePage(curStore.storeLink, page);
    }

  }

  private async openAndSetupSpyedStorePage(storeLink: string, page: Page): Promise<void> {

    LOGGER(`Bot ${this.botIndex} - abrindo loja: ${storeLink}`, { from: 'SPYBOT', pid: true });
    await page.goto(storeLink);
    await DELAY(4000);

    await page.addScriptTag({ content: `\n${getAlihunterVariables}\n` });
    await page.addScriptTag({ content: `\n${clickOnLiveSalesButton}\n` });
    await page.addScriptTag({ content: `\n${getUpperSalesNumber}\n` });
    await page.addScriptTag({ content: `\n${getSoldProductsList}\n` });

    LOGGER(`Bot ${this.botIndex} - adicinou scripts à loja: ${storeLink}`, { from: 'SPYBOT', pid: true });

  }

  private async handleSpyListChanges(): Promise<void> {

    LOGGER(`Bot ${this.botIndex} - lidando com mudanças na lista de espionagem`, { from: 'SPYBOT', pid: true });

    // fecha lojas nao mais espionadas
    const browserPages = await this.botBrowser.pages();
    for (let x = 0; x < browserPages.length; x++) {

      const curPage = browserPages[x];
      const isStoreInNewList = this.botSpyedStoresArr.findIndex(spyedStoreObj => curPage.url().search(spyedStoreObj.storeLink) > -1);
      if (!isStoreInNewList) { continue; }

      if ((await this.botBrowser.pages()).length === 1) {
        LOGGER(`Bot ${this.botIndex} - abrindo pagina em branco`, { from: 'SPYBOT', pid: true });
        await curPage.goto('about:blank');
      } else {
        LOGGER(`Bot ${this.botIndex} - fechando aba ${curPage.url()}`, { from: 'SPYBOT', pid: true });
        await curPage.close();
      }

    }

    // abre lojas novas que nao tenham ainda
    for (let x = 0; x < this.botSpyedStoresArr.length; x++) {

      const curPage = this.botSpyedStoresArr[x];
      const isStoreAlreadyOpen = (await this.botBrowser.pages()).findIndex(browserPage => browserPage.url().search(curPage.storeLink) > -1);
      if (!isStoreAlreadyOpen) { continue; }

      LOGGER(`Bot ${this.botIndex} - abrindo nova loja ${curPage.storeLink}`, { from: 'SPYBOT', pid: true });
      const page = await this.botBrowser.newPage();
      page.setDefaultNavigationTimeout(0);
      await this.openAndSetupSpyedStorePage(curPage.storeLink, page);
    }

    await DELAY(7000);

    // cloose blank apge if exist
    if ((await this.botBrowser.pages()).length > 1) {
      for (let x = 0; x < (await this.botBrowser.pages()).length; x++) {
        const curPage = (await this.botBrowser.pages())[x];

        if (curPage.url() === 'about:blank') {
          LOGGER(`Bot ${this.botIndex} - fechando página em branco`, { from: 'SPYBOT', pid: true });
          await curPage.close();
        }
      }
    }

    // old way
    // await this.closeAllPagesAndLetBlankPage()
    // await this.openSpyStores()

  }

  private async closeAllPagesAndLetBlankPage(): Promise<void> {

    const browserPages = await this.botBrowser.pages();

    for (let x = 0; x < browserPages.length; x++) {
      const curPage = browserPages[x];

      if (x === 0) {
        await curPage.goto('about:blank');
      } else {
        LOGGER(`Bot ${this.botIndex} - fechando aba ${curPage.url()}`, { from: 'SPYBOT', pid: true });
        await curPage.close();
      }

    }

  }

  // ===== DETECT SALES METHODS ================================================

  private async detectNewSalesInAllStores(): Promise<void> {


    const initialPages = 0;
    const browserPages = (await this.botBrowser.pages()).length;
    let currentCheckSaleCount = 0;

    for (let x = initialPages; x < browserPages; x++) {

      const page = (await this.botBrowser.pages())[x];
      const pageLink = page.url();
      const storeIndex = this.botSpyedStoresArr.findIndex(store => pageLink.search(store.storeLink) > -1);

      if (storeIndex === -1) {
        LOGGER(`Bot ${this.botIndex} - erro ao encontrar loja! | ${pageLink}`, { from: 'SPYBOT', pid: true });
        continue;
      }

      const currentStoreObj = this.botSpyedStoresArr[storeIndex];
      const storeName = currentStoreObj.storeName;
      await page.bringToFront();
      global.WORKER.workerSharedInfo.workerData.workerInfo.botStep = `Detectando novas vendas na loja [${storeName}]`;

      const getUpperSalesNumber = await runJsOnPage(page, 'getUpperSalesNumber()');

      if (getUpperSalesNumber === -4) {
        LOGGER(`Bot ${this.botIndex} - A loja ${storeName} está com aliblock!`, { from: 'SPYBOT', pid: true });
        continue;
      }

      if (getUpperSalesNumber > 0) {

        const recentSalesArr = await this.getStoreRecentSalesArray(page);
        const newSalesArr = recentSalesArr.slice(0, getUpperSalesNumber);

        currentCheckSaleCount += Number(getUpperSalesNumber);
        console.log('');
        LOGGER(`Bot ${this.botIndex} - A loja ${storeName} teve ${getUpperSalesNumber} novas vendas!`, { from: 'SPYBOT', pid: true });
        global.WORKER.workerSharedInfo.workerData.workerInfo.botStep = `Adicionando [${getUpperSalesNumber}] novas vendas na loja [${storeName}]`;

        await addNewStoreSalesToDatabase(newSalesArr, storeIndex, this);
      } else {
        LOGGER(`Bot ${this.botIndex} - A loja ${storeName} não teve novas vendas!`, { from: 'SPYBOT', pid: true });
      }

      await DELAY(1000);
    }

    console.log('');
    LOGGER(`Foram adicionadas um total de ${currentCheckSaleCount} vendas ao BD`, { from: 'SPYBOT', pid: true });
    if (currentCheckSaleCount > 0) { await updateBotInfoInDatabase(ENUM_UPDATE_BOT_INFO.LAST_SALE_TIME, this.botIndex); console.log(''); }

  }

  private async getStoreRecentSalesArray(page: Page): Promise<IAlihunterSale[]> {
    await runJsOnPage(page, 'clickOnLiveSalesButton()');
    const recentSoldProductsArr = await runJsOnPage(page, 'getSoldProductsList()');
    await runJsOnPage(page, 'clickOnLiveSalesButton()');
    return recentSoldProductsArr;
  }

  // ===== UTILS METHODS =======================================================

  private async pingBotServer(): Promise<void> {

    LOGGER(`Bot ${this.botIndex} - pingando servidor para evitar idle`, { from: 'SPYBOT', pid: true });
    await fetchJsonUrl(`${SERVER_BASE}/?skip_api=true`);

  }


  private async restartBotServer(): Promise<void> {

    LOGGER(`Bot ${this.botIndex} - restartando servidor para evitar idle`, { from: 'SPYBOT', pid: true });
    await fetchJsonUrl(`${SERVER_BASE}/restart`);

  }

  async close(): Promise<void> {
    LOGGER(`Bot ${this.botIndex} - fechando bot`, { from: 'SPYBOT', pid: true });

    if (this.botBrowser) {
      await this.botBrowser.close();
      LOGGER(`Bot ${this.botIndex} - fechando browser`, { from: 'SPYBOT', pid: true });
    }

    if (mongoose.STATES[mongoose.connection.readyState] === 'connected') {
      await mongoose.connection.close();
      LOGGER(`Bot ${this.botIndex} - fechando conexão com banco de dados`, { from: 'SPYBOT', pid: true });
    }

  }

}
