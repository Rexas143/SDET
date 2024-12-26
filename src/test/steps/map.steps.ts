import { Given, Then, When } from "@cucumber/cucumber";
import { MapPage } from "../../pages/map.page";
let mapPage: MapPage;
Given('user should navigate to table page', async function() {
    mapPage = new MapPage();
    await mapPage.goToHomePage("https://datatables.net/examples/basic_init/multiple_tables.html");
});

When('user should retrieve data from table', async function() { 
    const tableData=await mapPage.readTableData();
    console.log(tableData);

   /* const names = tableData.get("Name");
    tableData.set("Name", []);

    const ages = tableData.get("Age");
    tableData.set("Age", []);


    const namesUnder30 = [];
    for (let i = 0; i < names.length; i++) {
        if (parseInt(ages[i]) < 30) {
            namesUnder30.push(names[i]);
        }
    }
    console.log(namesUnder30);
    */
    const names: string[] = tableData.get('Name');
    const ages: string[] = tableData.get('Age');

    const filteredNames = names.filter((name, index) => {
        const age = parseInt(ages[index]);
        return age < 30;
    });
    console.log(filteredNames);
});

Then('user should observe data', async function() {
 console.log("Data is displayed");
    
});












