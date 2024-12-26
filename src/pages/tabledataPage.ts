
import { Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { fixture } from "../hooks/pageFixture";

export default class TablePage{
    /* private base: PlaywrightWrapper;
        constructor(private page: Page) {
            this.base = new PlaywrightWrapper(page);
            }
            
        */
        public Elements = {};

        async goToHomePage(baseUrl:string){
            await fixture.page.goto(baseUrl, {timeout: 60000});
            await fixture.page.waitForTimeout(5000);
        }
        
    async readTableData(){
        const tableData=[];
        const rows= await fixture.page.locator('.table_directory tbody tr').all();

        for(const row of rows){
            const cells= await row.locator('td').all();
            const rowData=[];
            for(const cell of cells){
                rowData.push(await cell.innerText());
            }
            if(rowData.length>0){
            tableData.push(rowData);
        }
    }
    return tableData;
    }
    

/*
    async readsTableData(){

        const tableDataMap = new Map<string,string[]>();
        const headers=await fixture.page.locator('.table_directory th').all();
        const rows=await fixture.page.locator('.table_directory tbody tr').all();

        for (const row of rows){
            const cells=await row.locator('td').all();
            const rowData=[];
            for(const cell of cells){
                rowData.push(await cell.innerText());
            }
            if(rowData.length>0){
               for(let i=0;i<headers.length;i++){
                   const headerText=await headers[i].innerText();
                   if(!tableDataMap.has(headerText)){
                       tableDataMap.set(headerText,[]);
                   }
                     tableDataMap.get(headerText)?.push(rowData[i]);
               }
            }
        }
        return tableDataMap;
    }
*/
}