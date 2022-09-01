import { waitTillHTMLRendered } from './puppeteer';
import { delay } from './utils';

export {
  loginAtFacebook
};

async function loginAtFacebook(page, email, password) {

  await page.goto('https://www.facebook.com/login');
  await await delay(5000);
  await waitTillHTMLRendered(page);

  await page.waitForSelector('#email', { visible: true });
  await page.type('#email', email);

  await page.waitForSelector('#pass', { visible: true });
  await page.type('#pass', password);

  await page.click('button[name="login"]');

  await await delay(5000);
  await waitTillHTMLRendered(page);

}
