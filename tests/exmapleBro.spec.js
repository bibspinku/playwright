import {test, expect} from '@playwright/test';

test('Home page', async ({page}) => {

await page.goto('https://www.demoblaze.com/index.html');

await expect(page).toHaveTitle('STORE');

await page.click('id=login2');

await page.locator('#loginusername').fill('pavanol')
await page.fill("input[id='loginpassword']" , 'test@123')

await page.click('//*[@id="logInModal"]/div/div/div[3]/button[2]')

const logoutLink = await page.locator('id=logout2')
await expect(logoutLink).toBeVisible();

await page.close();

})

