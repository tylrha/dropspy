import { Page } from "puppeteer"
import { DELAY, LOGGER } from "../../configs/configs"
import { sendScreenShotToApi, waitTillHTMLRendered } from "./puppeteer"

export {
  loginAtGoogle,
  checkGoogleLogin
}

async function loginAtGoogle(googlePage: Page, email, password): Promise<void> {

  try {

    LOGGER(`Logando no Google [${email}]`, { from: 'SPYBOT', pid: true })

    await googlePage.goto('https://accounts.google.com/')
    await waitTillHTMLRendered(googlePage)
    await DELAY(10000)

    await googlePage.type('input[type="email"]', email)

    await googlePage.keyboard.press('Enter')
    await waitTillHTMLRendered(googlePage)
    await DELAY(10000)

    await googlePage.type('input[type="password"]', password)
    await googlePage.keyboard.press('Enter')
    await DELAY(10000)

    console.log(`PAGE: ${googlePage.url()}`)

  } catch (err) {
    LOGGER(err.message, { from: 'SPYBOT', pid: true, isError: true })
  }

}

async function checkGoogleLogin(googlePage: Page): Promise<false | string> {

  LOGGER(`Verifica login no Google`, { from: 'SPYBOT', pid: true })

  try{
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
    console.log(loginResult)

    if (loginResult === false) {
      LOGGER(`Não conseguiu logar no Google`, { from: 'SPYBOT', pid: true })
      // await saveScreenShot(googlePage)
      await sendScreenShotToApi(googlePage)
    } else {
      LOGGER(`Logou no Google como   : [${loginResult}]`, { from: 'SPYBOT', pid: true })
    }

    return loginResult
  } catch(e){
    console.log(e)
    return false
  }

}
