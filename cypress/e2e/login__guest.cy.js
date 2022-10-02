describe('login__guest', () => {
  it('login__guest', () => {
    cy.visit('https://certification.stg.disoft.dev/login');
    cy.get('#input-13').type('guest_test@certification.test');
    cy.get('#input-16').type('aqNd25GH');
    cy.get('.v-btn').click();
  });
});
