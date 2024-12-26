
import { fixture } from "../hooks/pageFixture";



export class MapPage {

    public Elements = {};

    async goToHomePage(baseUrl: string) {
        await fixture.page.goto(baseUrl, { timeout: 60000 });
        await fixture.page.waitForTimeout(5000);
    }


    async readTableData() {

        const tableDataMap = new Map<string, string[]>();
        const headers = await fixture.page.locator('#DataTables_Table_0 thead th').all();
        const rows = await fixture.page.locator('#DataTables_Table_0 tbody tr').all();

        for (const row of rows) {
            const cells = await row.locator('td').all();
            const rowData = [];
            for (const cell of cells) {
                rowData.push(await cell.innerText());
            }
            if (rowData.length > 0) {
                for (let i = 0; i < headers.length; i++) {
                    const headerText = await headers[i].innerText();
                    if (!tableDataMap.has(headerText)) {
                        tableDataMap.set(headerText, []);
                    }
                    tableDataMap.get(headerText)?.push(rowData[i]);
                }
            }
        }
        return tableDataMap;

    }
/*
    async selectDropdownValue(selector: string, value: string) {
        await fixture.page.
    }
        */


}