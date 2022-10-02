describe('login__admin', () => {
  it('login__admin', () => {
    cy.visit('https://certification.stg.disoft.dev/login');
    cy.get('#input-13').type('admin_test@gmail.com');
    cy.get('#input-16').type('dianetdev');
    cy.get('.v-btn').click();
  });
});
