import{test} from "@playwright/test"

test('sfd', async({page})=>{

    await page.goto('https://demoqa.com/alerts')

    await page.on('dialog', async(dialog)=>{
      const typeValue =   await dialog.type();
      console.log("typeValue : "+typeValue)
      const defaultValue =   await dialog.defaultValue();
      console.log("defaultValue : "+defaultValue)

      await dialog.accept("fads");
    })
    await page.locator('#promtButton').click();
    

    await page.waitForTimeout(10000);



})

