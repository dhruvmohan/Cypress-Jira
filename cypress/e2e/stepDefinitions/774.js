import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("Die neue APN-Anwendung ist in der IU-Umgebung verfügbar", () => {


  cy.visit("https://testURL/")

});

When("der Benutzer per Mouseover auf den Reiter Kundenverwaltung wechselt oder klickt auf den Link Kundenverwaltung", () => {

    cy.contains('Eingegangene Anmeldungen').should('exist')
     
    cy.contains('Detailsuche Anmeldungen').should('exist')
    
    cy.contains('Entscheidungsverfahren').should('exist')
    
    cy.contains('Vertragsverwaltung').should('exist')
});

Then("Ein weiteres Menü öffnet sich mit folgenden Auswahlmöglichkeiten: Eingegangene Anmeldungen, Detailsuche Anmeldungen, Entscheidungsverfahren, Vertragsverwaltung, Belegungsplan", () => {


    cy.visit("https://testURL/");
});


When("der Benutzer klickt auf den Link Belegungsplan", () => {

  cy.visit(`https://testURL `);
});

Then("der Belegungsplan Suche wird auf der Weboberfläche angezeigt", () => {


  cy.visit("https://testURL/");
});
