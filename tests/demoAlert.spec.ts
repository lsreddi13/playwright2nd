import { test, expect } from '@playwright/test';

test.skip('Handle Alert', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    // Register dialog handler
    page.on('dialog', async (dialog) => {
        await dialog.accept();
    });
    // Click the JS Alert button
    await page.getByRole('button', {
        name: 'Click for JS Alert'
    }).click();
    await expect(page.locator('#result'))
        .toHaveText('You successfully clicked an alert');
});


test('Handle Confirm - Cancel', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    // page.on('dialog', async (dialog) => {

    //     console.log('Dialog Type: ' + dialog.type());
    //     console.log('Dialog Message: ' + dialog.message());

    //     await dialog.dismiss();
    // });
    page.on('dialog', async (dialog) => {

    if (dialog.type() === 'confirm') {
        await dialog.dismiss();
    }
    else {
        await dialog.accept();
    }

});

    await page.getByRole('button', {
        name: 'Click for JS Confirm'
    }).click();

    await expect(page.locator('#result'))
        .toHaveText('You clicked: Cancel');

});