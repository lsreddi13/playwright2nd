import test, { expect } from "@playwright/test";

test('handling drop down list', async ({ page }) => {

     const expectedCountryList = [
        'Select a country…',
        'United States',
        'Canada',
        'United Kingdom',
        'Germany',
        'France',
        'Australia',
        'Japan',
        'China',
        'Brazil',
        'India'
    ];
    //open browser and Launch app
    const URL = "https://www.playwrightautomation.com/practice.html?utm_source=chatgpt.com";
    await page.goto(URL);
    //verify country dropdown list is displayed 
    const countryList = await page.getByLabel("Select Country");
    // console.log(await countryList.isVisible());
    const countryListOption = await countryList.locator("option");
    const count = await countryListOption.count();
    // console.log("Number of countries in the country list : " + await countryListOption.count());
    //verify countries list count
    const expectedCount = 11;
    expect(expectedCount).toEqual(count); // this is an assertion
    //print all countries list
    const actualCountryList = await countryListOption.allTextContents()
    //verify countries list
    expect(expectedCountryList).toEqual(actualCountryList); //assertion
})


test.skip('getBylabel drop down list', async ({ page }) => {

    const URL = "https://www.qapractice.com/practice-login-form";
    await page.goto(URL);


    await page.getByLabel("Email Address").fill("sasi@gmail.com");

    await page.waitForTimeout(10000);


})

