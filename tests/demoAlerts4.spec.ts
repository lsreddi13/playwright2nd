
import { test, expect } from '@playwright/test';

// 2. Confirmation Alert - Accept
test('Accept Confirm Alert', async ({ page }) => {

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


// 2. Confirmation Alert - Accept
test('Dismiss Confirm Alert', async ({ page }) => {

    await page.goto('https://demoqa.com/alerts');

    page.once('dialog', async (dialog) => {
        console.log('Type: ' + dialog.type());
        console.log('Message: ' + dialog.defaultValue()+"********defaultValue");
        console.log('Message: ' + dialog.message()+"**********message");
        await dialog.dismiss();
    });

    await page.locator('#confirmButton').click();

    await expect(page.locator('#confirmResult'))
        .toHaveText('You selected Cancel');

});