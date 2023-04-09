/// <reference types="cypress"/>
it('test',function(){
    cy.visit('http://localhost:8080/')
    cy.get('[href="/Login"]').click()
    cy.get('#email').type('amaymandloi123@gmail.com')
    cy.get('#password').type('Amay@1234')
    cy.get('.v-btn__content').click()
})