import { test, expect } from "@playwright/test";

test('practice assertions', async ({ page }) => {

    await page.goto("https://www.facebook.com/");


    const loginBtn = await page.locator("//span/span[contains(text(), 'Log in')]");

    await page.waitForTimeout(2000);
   await expect(loginBtn).toBeVisible();

    const forgtPwdLink = await page.locator("//span/span[contains(text(), 'Forgotten password?')]");
    forgtPwdLink.click();
    await page.waitForTimeout(2000);
    await expect(loginBtn).not.toBeVisible();




})