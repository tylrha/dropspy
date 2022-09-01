import { Page } from 'puppeteer';
import { DELAY, LOGGER } from '../../configs/configs';
import { waitTillHTMLRendered } from './puppeteer';

export {
  loginAtAlihunterWithFacebook,
  loginAtAlihunterWithGoogle,
  checkAlihunterLogin
};

async function loginAtAlihunterWithFacebook(alihunterPage: Page): Promise<void> {

  try {

    const URL_ALIHUNTER_LOGIN = 'https://alihunter.io/login';

    await alihunterPage.goto(URL_ALIHUNTER_LOGIN);
    await waitTillHTMLRendered(alihunterPage);
    await DELAY(5000);

    await alihunterPage.evaluate(async () => {

      const googleLoginQuery = '#sign-in-social-facebook'; //".LoginPage_btnFacebook__3a3iw"
      const elGoogleLogin: HTMLElement = document.querySelector(googleLoginQuery);

      if (elGoogleLogin) {
        elGoogleLogin.click();
        return elGoogleLogin.innerText;
      }

    });

  } catch (err) {
    console.log(err.message);
  }
}


async function loginAtAlihunterWithGoogle(alihunterPage: Page): Promise<void> {

  try {

    const URL_ALIHUNTER_LOGIN = 'https://alihunter.io/login';

    LOGGER('logando no Alihunter', { from: 'SPYBOT', pid: true });

    await alihunterPage.goto(URL_ALIHUNTER_LOGIN);
    await waitTillHTMLRendered(alihunterPage);
    await DELAY(5000);

    await alihunterPage.evaluate(async () => {

      const googleLoginQuery = '#sign-in-social-google'; //".LoginPage_btnGoogle__UQryr"
      const elGoogleLogin: HTMLElement = document.querySelector(googleLoginQuery);

      if (elGoogleLogin) {
        elGoogleLogin.click();
        return elGoogleLogin.innerText;
      }

    });

    await waitTillHTMLRendered(alihunterPage);
    await DELAY(15000);

  } catch (err) {
    LOGGER(err.message, { from: 'SPYBOT', pid: true, isError: true });
  }
}

async function checkAlihunterLogin(alihunterPage: Page): Promise<boolean> {

  LOGGER('verifica login no Alihunter', { from: 'SPYBOT', pid: true });

  if (alihunterPage.url().search('login') === -1) {
    return true;
  } else {
    return false;
  }

}
