import{test} from "@playwright/test"
import{constructorPage} from "../pages/constructorPage";


test('check constructo usage', async({page})=>{

    const cp = new constructorPage(page);
    
    cp.testMethod();

})

