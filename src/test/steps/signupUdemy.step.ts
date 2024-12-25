import { Given, Then, When } from "@cucumber/cucumber";
import { SignupUdemy } from "../../pages/signupUdemy.page";
import { fixture } from "../../hooks/pageFixture";
let signupUdemy : SignupUdemy;
Given('user navigate to {string} page',async function(pageName:string){
    signupUdemy=new SignupUdemy(fixture.page);
    switch(pageName){
        case "Google":
            await signupUdemy.navigateToSignupPage("https://www.google.com/");
            break;
        case "udemy":
            await signupUdemy.navigateToSignupPage("https://www.udemy.com/join/signup-popup/");
            break;
        default:
            break;
    }
    
   //await signupUdemy.navigateToSignupPage();

});

When('user give {string},{string} and {string}',async function(fullName:string,email:string,password:string){
    await signupUdemy.performSignup(fullName,email,password);

});

Then('click on Sign up button',async function(){
    await signupUdemy.clickSignupButton();

});