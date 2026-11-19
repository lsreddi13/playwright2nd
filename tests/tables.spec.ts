import {test, expect} from "@playwright/test";


test('to validate table', async({page})=>{

page.goto("https://www.playwrightautomation.com/practice.html#section-table-static")

    let expectedsportsNames: string[] = [
        "John",
        "David",
        "Peter"
    ];
const actualSportsNames = await page.locator("table tbody tr td:nth-child(2)").allTextContents();

    expect(actualSportsNames).toEqual(expectedsportsNames);

    let loginData = [
    ["student", "Password123"],
    ["admin", "Admin123"],
    ["tester", "Test123"],
    ["manager", "Manager123"],
    ["user", "User123"]
];

for (let i = 0; i < loginData.length; i++) {

        console.log("Username:", loginData[i][0]);

        console.log("Password:", loginData[i][1]);

    }


    
})