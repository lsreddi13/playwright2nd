import test from "@playwright/test";


const URL = "https://demoqa.com/buttons";

test('verify double click button', async({page})=>{
 await page.goto(URL);
 await page.locator('[type="button"]').nth(1).dblclick();
    await page.waitForTimeout(5000);
//  await page.getByRole("button", {name: "Double Click Me"}).dblclick();
 const displayText = await page.locator("[id='doubleClickMessage']").textContent();
 console.log("displayText : "+ displayText);

//home work - write code to click "rightclick" button and "click me" button



})

test.skip('verify right click button', async({page})=>{
 await page.goto(URL);
 await page.getByRole("button", {name: "Double Click Me"}).dblclick(); // change the lcoator and action method
 const displayText = await page.locator("[id='doubleClickMessage']").textContent(); // cahnge the lcoator
 console.log("displayText : "+ displayText);

//home work - write code to click "rightclick" button and "click me" button



})

test.skip('verify  click me button', async({page})=>{
 await page.goto(URL);
 await page.getByRole("button", {name: "Double Click Me"}).dblclick(); //change the locator and action 
 const displayText = await page.locator("[id='doubleClickMessage']").textContent();//change the locator
 console.log("displayText : "+ displayText);

//home work - write code to click "rightclick" button and "click me" button



})