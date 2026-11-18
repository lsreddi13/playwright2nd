import { expect, test } from "@playwright/test"


test('select country from country lsit if country is available', async ({ page }) => {
    const url = "https://www.playwrightautomation.com/practice.html#section-dropdowns";
    const exp_countryOptions = ["Select a country…","United States","Canada","United Kingdom","Germany","France",
        "Australia","Japan","China","Brazil","India"];

    await page.goto(url);

    const countryList = await page.getByLabel("Select Country");

    const countryOptionList = await countryList.locator("option");

    console.log(await countryOptionList.count());

    const act_Countries = await countryOptionList.allTextContents();

    await expect(act_Countries).toBe(exp_countryOptions);

    console.log("act_Countries : " + act_Countries)
    
    if (act_Countries.includes("UK")) {
        await countryList.selectOption("UK");
    } else{
        console.log("China is not available so selecting United States")
        await countryList.selectOption("United States");
    }

    await page.waitForTimeout(10000);

})