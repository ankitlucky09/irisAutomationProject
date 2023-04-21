/*
This is a valid sceanrio wherein its validating the page contains News text in the page

Timeout is optional and is added to properly view the conditions which is added 
*/

const {test, expect} = require('@playwright/test');

test("Valid case to check that the page is not broken", async({page}) => {

//Navigating to the site
await page.goto("https://osa-web.t-cg.co.uk/");

await page.waitForTimeout(2000);

//Entering the search keyword
await page.locator('input#main').type("b16 8pe");

await page.waitForTimeout(2000);

//Click on the search button
await page.locator('button#searchPostcodeButton').click();

await page.waitForTimeout(5000);

//Clicking on the contact group
await page.locator("//body/div[@id='root']/div[1]/main[1]/ol[1]/li[20]").click();

await page.waitForTimeout(3000);

//Validating if the page is not broken by comparing if the page contains News text
const fetchingNewsElement= await page.locator("//h1[contains(text(),'News')]");
const newsElementText = await fetchingNewsElement.textContent();
console.log(newsElementText);

if(newsElementText == "News")
{
    await page.waitForTimeout(3000);
     console.log("User is in correct news tab and page working fine and and there is no page break");
}
else
console.log("Page is breaking");

})
