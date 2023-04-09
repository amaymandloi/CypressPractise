/// <reference types="cypress"/>
it('test',function(){
    cy.visit('http://localhost:8080/')
    cy.get(':nth-child(1) > :nth-child(7) > .mx-2 > .v-btn__content > .v-icon').click()
    cy.get(`#input-57`).type("11")
    cy.get('#input-60').type("ta")
    cy.get('#input-69').type("India")
    cy.get(':nth-child(3) > .v-btn__content').click();    
})