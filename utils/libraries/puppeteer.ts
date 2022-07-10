import {delay as DELAY} from './utils'

export {
  waitTillHTMLRendered,
  runJsOnPage,
  printPagePup,
  addScriptAndRunIntoPage
}

async function waitTillHTMLRendered(page, timeout = 30000){

  const checkDurationMsecs = 1000;
  const maxChecks = timeout / checkDurationMsecs;
  const minStableSizeIterations = 3;
  let lastHTMLSize = 0;
  let checkCounts = 1;
  let countStableSizeIterations = 0;

  while (checkCounts++ <= maxChecks) {

    let html = await page.content();
    let currentHTMLSize = html.length;
    let bodyHTMLSize = await page.evaluate(() => document.body.innerHTML.length);

    if (lastHTMLSize != 0 && currentHTMLSize == lastHTMLSize){
      countStableSizeIterations++;
    } else {
      countStableSizeIterations = 0; //reset the counter
    }

    if (countStableSizeIterations >= minStableSizeIterations) {
      // console.log("Page rendered fully..");
      break;
    } else {
      // console.log(countStableSizeIterations)
      // console.log('last: ', lastHTMLSize, ' <> curr: ', currentHTMLSize, " body html size: ", bodyHTMLSize);
    }

    lastHTMLSize = currentHTMLSize;
    await DELAY(checkDurationMsecs);
  }
};

async function runJsOnPage(page, command){
  return await page.evaluate(async (cmd) => {

    var result;

    try {
      result = eval(cmd)
    } catch (error) {
      result = "ERRO"
      console.log(error)
    }

    console.log(cmd + " -> " + result)
    return result
  }, command)
}

async function printPagePup(page, filename){
  await page.screenshot({ path: `${filename}.png`, fullPage: true })
}

async function addScriptAndRunIntoPage(pageToRun, functionToAdd, commandToRun){

  await pageToRun.addScriptTag({ content: `\n${functionToAdd}\n` });

  const fnResult = await pageToRun.evaluate(function (command) {
    const result = eval(command);
    return result;
  }, commandToRun);

  return fnResult
}
