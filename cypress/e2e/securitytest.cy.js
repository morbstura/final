describe('security', () => {
  it('If a user can get into the website with an incorrect email', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/login')
    cy.get('#email').type('eudorachude')
    cy.get('#password').type('heilige1')
    cy.get('#submit').click()
    cy.contains('Incorrect username or password').should('exist')
  })
})
it('If a user can get into the website with an incorrect password', () => {
  cy.visit('https://thinking-tester-contact-list.herokuapp.com/login')
  cy.get('#email').type('eudorachude@gmail.com')
  cy.get('#password').type('12345')
  cy.get('#submit').click()
  cy.contains('Incorrect username or password').should ('exist')
})

it('User can enter with credentials without signing up', () => {
  cy.visit('https://thinking-tester-contact-list.herokuapp.com/login')
  cy.get('#email').type('morbstura@yahoo.com')
  cy.get('#password').type('heilige')
  cy.get('#submit').click()
  cy.contains('Incorrect username or password').should ('exist')
});

it('Leave the email field blank to see if an user can login', () => {
  cy.visit('https://thinking-tester-contact-list.herokuapp.com/login')
  cy.get('#password').type('heilige1')
  cy.get('#submit').click()
  cy.contains('Incorrect username or password').should ('exist')
});






