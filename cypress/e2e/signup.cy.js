/// <reference types="cypress"/>
it('test',function(){
    cy.visit('http://localhost:8080/')
    cy.get('[href="/SignUp"]').click()
    cy.get('#username').type('amaymandloi')
    cy.get('#email').type('amaymandloi19@gmail.com')
    cy.get('#password').type('Amay@1234')
    cy.get('#confpassword').type('Amay@1234')
    cy.get('.v-btn__content').click()
    cy.get('[href="/Login"]').click()
    cy.get('#email').type('amaymandloi19@gmail.com')
    cy.get('#password').type('Amay@1234')
    cy.get('.v-btn__content').click()
})