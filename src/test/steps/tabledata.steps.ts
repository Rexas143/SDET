import { Given, Then, When } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import TablePage from "../../pages/tabledataPage";
let tablePage: TablePage;
Given('user navigates to home page', async function() {
   // tablePage = new TablePage(fixture.page);
    tablePage = new TablePage();
    await tablePage.goToHomePage("https://afd.calpoly.edu/web/sample-tables");
});

When('user retreive the data from the table', async function() {
    const tableData = await tablePage.readTableData();
    console.log(tableData);
    console.log(tableData[1][2]);
});

Then('user should see the data', async function() {
 console.log("Data is displayed");
});
