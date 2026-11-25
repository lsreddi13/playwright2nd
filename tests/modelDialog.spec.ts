
import { test, expect } from '@playwright/test';

// 1. Handle Small Modal
test('Handle Small Modal', async ({ page }) => {

    await page.goto('https://demoqa.com/modal-dialogs');

    // Click Small Modal button
    await page.locator('#showSmallModal').click();

    // Verify modal is visible
    const modal = page.locator('.modal-content');

    await expect(modal).toBeVisible();

    // Verify modal heading
    await expect(page.locator('#example-modal-sizes-title-sm'))
        .toHaveText('Small Modal');

    // Verify modal content
    await expect(page.locator('.modal-body'))
        .toContainText('This is a small modal');

    // Close modal
    // await page.locator('#closeSmallModal').click();
    await page.locator('.btn-close').click();

    // Verify modal is closed
    await expect(modal).toBeHidden();

});


// 2. Handle Large Modal
test.skip('Handle Large Modal', async ({ page }) => {

    await page.goto('https://demoqa.com/modal-dialogs');

    // Click Large Modal button
    await page.locator('#showLargeModal').click();

    // Verify modal is visible
    const modal = page.locator('.modal-content');

    await expect(modal).toBeVisible();

    // Verify modal heading
    await expect(page.locator('#example-modal-sizes-title-lg'))
        .toHaveText('Large Modal');

    // Verify modal content
    await expect(page.locator('.modal-body'))
        .toContainText('Lorem Ipsum');

    // Close modal
    await page.locator('#closeLargeModal').click();

    // Verify modal is closed
    await expect(modal).toBeHidden();

});


// 3. Verify Small Modal Content
test.skip('Verify Small Modal Content', async ({ page }) => {

    await page.goto('https://demoqa.com/modal-dialogs');

    await page.locator('#showSmallModal').click();

    const modalBody = page.locator('.modal-body');

    await expect(modalBody).toBeVisible();

    console.log(await modalBody.innerText());

    await page.locator('#closeSmallModal').click();

});


// 4. Verify Large Modal Content
test.skip('Verify Large Modal Content', async ({ page }) => {

    await page.goto('https://demoqa.com/modal-dialogs');

    await page.locator('#showLargeModal').click();

    const modalBody = page.locator('.modal-body');

    await expect(modalBody).toBeVisible();

    console.log(await modalBody.innerText());

    await page.locator('#closeLargeModal').click();

});
