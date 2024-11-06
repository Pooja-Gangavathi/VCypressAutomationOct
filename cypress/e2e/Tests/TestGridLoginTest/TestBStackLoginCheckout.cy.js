/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import login from "../../Pages/TestGridLoginPage/PageBStackLoginCheckout.cy.js";
Given("I navigate to the Website", () => {
login.enterURL();
});
When("I click on Sign In Link", () => {
login.clickLogInLink();
});
When("I entered valid credential", (datatable) => {
datatable.hashes().forEach((element) => {
  login.selectEmailPassword(element.email, element.validpassword);
});
});
When("Click on Log in button", () => {
login.clickLoginButton();
});
Then("Validate user is logged in", () => {
login.verifyUserLoggedIn();
});
Then("Validate the title after login", () => {
login.verifyPageTitle();
});
When("I added the items to the cart", () => {
login.addItemToCart();
});
When("Validate the number of items in cart", () => {
login.verifycartItemCount();
});
Then("I clicked on Checkout button", () => {
login.clickCheckoutButton();
});
Then("I added the shipping details", (datatable) => {
datatable.hashes().forEach((element) => {
login.shippingDetails(element.FirstName, element.LastName,element.Address,element.State,element.PostalCode);
});
});
Then("I clicked on Submit Button", () => {
login.clickSubmitButton();
});
