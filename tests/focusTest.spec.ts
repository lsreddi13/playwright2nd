import test from "@playwright/test";

const URL = "https://www.qapractice.com/practice-login-form";
test('focus - cehcking', async({page})=>{

await page.goto(URL);



await page.locator('[id="login-email"]').focus();
await page.waitForTimeout(5000);
await page.locator('[id="login-password"]').focus();
await page.waitForTimeout(5000);

})