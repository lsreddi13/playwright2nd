import { chromium, firefox, test } from "@playwright/test";

test('test cookies', async ({ page }) => {

    const browser = await chromium.launch({ headless: false });
    const context1 = await browser.newContext(); // it will open new browser
    const page1 = await context1.newPage(); //new tab
    await page1.goto("https://www.playwrightautomation.com/login.html")
    const pagetitle = await page1.title();

    const cookiesBefore = await context1.cookies();

    // console.log('Browser Cookies Before login:', cookiesBefore);
    // console.log(pagetitle + "***********")
    // await page1.waitForTimeout(2000);
    await page1.locator('#username').fill('student');
    await page1.locator('#password').fill('Password123');
    await page1.waitForTimeout(1000);
    await page1.getByRole('button', {
        name: 'Login',
        exact: true
    }).click();
    await page1.waitForTimeout(1000);


    const cookies1 = await context1.cookies();

    // console.log('Browser Cookies:', cookies);


    const context2 = await browser.newContext();
    const page2 = await context2.newPage(); // it will open new tab in the same browser
    await context2.addCookies(cookies1);
    await page2.goto("https://www.playwrightautomation.com/")
    const pagetitle2 = (await page2).title();
    // console.log(pagetitle2)
    // console.log("###############################")
    // const cookies3 = await context.cookies();

    // console.log('Browser Cookies3:', cookies3);
    // console.log("###############################")
    await page2.waitForTimeout(1000);

    await context2.clearCookies();
    console.log("print cookies after clear cookies : "+await context2.cookies());

    // await page2.goto("https://www.playwrightautomation.com/")
    await page2.reload();

    await page2.waitForTimeout(5000);
    await page2.goBack();
    await page2.goForward();


})