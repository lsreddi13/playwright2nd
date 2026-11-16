

 class Demo {

    num1 = 3; num2 = 5;
    total=0
    add (num1:number, num2:number) {
        this.total = num1 + num2;
    }

}

// import { test, expect } from '@playwright/test';

test('Check login button', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');

    let loginButton = page.locator('#login2');

    if (await loginButton.isVisible()) {
        console.log("Login button is visible");
    }
    else {
        console.log("Login button is not visible");
    }

});

test('Check radio button', async ({ page }) => {

    let radioButton = page.locator('#male');

    if (!await radioButton.isChecked()) {
        await radioButton.check();
        console.log("Radio button selected");
    }
    else {
        console.log("Radio button already selected");
    }

});


test('Check dropdown value', async ({ page }) => {

    let dropdown = page.locator('#country');

    let selectedValue = await dropdown.inputValue();

    if (selectedValue === 'India') {
        console.log("India is already selected");
    }
    else {
        await dropdown.selectOption({ label: 'India' });
        console.log("India selected successfully");
    }

});

import { test, expect } from '@playwright/test';

test('Switch case example', async ({ page }) => {

    let day: number = 3;

    switch (day) {

        case 1:
            console.log("Monday");
            break;

        case 2:
            console.log("Tuesday");
            break;

        case 3:
            console.log("Wednesday");
            break;

        case 4:
            console.log("Thursday");
            break;

        default:
            console.log("Invalid day");
    }

});


test('Switch case with browser', async ({ page, browserName }) => {

    switch (browserName) {

        case 'chromium':
            console.log("Running in Chrome browser");
            break;

        case 'firefox':
            console.log("Running in Firefox browser");
            break;

        case 'webkit':
            console.log("Running in Safari browser");
            break;

        default:
            console.log("Unknown browser");
    }

});


test('Switch case with dropdown', async ({ page }) => {

    await page.goto('https://www.example.com');

    let country: string = 'India';

    let dropdown = page.locator('#country');

    switch (country) {

        case 'India':
            await dropdown.selectOption({ label: 'India' });
            break;

        case 'USA':
            await dropdown.selectOption({ label: 'United States' });
            break;

        case 'UK':
            await dropdown.selectOption({ label: 'United Kingdom' });
            break;

        default:
            console.log("Country not available");
    }

});


test('For loop with textbox', async ({ page, browserName}) => {

    await page.goto('https://example.com');

    const names = ['John', 'David', 'Smith'];
    console.log(names.length)
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
        // Use a textbox locator here:
        // await page.locator('#name').fill(names[i]);
    }

});


test('Verify list items', async ({ page }) => {

    await page.goto('https://example.com');

    const items = page.locator('ul li');

    const count = await items.count();

    for (let i = 0; i < count; i++) {
        console.log(await items.nth(i).innerText());
    }

});
