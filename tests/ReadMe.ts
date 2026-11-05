// installtion playwright 
// how to write testcase
// how to run test case
// how to enter values in input boxes - fill
// click
// selectOption
// check , uncheck 


// radio button(click, check, isChecked -boolean true/false), 
// 
// check box(click, check and uncheck), 
// input box(clear, fill and presssequential), click, clear existing value, enter value, add new text on the existing value

// toggle button(click), 
// link(click), text(), - get the linkText, get the url of link, click link
// listbox(click, selectoption), get the number items in the list, get the all items from the list, select item from the list

// button ( click), click the button, is enabled or disabled, get the button name
// image ( click), click the image, get the url
// 
// without using fill how can you enter value in the input box ?


// locator methods in playwright
// 1. click - used
//2. dbclick - used
//3. fill - used
//4. pressSequentiually - used
//5. clear - used
//6. Check -used
//7. uncheck - used
//8. selectoptiopn - used value, visibletext, index
//9. hover - used
//10. focus - used
//11. press - 
//12. blur - used


//expected and actual result
//enter name, enter email and enter address
//click "Reset" button
//Expetecd Result : entered values should be removed from name, email and address fields.
//Expected Result : Name, emailm and address fields should be empty
//actualt result : entered values does not remvoed from all fields
//status : fail
// Assertions
//expect(locator).
// await expect(locator).toBeVisible();

// await expect(locator).toBeHidden();

// await expect(locator).toBeEnabled();

// await expect(locator).toBeDisabled();

// await expect(locator).toBeChecked();

// await expect(locator).toHaveText('Submit');

// await expect(locator).toContainText('Success');

// await expect(locator).toHaveValue('Sasidhar'); //to check the input box value
// await expect(name).not.toHaveValue('Admin');

// await expect(locator).toHaveAttribute('type', 'submit');

// await expect(locator).toHaveCount(5);


// await expect(locator).toBeVisible();
// await expect(locator).not.toBeVisible();

// await expect(locator).toBeEnabled();
// await expect(locator).not.toBeEnabled();

// await expect(locator).toHaveText('Login'); //exact match entrie string
// await expect(locator).not.toHaveText('Logout');

// const message = page.locator('.message');

// await expect(message).toContainText('successful');     // partial string or substring  from entrie string
// await expect(message).not.toContainText('Error');     