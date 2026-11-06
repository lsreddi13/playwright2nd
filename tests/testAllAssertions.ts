import{expect, test} from "@playwright/test";


test('test tobevisible method', async({page})=>{

    await page.goto("https://www.playwrightautomation.com/practice.html");

    //verify target input box is displayed or not
    const targetField =  page.getByLabel("Target field");

    await expect(targetField).toBeVisible();
    await targetField.fill("this is automation testing.")

    const hiddenBtn =  page.getByTestId("btn-hide-element");

    await expect(hiddenBtn).toBeVisible();
    await hiddenBtn.click();

    await expect(targetField).not.toBeVisible(); //negative case
    await expect(targetField).toBeHidden();
    await page.waitForTimeout(1000);
    const contryList = page.getByLabel('Country').nth(1);
    const stateList = page.getByLabel('State');
    const cityList = page.getByLabel('City');
    await expect(contryList).toBeVisible();

    await expect(contryList).toBeEnabled();

    await expect(stateList).toBeDisabled(); 
    // if assertion failed the it will terminate the test case execution it won;t execute next statement
    console.log("*********************");
    await expect(cityList).toBeDisabled();

    const gender_m_radio = page.getByTestId("radio-male");
    const gender_f_radio = page.getByTestId("radio-female");
    const gender_nb_radio = page.getByTestId("radio-nonbinary");

    await expect(gender_m_radio).not.toBeChecked();
    await gender_m_radio.check();
    await expect(gender_m_radio).toBeChecked();
    await expect(gender_f_radio).not.toBeChecked();
    await expect(gender_nb_radio).not.toBeChecked();

    const submitBtn = page.getByRole('button', {name:'Submit'});
    await expect(submitBtn).toBeVisible();
    await expect(submitBtn).toHaveText("Submit"); 
    // await expect(submitBtn).toHaveValue("Submit");
    await expect(submitBtn).toContainText("Sub"); 
    await expect(submitBtn).toHaveAttribute('type', 'submit');






})