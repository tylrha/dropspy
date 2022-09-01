import axios from 'axios';
import { delay } from './utils';
import { Page } from 'puppeteer';

export {
  // saveScreenShot,
  sendScreenShotToApi,
  getActivePage,
  waitTillHTMLRendered,
  runJsOnPage,
  printPagePup,
  addScriptAndRunIntoPage
};

/* ########################################################################## */

// async function saveScreenShot(page: Page): Promise<boolean> {

//   if (!page) { return }

//   const image = await page.screenshot({ fullPage: true }).then((buffer) => buffer);
//   await fs.writeFile('./configs/screenShot.png', image) // , 'utf8'
//   return true

// }

async function sendScreenShotToApi(page: Page) {
  const image = await page.screenshot({ fullPage: true }).then((buffer) => buffer);
  const responseResult = await axios.post('https://instigaremidia.com/api/telegram/image', { image: image });
  console.log(responseResult.data);
}

async function getActivePage(browser, timeout) {
  const start = new Date().getTime();
  while (new Date().getTime() - start < timeout) {
    const pages = await browser.pages();
    const arr = [];
    for (const p of pages) {
      if (await p.evaluate(() => { return document.visibilityState == 'visible'; })) {
        arr.push(p);
      }
    }
    if (arr.length == 1) return arr[0];
  }
  throw 'Unable to get active page';
}

async function waitTillHTMLRendered(page: Page, timeout = 30000) {

  const checkDurationMsecs = 1000;
  const maxChecks = timeout / checkDurationMsecs;
  const minStableSizeIterations = 3;
  let lastHTMLSize = 0;
  let checkCounts = 1;
  let countStableSizeIterations = 0;

  try {

    while (checkCounts++ <= maxChecks) {

      const html = await page.content();
      const currentHTMLSize = html.length;

      if (lastHTMLSize != 0 && currentHTMLSize == lastHTMLSize) {
        countStableSizeIterations++;
      } else {
        countStableSizeIterations = 0; //reset the counter
      }

      if (countStableSizeIterations >= minStableSizeIterations) {
        // console.log("Page rendered fully..")
        break;
      } else {
        // console.log('last: ', lastHTMLSize, ' <> curr: ', currentHTMLSize, 'iteractions: ', countStableSizeIterations)
      }

      lastHTMLSize = currentHTMLSize;
      await delay(checkDurationMsecs);
    }

  } catch (e) {
    console.log(`erro ao esperar pagina: ${e.message}`);
    await delay(checkDurationMsecs);
    await waitTillHTMLRendered(page);
  }

}

async function runJsOnPage(page: Page, command: string) {
  return await page.evaluate(async (cmd) => {

    let result;

    try {
      result = eval(cmd);
    } catch (error) {
      result = 'ERRO';
      console.log(error);
    }

    console.log(cmd + ' -> ' + result);
    return result;
  }, command);
}

async function printPagePup(page, filename) {
  await page.screenshot({ path: `${filename}.png`, fullPage: true });
}

async function addScriptAndRunIntoPage(pageToRun: Page, functionToAdd: any, commandToRun: string) {

  await pageToRun.addScriptTag({ content: `\n${functionToAdd}\n` });

  const fnResult = await pageToRun.evaluate(function (command) {
    const result = eval(command);
    return result;
  }, commandToRun);

  return fnResult;
}

/* ########################################################################## */
