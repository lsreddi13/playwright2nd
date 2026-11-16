import { test } from '@playwright/test'

test('verify login button is visible with if condition', async ({ page }) => {

    page.goto("https://www.playwrightautomation.com/login.html?redirect=%2Fpractice.html");

    //you can write code to enter user name and password

    const loginBtn = await page.getByTestId("login-submit-button");

    if (await loginBtn.isVisible) {
        await loginBtn.click();
        console.log("login button clicked");
    } else {
        console.log("login button is not displayed");
    }

})