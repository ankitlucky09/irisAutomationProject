/*
This is the sceanrio wherein its validating the page is broken by comparing the News text present in the page
This test failure will make sure that the page is not correctly displayed and the generated report will capture the result

Timeout is optional and is added to properly view the conditions which is added 
*/

const {test, expect} = require('@playwright/test');

test("Checking the scenario for broken news tab page", async({page}) => {

//Navigating to the site
await page.goto("https://osa-web.t-cg.co.uk/");

await page.waitForTimeout(2000);

//Entering the search keyword
await page.locator('input#main').type("b16 8pe");

await page.waitForTimeout(2000);

//Clicking on the search button
await page.locator('button#searchPostcodeButton').click();

await page.waitForTimeout(5000);

//Clicking on the Contact Group
await page.locator("//body/div[@id='root']/div[1]/main[1]/ol[1]/li[20]").click();

await page.waitForTimeout(3000);

//Navigating to https://osa-web.t-cg.co.uk/qatest
await page.goto("https://osa-web.t-cg.co.uk/qatest");

await page.waitForTimeout(3000);

//Validating if the page is not broken by comparing if the page contains News text
const fetchingNewsElement= await page.locator("//h1[contains(text(),'News')]");
const newsElementText = await fetchingNewsElement.textContent();

//Searching if the News text is present in the page
if(newsElementText === "News")
{
    await page.waitForTimeout(3000);
    console.log("User is in correct news tab and page working fine and and there is no page break");
}
else
console.log("Page is breaking");

})
