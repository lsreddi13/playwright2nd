import { test, expect } from "@playwright/test"

test('e2e', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByPlaceholder("Username").pressSequentially("Admin")
    await page.getByPlaceholder("Password").fill("admin123")
    await page.getByRole('button', { name: " Login " }).click();
    await page.waitForTimeout(5000)

    await page.getByText('Admin', { exact: true }).click();

    await page.getByRole('button', { name: 'Add' }).click();
    // await page.locator(".oxd-icon.bi-plus.oxd-button-icon").click();
    await page.locator(".oxd-select-text--after").first().click();
    await page.locator("//*[@class='oxd-select-dropdown --positon-bottom']/div/span[contains(text(), 'Admin')]").click();

    await page.locator('.oxd-select-text').nth(1).click();

    // Select Enabled
    await page.getByText('Enabled', { exact: true }).click();

    await page.getByPlaceholder("Type for hints...").fill("Peter")

    await page.locator('.oxd-autocomplete-option')
        .filter({ hasText: 'Peter Mac Anderson' })
        .click();
// Enter Username
await page.locator('.oxd-grid-item')
    .filter({ hasText: /^Username/ })
    .locator('input')
    .fill('sasiqa1234');
        // Enter Password
   // Password
await page.locator('.user-password-cell input[type="password"]')
    .fill('Test@12345');

// Confirm Password
await page.locator('.oxd-grid-item')
    .filter({ hasText: /^Confirm Password/ })
    .locator('input[type="password"]')
    .fill('Test@12345');

    await page.getByRole('button', { name: "Save" }).click();
    await page.waitForTimeout(10000);



})