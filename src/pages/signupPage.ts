import { expect, Page } from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/PlaywrightWrappers';

export class SignupPage {
    private base: PlaywrightWrapper;
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    public Elements = {
        name: `//input[@id="TEXT"]`,
        email: `//input[@id="email"]`,
        checkbox: `//span[@class="checkmark"]`,
        signUpButton: `//button[contains(text(),"NAME")]`
    }

    async navigateToLoginPage(url:string) {
        await this.base.goto(url);
        //await this.page.waitForTimeout(50000);
    }

    async performSignup(firstName: string, lastName: string, email: string) {
       await this.page.locator(this.Elements.name.replace('TEXT','firstName')).fill(firstName);
       await this.page.locator(this.Elements.name.replace('TEXT','lastName')).fill(lastName);
       await this.page.locator(this.Elements.email).fill(email);
       await this.page.locator(this.Elements.checkbox).click();

    }

    async clickSignupButton(buttonName:string) {
        await this.page.locator(this.Elements.signUpButton.replace("NAME",buttonName)).click();
        await this.page.pause();
    }
}

