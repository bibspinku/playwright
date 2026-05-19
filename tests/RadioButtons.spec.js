
const {test,expect} = require("@playwright/test")

test ('radionbutton' ,async({page})=>{

await page.goto('https://demoqa.com/automation-practice-form')

await page.locator("//input[@id = 'gender-radio-1']").check();

await expect (await page.locator("//input[@id = 'gender-radio-1']")).toBeChecked();

await expect (await page.locator("//input[@id = 'gender-radio-1']").isChecked()).toBeTruthy();
await expect (await page.locator("//input[@id = 'gender-radio-2']").isChecked()).toBeFalsy();

await page.waitForTimeout(5000);


})

