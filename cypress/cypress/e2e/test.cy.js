/// <reference types="cypress"/>

it('google.test',()=>{
    cy.visit('https://google.com')
    cy.get('.gLFyf').type('you.yash.com{enter}')
})