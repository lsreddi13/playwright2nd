import{test, Page, expect} from "@playwright/test"



test('click edit for a particular row with filter', async({page})=>{

    await page.goto("https://demoqa.com/webtables")
    await page.waitForTimeout(5000);
    // clickDelete(page, 'Cierra');
    clickEditOption(page, 'Alden');
    // const CierraRow = page.locator('tr').filter({hasText: 'Cierra'});
    //  await CierraRow.locator("span[title='Delete']").click();

    await page.waitForTimeout(10000);
})


async function clickDelete(page:Page, userName:string) {
const CierraRow = page.locator('tr').filter({hasText: userName});
     await CierraRow.locator("span[title='Delete']").click();
    page.title();
    
}

async function clickEditOption(page:Page, userName:string) {
const CierraRow = page.locator('tr').filter({hasText: userName});
     await CierraRow.locator("span[title='Edit']").click();
    
}

test.skip('click edit for a particular row', async({page})=>{

    await page.goto("https://demoqa.com/webtables")
    await page.waitForTimeout(5000);
    clickEdit(page, "Cierra");
    await page.waitForTimeout(10000);
})

async function clickEdit(page: Page, firstName:string){
await page.locator("//td[text()='"+firstName+"']/../td[7]//span[1]").click();
}





// 10 - 15 drop down
//tables - relates
//how to verify the table headers in playwright- 
//i want fetch only first row values

//i want to get only first column values from the table

// how to get the column values based on column name
//how to get the entire row valeus based on cell value
//how to get the particualr value based on the cell value



// 30 -40 

// 50 - daily 50 


//navigate to table page

//first button locator
//next button locator
//previous button locator
//last button locator

//assert first nad previous button should display disable 

//assert next and last button should display enable

//click next button

//assert first nad previous button should display enable 

//assert next nad last button should display enable

//click last button

//assert first nad previous button should display enable 

//assert next nad last button should display disable

// ????