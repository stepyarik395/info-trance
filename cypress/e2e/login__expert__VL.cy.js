describe('login__expert__VL', () => {
  it('login__expert__VL', () => {
    cy.visit('https://certification.stg.disoft.dev/login');
    cy.get('#input-13').type('expert1@test.ua');
    cy.get('#input-16').type('dianetdev');
    cy.get('.v-btn').click();
  });
});
