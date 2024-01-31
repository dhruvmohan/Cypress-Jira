import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on empty home page", () => {


  cy.visit("https:/testURL/")

});

When("I type in url and submit", () => {

    cy.visit(`https://testURL/`);
});

Then("I should be redirected to the board detail", () => {


    cy.visit("https://testURL/");
});