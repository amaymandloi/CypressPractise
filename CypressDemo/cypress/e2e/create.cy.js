/// <reference types="cypress"/>
it('test',function(){
    cy.visit('http://localhost:8080/')
    cy.get('.v-toolbar__content > .v-btn > .v-btn__content').click()
    cy.get('#input-38').type("6")
    cy.get('#input-41').type("Bombay Hospital")
    cy.get('#input-44').type("Indore")
    cy.get('#input-47').type(1213)
    cy.get('#input-50').type(1312)
    cy.get('#input-53').type("india")
    cy.get('.v-card__actions > .v-btn').click()
})