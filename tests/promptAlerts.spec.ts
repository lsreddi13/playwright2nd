import{test, expect} from "@playwright/test"

test('Handle Prompt Alert', async ({ page }) => {

    await page.goto('https://demoqa.com/alerts');

    // page.on('dialog', async (dialog) => {

    //     console.log('Type: ' + dialog.type());

    //     console.log('Message: ' + dialog.message());

    //     await dialog.accept('Hello Playwright');
    // });

    await page.locator('#promtButton').click();
    await page.waitForTimeout(20000);
    // await expect(page.locator('#promptResult'))
    //     .toContainText('Hello Playwright');

});
