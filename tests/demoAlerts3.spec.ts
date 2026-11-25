import{test} from "@playwright/test"



// 1. Simple Alert
test('Accept Simple Alert', async ({ page }) => {

    await page.goto('https://demoqa.com/alerts');

    page.once('dialog', async (dialog) => {

        console.log('Type: ' + dialog.type());
        console.log('Message: ' + dialog.message());

        await dialog.dismiss();
    });

    await page.locator('#alertButton').click();

});