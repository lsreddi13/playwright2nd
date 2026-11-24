
import { test, expect } from '@playwright/test';

test('Handle new browser window', async ({ browser }) => {

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto('https://demoqa.com/browser-windows');

    // Wait for new window
    const newPagePromise = context.waitForEvent('page');

    // Click exact New Window button
    await page.getByRole('button', {
        name: 'New Window',
        exact: true
    }).click();

    // Capture new window
    const newPage = await newPagePromise;

    await newPage.waitForLoadState();

    console.log('New Window Title:', await newPage.title());

    const text = await newPage.locator('body').innerText();

    console.log('New Window Text:', text);

    await expect(newPage.locator('h1'))
        .toHaveText('This is a sample page');

    await newPage.close();

    console.log('Original Page Title:', await page.title());

    await context.close();

});
