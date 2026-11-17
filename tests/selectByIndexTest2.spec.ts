import { test, Page } from "@playwright/test";

const URL = "https://www.qapractice.com/practice-forms";
test('select by index using to select item from country dropdown', async ({ page }) => {

    await page.goto(URL);
    const countryListSelect = await page.locator('[id="forms-country"]');

    await selectCountryIndex(page, 2);

    await page.waitForTimeout(5000);
    countryListSelect.selectOption({ label: 'United Kingdom' });
    await page.waitForTimeout(5000);
    countryListSelect.selectOption('India');
    await page.waitForTimeout(5000);

})

function selectCountryIndex(page: Page, Index: number) {

    const countryListSelect = page.locator('[id="forms-country"]');

    countryListSelect.selectOption({ index: +Index });

}

test('use for loop and select each country', async ({ page }) => {


    const URL = "https://www.playwrightautomation.com/practice.html#section-dropdowns";
    await page.goto(URL);

    const countryListSelect = await page.locator('[id="country"]');
    const numOfCountries = await countryListSelect.locator("option").count();
    console.log("Number of Countries :" + numOfCountries);
    //get the length of list items
    for (let i = 0; i < numOfCountries; i++) {
       await  countryListSelect.selectOption({ index: +i });
        await page.waitForTimeout(5000);
    }






})