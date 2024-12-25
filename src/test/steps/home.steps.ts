import { Given, Then, When } from "@cucumber/cucumber";
import { HomePage } from "../../pages/homePage";
import { fixture } from "../../hooks/pageFixture";
let homePage:HomePage;

Given('user navigates to the Google Home Page',async function(){
//const homePage=new HomePage(fixture.page);

homePage=new HomePage(fixture.page);
await homePage.navigateToHomePage();
});

When('user search for {string}',async function(searchValue:string){


await homePage.clickSearchButton(searchValue);


});

Then('user should see the {string} search results',async function(searchValue:string){


await homePage.verifyResult(searchValue);


});