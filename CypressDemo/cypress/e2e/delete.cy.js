/// <reference types="cypress"/>
it('test',function(){
    cy.visit('http://localhost:8080/')
    cy.get(':nth-child(1) > :nth-child(8) > .mx-2 > .v-btn__content > .v-icon',{timeout:5000}).click()
    
})