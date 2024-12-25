import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export class HomePage{
    private base:PlaywrightWrapper;

    constructor(private page:Page){
        this.base=new PlaywrightWrapper(page);

    }
    public Elements={
        searchBox:`//textarea[@title="Search"]`,
        searchButton:`//input[@aria-label="Google Search"]`,
        message:`//h3[text()='Playwright: Fast and reliable end-to-end testing for modern web apps']`,
        tsmessage:`//h3[text()='TypeScript: JavaScript With Syntax For Types.']`
    }
    async navigateToHomePage(){
        await this.base.goto('https://www.google.com/');
        
    }
    async clickSearchButton(searchValue:string){
        const searchBox=this.page.locator(this.Elements.searchBox);
        await searchBox.fill(searchValue);
        if(searchValue=="playwright"){
        await this.page.waitForTimeout(2000);
        await this.page.keyboard.press("Escape");
        const searchButton=this.page.locator(this.Elements.searchButton).nth(1)
        await searchButton.click();
        }
        else{
            await this.page.keyboard.press("Enter");
            await this.page.waitForTimeout(2000);
        }

    }
    async verifyResult(searchValue:string){
        if(searchValue=="playwright"){
            await this.page.waitForTimeout(2000);

        const message=this.page.locator(this.Elements.message);
        await expect(message).toBeVisible();
        }
        else{
            const message=this.page.locator(this.Elements.tsmessage);
        await expect(message).toBeVisible();

        }

    }
}