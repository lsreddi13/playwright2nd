import { test } from '@playwright/test'

test('verify switch case', async({page, browserName})=>{

console.log("browser Name: "+browserName)

switch(browserName){
    case 'chromium': console.log("running in chrome browser");
    break;
    case 'firefox': console.log("running in firefox browser");
    break;
     case 'webkit': console.log("running in webkit browser");
    break;
    default:console.log("default browser")

    
}


page.goto("https://www.playwrightautomation.com/login.html?redirect=%2Fpractice.html");

await page.waitForTimeout(10000);

})