import {test, expect} from "@playwright/test"

test.skip('Print text from iframe without using frame', async ({ page }) => {

    await page.goto('https://demoqa.com/frames');

    // Locate the first iframe
    // const frame = page.frameLocator('#frame1');

    // Locate heading inside iframe
    const heading = await page.locator('#sampleHeading');

    // Get text
    const text = await heading.innerText();

    console.log(text);

    // Verify text
    await expect(heading).toHaveText('This is a sample page');

});

test.skip('Print text from iframe with frame', async ({ page }) => {

    await page.goto('https://demoqa.com/frames');

    // Locate the first iframe
    // const frame = page.frameLocator('#frame1');

    // Locate heading inside iframe
    const heading = await page.locator('#sampleHeading');

    // Get text
    const text = await heading.innerText();

    console.log(text);

    // Verify text
    await expect(heading).toHaveText('This is a sample page');

});

test('Handle iframe and click navigation link', async ({ page }) => {

    await page.goto('https://demoqa.com/frames');

    // STEP 1: Locate iframe
    const frame = page.frameLocator('#frame1');

    // STEP 2: Get text from iframe
    const text = await frame.locator('#sampleHeading').innerText();

    console.log('Frame Text:', text);

    // STEP 3: Click Browser Windows from left navigation
    await page.getByText('Browser Windows', { exact: true }).click();

    // STEP 4: Verify navigation
    await expect(page).toHaveURL(/browser-windows/);

});


