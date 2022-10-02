describe('login__director__OS', () => {
  it('login__director__OS', () => {
    cy.visit('https://certification.stg.disoft.dev/login');
    cy.get('#input-13').type('director@certification.test');
    cy.get('#input-16').type('disoftdev');
    cy.get('.v-btn').click();
  });
});
