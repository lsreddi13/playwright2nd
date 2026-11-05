import test from "@playwright/test";

const URL = "https://www.qapractice.com/practice-forms";
test('select by index using to select item from country dropdown', async({page})=>{

    await page.goto(URL);
    const countryListSelect = await page.locator('[id="forms-country"]');

    countryListSelect.selectOption({index:2});
    await page.waitForTimeout(5000);
    countryListSelect.selectOption({label:'United Kingdom'});
    await page.waitForTimeout(5000);
    countryListSelect.selectOption('India');
    await page.waitForTimeout(5000);

})