import { Given, Then, When } from "@cucumber/cucumber";
import { SignupPage } from "../../pages/signupPage";
import { fixture } from "../../hooks/pageFixture";
//import HomePage from "../../pages/homepage";

let signupPage: SignupPage;

Given('user navigate to the {string} page', async function(pageName:string) {
    signupPage = new SignupPage(fixture.page);
    switch (pageName){
        case "Google":
            await signupPage.navigateToLoginPage("https://www.google.com/");
            break;
        case "signup":
            await signupPage.navigateToLoginPage("https://app.leadsbridge.com/signup");
            break;
        default:
            break;
    }

   
});

When('user enter {string},{string} and {string}', async function(firstName: string, lastName: string, email: string) {
    await signupPage.performSignup(firstName, lastName, email);
});

Then('click on {string} button', async function(signupButton:string) {
    await signupPage.clickSignupButton(signupButton);
});

