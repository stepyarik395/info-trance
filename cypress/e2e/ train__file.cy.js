describe('TEST', () => {
  it('some', () => {
    let arr = [];
    cy.visit(Cypress.env('urlStgLogin'));
    cy.get('#input-13').type(Cypress.env('loginAuditor'));
    cy.get('#input-16').type(Cypress.env('passAuditor'));
    cy.get('.v-btn').click();
    cy.get('.row > a').click();
    cy.get('.v-input__slot').each((value, index, collection) => {
      arr.push(value);
    });
    console.log(arr);
  });
});
