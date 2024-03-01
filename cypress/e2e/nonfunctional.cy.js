describe('logout test', () => {
  it('logout button returns the user to the login page', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/login')
cy.get('#email').type('eudorachude@gmail.com')
cy.get('#password').type('heilige1')
cy.get('#submit').click()
cy.get('#logout').click()
cy.contains('ontact List App').should('exist')

  })
})
it('correct password and email gets the user into the site', () => {
  cy.visit('https://thinking-tester-contact-list.herokuapp.com/login')
  cy.get('#email').type('eudorachude@gmail.com')
cy.get('#password').type('heilige1')
cy.get('#submit').click()
cy.contains('Contact List').should('exist')
});

it(' Verify that the sign up button will take the user to the add user page', () => {
  cy.visit('https://thinking-tester-contact-list.herokuapp.com/login')
  cy.get('#signup').click()
  cy.contains('Add User').should('exist')
});

it('Verify the cancel button exits the user out of the add user page', () => {
  cy.visit('https://thinking-tester-contact-list.herokuapp.com/login')
  cy.get('#signup').click()
  cy.get('#cancel').click()
  cy.contains('Contact List App').should('exist')
});


