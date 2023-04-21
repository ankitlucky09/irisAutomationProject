# IRISAutomationProject

**Issue:**
The issue with the page https://osa-web.t-cg.co.uk/qatest is that its not displaying the News instead of its displaying some flaky data.

**Issue Description**
1. Navigate to the site https://osa-web.t-cg.co.uk/qatest
2. Verify the page content.
3. Verify that the page should contain the News tab along with the news card.

**Expected Result:**
The page should be displayed with News section and the news cards should be displayed and as an impact the card click navigation should be validated.

**Actual Result:**
The page is displaying some random data and text.

**How issue is debugged**
1. To identify the issue the test is created where in it will capture a case which has a valid input. 
2. As the valid input expected in the case is News tab so I have created a test and script where in it will compare after landing to the page and identify in the entire test that the News text is present by using a if else loop.
3. Created two different file one with the valid case and one with the invalid case to clearly understand and identify the issue.
4. The invalid case where the script is created will termiate and produce a report which will give an indication that user has landed into a page that and is not as expected as it should show news instead of some other texts.

**How to address the bug**
Once the test is failed and the report is generated the report should be shared to the concered stakeholder with a proper bug report with the steps to reproduce and logs with the case mentioning how its failed based on the scearnio.
