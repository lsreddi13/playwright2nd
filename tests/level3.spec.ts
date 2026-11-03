import test, { expect } from "@playwright/test";

test('select item from select options list', async ({ page }) => {


    //open browser and Launch app
    const URL = "https://www.playwrightautomation.com/practice.html?utm_source=chatgpt.com";
    await page.goto(URL);
    //verify country dropdown list is displayed 
    // const countryList = await page.getByLabel("Select Country");
    // const countryList = await page.locator("#country");
    // await countryList.selectOption("Canada");

    await page.waitForTimeout(5000);
    // await countryList.selectOption("India");

    // await page.waitForTimeout(10000);
    await page.locator('#pp-sidebar > div.pp-nav-list > div.pp-nav-group:nth-of-type(2) > button.pp-nav-mod > span.pp-nav-label:nth-of-type(2)').click();
    await page.getByRole('link', { name: 'Bootstrap Dropdown' }).click();

    await page.locator('#bd-job-title > div.bd-select-trigger').click();
    await page.getByText('QA Lead').click();

    // page.locator('#bd-job-title > div.bd-select-trigger > span.bd-select-text.text-slate-700:nth-of-type(1)').click();
    // await page.locator("#bd-job-title-menu").click();
 
    // await page.getByRole('option', { name: 'QA Lead' }).click();

    // await page.locator("//ul[@id='bd-job-title-menu']/li[contains(text(), 'QA Lead')]").click();

    await page.waitForTimeout(10000);
})



