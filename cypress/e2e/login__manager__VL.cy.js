describe('login__manager__VL', () => {
  it('login__manager__VL', () => {
    cy.visit('https://certification.stg.disoft.dev/login');
    cy.get('#input-13').type('manager@test.ua');
    cy.get('#input-16').type('disoftdev');
    cy.get('.v-btn').click();
  });
});
