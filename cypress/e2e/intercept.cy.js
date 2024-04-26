/// <reference types = "cypress" />

// import cars from '../fixtures/cars.json'

// describe ('Intercept', () => {

// it ('Test1',() => {
//     cy.intercept('https://qauto.forstudy.space/api/cars',cars);
// cy.visit('https://qauto.forstudy.space/',{
//     failOnStatusCode: false,
// auth: {

//     username:'guest',
//     password: 'welcome2qauto',
// }

// })
//  cy.contains('Sign In').click();
//  cy.get('#signinEmail').type('maybeimala+123@gmail.com');
//  cy.get('#signinPassword').type('Maybeimala+123');
//  cy.contains('Login').click();
// })


// })

import profile from '../fixtures/profile'
describe('Exercise 2', () => {
    it('Open user profile', () => {
        cy.intercept('https://qauto.forstudy.space/api/users/profile', profile)
        cy.visit('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        })
        cy.contains('Sign In').click();
        cy.get('#signinEmail').type('ivanovivan@gmail.com');
        cy.get('#signinPassword').type('Qwerty358');
        cy.contains('Login').click();
        cy.get('#userNavDropdown').click();
        cy.get('[routerlink="/panel/profile"]').click();
        cy.contains('Polar Bear').should('be.visible');
        cy.contains('11.11.2011').should('be.visible');
        cy.contains('USA').should('be.visible');
    })
})