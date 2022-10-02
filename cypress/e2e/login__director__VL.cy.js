describe('login__director__VL', () => {
  it('login__director__VL', () => {
    cy.visit('https://certification.stg.disoft.dev/login');
    cy.get('#input-13').type('laboratory.director@test.ua');
    cy.get('#input-16').type('dianetdev');
    cy.get('.v-btn').click();
  });
});
