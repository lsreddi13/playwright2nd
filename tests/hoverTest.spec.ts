import test from "@playwright/test";

test('hover test', async({page})=>{

    const URL = "https://www.qapractice.com/practice-login-form";
    await page.goto(URL);
    // await page.waitForTimeout(2000);
    await page.getByRole('link', {name:"Practice Sites"}).hover();
    await page.waitForTimeout(5000);
     await page.getByRole('link', {name:"Interview Prep"}).hover();
    await page.waitForTimeout(5000);

})