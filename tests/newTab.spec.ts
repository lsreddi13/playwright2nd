import { test, expect } from '@playwright/test';

test('Handle New Tab and New Window Message', async ({ browser }) => {

    const context = await browser.newContext();
    const parentPage = await context.newPage();

    await parentPage.goto('https://demoqa.com/browser-windows');

    // 1. Click New Tab
    const newTabPromise = context.waitForEvent('page');

    await parentPage.locator('#tabButton').click();

    const newTab = await newTabPromise;

    await newTab.waitForLoadState();

    console.log('New Tab URL:', newTab.url());
    console.log('New Tab Title:', await newTab.title());

    // 2. Click New Window Message
    const newWindowPromise = context.waitForEvent('page');

    await parentPage.locator('#messageWindowButton').click();

    const newWindow = await newWindowPromise;

    await newWindow.waitForLoadState();

    console.log('New Window URL:', newWindow.url());
    console.log('New Window Title:', await newWindow.title());

    // 3. Identify all opened pages
    const allPages = context.pages();

    console.log('Total Pages:', allPages.length);

    // 4. Identify parent and child pages
    console.log('Parent URL:', parentPage.url());
    console.log('Child 1 URL:', newTab.url());
    console.log('Child 2 URL:', newWindow.url());

    await context.close();
});