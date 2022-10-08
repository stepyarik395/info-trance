describe('login__auditor', () => {
  it('Visit__sertification__stg ', () => {
    cy.visit('https://certification.stg.disoft.dev/login');
    cy.get('#input-13').type('secretary@certification.test.ua');
    cy.get('#input-16').type('dianetdev');
    cy.get('.v-btn').click();
    cy.get('.row > a').click();
    //Інформація про КТЗ
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
    cy.get('.text--gray-light')
      .contains('Нормативні акти для норми забрудьоючих речовин *')
      .next()
      .click();
    cy.get('.v-list-item__title').contains('ЄЕК ООН № 83-07').click();
    cy.get(
      ':nth-child(2) > .v-stepper__content > .v-stepper__wrapper > .v-card > .v-card__actions > .primary'
    ).click();

    //Інформація про власника
    cy.get('#input-253').type('Тестовий');
    cy.get('#input-256').type('Тестова');
    cy.get('#input-259').type('Побатькові');
    cy.get('#input-263').click();
    cy.get(':nth-child(23)').click();
    cy.get('tbody > :nth-child(1) > :nth-child(2) > .v-btn').click();
    cy.get('tbody > :nth-child(1) > :nth-child(4) > .v-btn').click();
    cy.get(
      ':nth-child(6) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple'
    ).click();
    cy.get('#input-278').type('312313123');
    cy.get('#input-282').click();
    cy.get('.v-date-picker-years > :nth-child(10)').click();
    cy.get('tbody > :nth-child(1) > :nth-child(2) > .v-btn').click();
    cy.get(
      '.menuable__content__active > .v-picker > .v-picker__body > :nth-child(1) > .v-date-picker-table > table > tbody > :nth-child(1) > :nth-child(6) > .v-btn'
    ).click();
    cy.get('#input-291').type('123451');
    cy.get('#input-294').click();
    cy.get('#list-item-544-21').click();
    cy.get('#input-299').click();
    cy.get('#list-item-582-0').click();
    cy.get('#input-304').type('awd123');
    cy.get('#input-307').type('1231231');
    cy.get('#input-310').type('123dd');
    cy.get('#input-313').type('test@mail.com');
    cy.get('.vti__input').click().type('682176659');
    cy.get(
      ':nth-child(3) > .v-stepper__content > .v-stepper__wrapper > .v-card > .v-card__actions > .primary'
    ).click();
    //Документы
    cy.get('.flex-row > :nth-child(1) > .d-flex').click();
    cy.get(
      '[style=""] > .d-flex > .file-uploader > .filepond--root > .filepond--drop-label'
    ).selectFile('C:UsersRomaOneDrive/Рабочий стол/cat.png', {
      action: 'drag-drop',
    });
  });
});
