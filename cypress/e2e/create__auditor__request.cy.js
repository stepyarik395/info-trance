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
    cy.get('#input-253').type('віовішоа');
    cy.get('#input-256').type('йіістова');
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
    cy.get('.text--gray-light').contains('Область').next().click();
    cy.get('.v-list-item__title').contains('Волинська область').click();

    cy.get('.text--gray-light').contains('Місто/Село *').next().click();
    cy.wait(500);
    cy.get('.v-list-item__title').contains('Нововолинськ').click();

    // документи
    cy.get('.text--gray-light')
      .contains('Вулиця *')
      .next()
      .click()
      .type('kadkwdawdok');
    cy.get('.text--gray-light')
      .contains('Дім *')
      .next()
      .click()
      .type('kadkwdawdok');
    cy.get('.text--gray-light')
      .contains('Квартира ')
      .next()
      .click()
      .type('kadkwdawdok');
    cy.get('.text--gray-light')
      .contains('Email *')
      .next()
      .click()
      .type('test@mail.com');
    cy.get('.text--gray-light')
      .contains('Номер телефону *')
      .next()
      .click()
      .type('0682176659');
    cy.get(
      ':nth-child(3) > .v-stepper__content > .v-stepper__wrapper > .v-card > .v-card__actions > .primary'
    ).click();

    //Паспорт
    cy.get('.flex-row > :nth-child(1) > .d-flex > div')
      .contains('Паспорт')
      .then((elem) => {
        elem.click();
      });
    cy.get(
      '[style=""] > .d-flex > .file-uploader > .filepond--root > .filepond--drop-label'
    ).selectFile('cypress/fixtures/glassmarking.jpeg', {
      action: 'drag-drop',
    });

    cy.get('.flex-row > :nth-child(2) > .d-flex > div')
      .contains('РНОКПП (ІПН)')
      .then((elem) => {
        elem.click();
      });
    cy.get(
      '[style=""] > .d-flex > .file-uploader > .filepond--root > .filepond--drop-label'
    ).selectFile('cypress/fixtures/glassmarking.jpeg', {
      action: 'drag-drop',
    });
    cy.get('.flex-row > :nth-child(3) > .d-flex > div')
      .contains('Митні документи')
      .then((elem) => {
        elem.click();
      });
    cy.get(
      '[style=""] > .d-flex > .file-uploader > .filepond--root > .filepond--drop-label'
    ).selectFile('cypress/fixtures/glassmarking.jpeg', {
      action: 'drag-drop',
    });

    // Митні документи

    cy.get('.flex-row > :nth-child(4) > .d-flex > div')
      .contains('Свідоцтво про реєстрацію')
      .then((elem) => {
        elem.click();
      });
    cy.get(
      '[style=""] > .d-flex > .file-uploader > .filepond--root > .filepond--drop-label'
    ).selectFile('cypress/fixtures/glassmarking.jpeg', {
      action: 'drag-drop',
    });
    cy.get('.flex-row > :nth-child(5) > .d-flex > div')
      .contains('Копія інвойсу')
      .then((elem) => {
        elem.click();
      });
    cy.get(
      '[style=""] > .d-flex > .file-uploader > .filepond--root > .filepond--drop-label'
    ).selectFile('cypress/fixtures/glassmarking.jpeg', {
      action: 'drag-drop',
    });

    cy.get('.flex-row > :nth-child(6) > .d-flex > div')
      .contains('Екологічний стандарт')
      .then((elem) => {
        elem.click();
      });
    cy.get(
      '[style=""] > .d-flex > .file-uploader > .filepond--root > .filepond--drop-label'
    ).selectFile('cypress/fixtures/glassmarking.jpeg', {
      action: 'drag-drop',
    });
    cy.wait(4000);
    cy.get(
      ':nth-child(4) > .v-stepper__content > .v-stepper__wrapper > .v-card > .v-card__actions > .primary'
    ).click();
    cy.wait(4000);
    cy.get('.white--text').contains('Підписати').click();
    cy.wait(4000);
  });
});
