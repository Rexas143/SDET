import { Given, Then, When } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
//import TablePage from "../../pages/tabledataPage";
import { MapDataPage } from "../../pages/mapdataPage";
let mapdataPage: MapDataPage;
Given('user should navigate to the home page', async function() {
   // tablePage = new TablePage(fixture.page);
    mapdataPage = new MapDataPage();
    await mapdataPage.goToHomePage("https://afd.calpoly.edu/web/sample-tables");
});

When('user should retrieve the data from the table', async function() {
    const tableData = await mapdataPage.readTableData();
    console.log(tableData);
    //console.log(tableData[1][2]);
    console.log(tableData.get("Name"));
});

Then('user should see data', async function() {
 console.log("Data is displayed");
});
