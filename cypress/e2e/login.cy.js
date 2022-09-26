describe('login__with__', () => {
  it('Visit__sertification__stg ', () => {
    cy.visit('https://certification.stg.disoft.dev/login');
    cy.get('#input-13').type('secretary@certification.test.ua');
    cy.get('#input-16').type('dianetdev');
    cy.get('.v-btn').click();
    cy.get('.row > a').click();
    cy.get('#input-168').type('3123441234123'); // vin
    cy.get('#input-181').type('1994'); // Production year
    cy.get('#input-187').click();
    cy.get('#list-item-352-0').click();
    cy.get('#input-192').click();
    cy.get('#list-item-376-0').click();
    cy.get('#input-197').click();
    cy.get('#list-item-400-1').click();
    cy.get('#input-202').type('400');
    cy.get('#input-205').click();
    cy.get('#list-item-424-1').click();
    cy.get('#input-210').click();
    cy.get('#list-item-433-0').click();
    cy.get('#input-215').click();
    cy.get('#list-item-445-0').click();
    cy.get('#input-464').click();
    cy.get('#list-item-470-1').click();
    cy.get(
      ':nth-child(2) > .v-stepper__content > .v-stepper__wrapper > .v-card > .v-card__actions > .primary'
    ).click();
  });
});
