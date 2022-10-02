describe('login__auditor__OS', () => {
  it('login__auditor__OS', () => {
    cy.visit('https://certification.stg.disoft.dev/login');
    cy.get('#input-13').type('secretary@certification.test.ua');
    cy.get('#input-16').type('dianetdev');
    cy.get('.v-btn').click();
  });
});
