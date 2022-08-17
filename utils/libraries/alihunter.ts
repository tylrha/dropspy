import { Page } from "puppeteer"
import { DELAY, LOGGER } from "../../configs/configs"
import { waitTillHTMLRendered } from "./puppeteer"

export {
  loginAtAlihunterWithFacebook,
  loginAtAlihunterWithGoogle,
  checkAlihunterLogin
}

async function loginAtAlihunterWithFacebook(alihunterPage: Page): Promise<void> {

  try {

    const URL_ALIHUNTER_LOGIN = "https://alihunter.io/login"

    await alihunterPage.goto(URL_ALIHUNTER_LOGIN)
    await waitTillHTMLRendered(alihunterPage)
    await DELAY(5000)

    await alihunterPage.evaluate(async () => {

      const googleLoginQuery = ".LoginPage_btnFacebook__3a3iw"
      const elGoogleLogin: HTMLElement = document.querySelector(googleLoginQuery)

      if (elGoogleLogin) {
        elGoogleLogin.click()
        return elGoogleLogin.innerText
      }

    })

    await waitTillHTMLRendered(alihunterPage)
    await DELAY(15000)

  } catch (err) {
    console.log(err.message)
  }
}


async function loginAtAlihunterWithGoogle(alihunterPage: Page): Promise<void> {

  try {

    const URL_ALIHUNTER_LOGIN = "https://alihunter.io/login"

    LOGGER(`logando no Alihunter`, { from: 'SPYBOT', pid: true })

    await alihunterPage.goto(URL_ALIHUNTER_LOGIN)
    await waitTillHTMLRendered(alihunterPage)
    await DELAY(5000)

    await alihunterPage.evaluate(async () => {

      const googleLoginQuery = ".LoginPage_btnGoogle__UQryr"
      const elGoogleLogin: HTMLElement = document.querySelector(googleLoginQuery)

      if (elGoogleLogin) {
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

async function checkAlihunterLogin(alihunterPage: Page): Promise<false | string> {

  LOGGER(`verifica login no Alihunter`, { from: 'SPYBOT', pid: true })

  if (alihunterPage.url().search("https://alihunter.io/product-analysis") === -1){
    await alihunterPage.goto('https://alihunter.io/product-analysis')
  }

  await waitTillHTMLRendered(alihunterPage)

  const loginResult = await alihunterPage.evaluate(async () => {
    const el: HTMLElement = document.querySelector('span.msui-text-truncate')
    return el ? el.innerText : false
  })

  if (!loginResult) {
    LOGGER(`não conseguiu logar no Alihunter`, { from: 'SPYBOT', pid: true })
  } else {
    LOGGER(`logou no Alihunter como: [${loginResult}]`, { from: 'SPYBOT', pid: true })
  }

  return loginResult
}
