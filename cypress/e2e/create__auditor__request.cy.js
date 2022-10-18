describe('login__auditor', () => {
  it('Visit__sertification__stg ', () => {
    cy.visit('https://certification.stg.disoft.dev/login');
    cy.get('#input-13').type('secretary@certification.test.ua');
    cy.get('#input-16').type('dianetdev');
    cy.get('.v-btn').click();
    cy.get('.row > a').click();
    //Інформація про КТЗ
    cy.get('input[placeholder="VIN код"]').type('135455213');
    cy.get('input[placeholder="Рік виробництва"]').type('1994');
    cy.get('.v-label').contains('Марка').next().click();
    cy.get('.v-list-item__title').contains('Audi').click();
    cy.get('.v-label').contains('Модель').next().click();
    cy.get('.v-list-item__title').contains('100').click();
    cy.get('.v-label').contains('Тип палива').next().click();
    cy.get('.v-list-item__title').contains('Бензин').click();
    cy.get(`input[placeholder="Об'єм двигуна"]`).type('135455213');
    cy.get('.v-label').contains('Тип трансмісії').next().click();
    cy.get('.v-list-item__title').contains('Автоматична').click();
    cy.get('.v-label').contains('Євро клас').next().click();
    cy.get('.v-list-item__title').contains('EURO 6').click();
    cy.get('.v-label').contains('Євро код').next().click();
    cy.get('.v-list-item__title').contains('61').click();
    cy.get('.v-label')
      .contains('Нормативні акти для норми забрудьоючих речовин')
      .next()
      .click();
    cy.get('.v-list-item__title').contains('Регламент EC 715/2007 ').click();
    cy.get(
      ':nth-child(2) > .v-stepper__content > .v-stepper__wrapper > .v-card > .v-card__actions > .primary'
    ).click();

    //Інформація про власника
    cy.get('input[placeholder="Прізвище"]').type('Шпак');
    cy.get(`input[placeholder="Ім'я"]`).type('Шпак');
    cy.get('input[placeholder="По-батькові"]').type('Шпак');

    cy.get('.v-label').contains('Дата народження').next().click();
    cy.get('.v-date-picker-years > li').contains('2000').click();
    cy.get('.v-btn__content').contains('тра').click();
    cy.get('.v-btn__content').contains('10').click();
    cy.get('.v-label').contains('Клієнт не має РНОКПП (ІПН)').click();
    cy.get('input[placeholder="Номер паспорта"]').type('364545364');
    cy.get('.v-label').contains('Дата видачі').next().click();
    cy.get('.v-date-picker-years > li').contains('2013').click();
    cy.get('.v-btn__content').contains('тра').click();
    cy.get(
      '.menuable__content__active > .v-picker > .v-picker__body > :nth-child(1) > .v-date-picker-table > table > tbody > :nth-child(1) > :nth-child(4) > .v-btn'
    )
      .contains('1')
      .click();
    cy.get('input[placeholder="Індекс"]').type('5433');
    cy.get('.v-label').contains('Область').next().click();
    cy.get('.v-list-item__title').contains('Волинська область').click();
    cy.get('.v-label').contains('Місто/Село').next().click();
    cy.wait(500);
    cy.get('.v-list-item__title').contains('Луцьк').click();
    cy.get('input[placeholder="Вулиця"]').type('5433');
    cy.get('input[placeholder="Дім"]').type('5433');
    cy.get('input[placeholder="Квартира"]').type('5433');
    cy.get('input[placeholder="Email"]').type('autotest@mail.com');
    cy.get('input[placeholder="Номер телефону"]').type('682176659');
    cy.get(
      ':nth-child(3) > .v-stepper__content > .v-stepper__wrapper > .v-card > .v-card__actions > .primary > .v-btn__content > .white--text'
    ).click();

    //Документы
    cy.get('.flex-row > :nth-child(1) > .d-flex > div')
      .contains('Паспорт')
      .then((elem) => {
        elem.click();
      });
    cy.wait(500);
    cy.get('.filepond--drop-label')
      .children()
      .selectFile('cypress/fixtures/glassmarking.jpeg');
    // cy.get('.flex-row > :nth-child(2) > .d-flex > div')
    //   .contains('РНОКПП (ІПН)')
    //   .then((elem) => {
    //     elem.click();
    //   });
    // cy.get('.filepond--drop-label')
    //   .children('label')
    //   .first()
    //   .selectFile('cypress/fixtures/glassmarking.jpeg');
    // cy.wait(500);
    // cy.get('label')
    //   .contains('Додати фото +')
    //   .selectFile('cypress/fixtures/glassmarking.jpeg');
    // cy.get(
    //   '[style=""] > .d-flex > .file-uploader > .filepond--root > .filepond--drop-label'
    // ).selectFile('cypress/fixtures/glassmarking.jpeg', {
    //   action: 'drag-drop',
    // });
    // cy.get('.flex-row > :nth-child(3) > .d-flex > div')
    //   .contains('Митні документи')
    //   .then((elem) => {
    //     elem.click();
    //   });
    // cy.get(
    //   '[style=""] > .d-flex > .file-uploader > .filepond--root > .filepond--drop-label'
    // ).selectFile('cypress/fixtures/glassmarking.jpeg', {
    //   action: 'drag-drop',
    // });

    // cy.get('.flex-row > :nth-child(4) > .d-flex > div')
    //   .contains('Свідоцтво про реєстрацію')
    //   .then((elem) => {
    //     elem.click();
    //   });
    // cy.get(
    //   '[style=""] > .d-flex > .file-uploader > .filepond--root > .filepond--drop-label'
    // )
    // .selectFile('cypress/fixtures/glassmarking.jpeg', {
    //   action: 'drag-drop',
    // });
    // cy.get('.flex-row > :nth-child(5) > .d-flex > div')
    //   .contains('Копія інвойсу')
    //   .then((elem) => {
    //     elem.click();
    //   });
    // cy.get(
    //   '[style=""] > .d-flex > .file-uploader > .filepond--root > .filepond--drop-label'
    // ).selectFile('cypress/fixtures/glassmarking.jpeg', {
    //   action: 'drag-drop',
    // });

    // cy.get('.flex-row > :nth-child(6) > .d-flex > div')
    //   .contains('Екологічний стандарт')
    //   .then((elem) => {
    //     elem.click();
    //   });
    // cy.get(
    //   '[style=""] > .d-flex > .file-uploader > .filepond--root > .filepond--drop-label'
    // ).selectFile('cypress/fixtures/glassmarking.jpeg', {
    //   action: 'drag-drop',
    // });
    // cy.wait(4000);
    // cy.get(
    //   ':nth-child(4) > .v-stepper__content > .v-stepper__wrapper > .v-card > .v-card__actions > .primary'
    // ).click();
    // cy.wait(4000);
    // cy.get('.white--text').contains('Підписати').click();
    // cy.wait(4000);
  });
});
