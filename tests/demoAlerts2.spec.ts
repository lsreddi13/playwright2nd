
import { test, expect } from '@playwright/test';

// 1. Simple Alert
test('Handle Simple Alert', async ({ page }) => {

    await page.goto('https://demoqa.com/alerts');

    page.once('dialog', async (dialog) => {

        console.log('Type: ' + dialog.type());
        console.log('Message: ' + dialog.message());

        await dialog.accept();
    });

    await page.locator('#alertButton').click();

});

// 2. Confirmation Alert - Accept
test('Handle Confirm Alert', async ({ page }) => {

    await page.goto('https://demoqa.com/alerts');

    page.once('dialog', async (dialog) => {

        console.log('Type: ' + dialog.type());
        console.log('Message: ' + dialog.message());

        await dialog.accept();
    });

    await page.locator('#confirmButton').click();

    await expect(page.locator('#confirmResult'))
        .toHaveText('You selected Ok');

});

// 3. Prompt Alert
test('Handle Prompt Alert', async ({ page }) => {

    await page.goto('https://demoqa.com/alerts');

    page.once('dialog', async (dialog) => {

        console.log('Type: ' + dialog.type());
        console.log('Message: ' + dialog.message());

        await dialog.accept('Hello Playwright');
    });

    await page.locator('#promtButton').click();

    await expect(page.locator('#promptResult'))
        .toContainText('Hello Playwright');

});
