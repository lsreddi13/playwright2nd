import test from "@playwright/test";

const URL = "https://www.facebook.com/";
test('blur test', async({page})=>{

    await page.goto(URL);
    

    await page.waitForTimeout(5000);
    await page.locator('[id="_R_c9l6neappb6amH1_"]').blur();
    await page.waitForTimeout(5000);
    await page.locator('[id="_R_c9l6neappb6amH1_"]').press('Enter');


    
})