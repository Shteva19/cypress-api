/// <reference types = "cypress" />


describe ('Intercept', () => {

it ('Test1',() => {
cy.visit('https://qauto.forstudy.space/',{
    failOnStatusCode: false,
auth: {

    username:'guest',
    password: 'welcome2gauto',
}

})

 cy.contains ('Sing in').click();
 cy.get('#signinEmail').type('maybeimala+123@gmail.com');
 cy.get('#signinPassword').type('Maybeimala+123');
})


})