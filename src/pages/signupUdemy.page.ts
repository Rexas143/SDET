import { Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { emitMetaMessage } from "@cucumber/cucumber/lib/cli/helpers";

export class SignupUdemy{
    private base:PlaywrightWrapper;
    constructor(private page:Page){
        this.base=new PlaywrightWrapper(page);
    }

    public Elements={
        fullName:`//input[@name="fullname"]`,
        email:`//input[@name="email"]`,
        password:`//input[@name="password"]`,
        signUpButton:`//button[@class="ud-btn ud-btn-large ud-btn-brand ud-heading-md helpers--auth-submit-button--W3Tqk "]`
    }

    async navigateToSignupPage(url:string){
        await this.base.goto(url);
        //await this.page.waitForTimeout(50000);

    }
    async performSignup(fullName:string,email:string,password:string){
        await this.page.locator(this.Elements.fullName).fill(fullName);
        await this.page.locator(this.Elements.email).fill(email);
        await this.page.locator(this.Elements.password).fill(password);



    }
    async clickSignupButton(){
        await this.page.locator(this.Elements.signUpButton).click();
        await this.page.pause();
    }
}