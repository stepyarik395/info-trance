import { randomName } from './helper___func.js';

var $createdUrlRequest;
describe('login__auditor', () => {
  it('inner__data__request_and__signature ', () => {
    cy.visit(Cypress.env('urlStgLogin'));
    cy.get('#input-13').type(Cypress.env('loginAuditor'));
    cy.get('#input-16').type(Cypress.env('passAuditor'));
    cy.get('.v-btn').click();
    cy.get('.row > a').click();
    //Інформація про КТЗ
    cy.get('input[placeholder="VIN код"]').type('45474756');
    cy.get('input[placeholder="Рік виробництва"]').type('1994');
    cy.get('.v-label').contains('Марка').next().click();
    cy.get('.v-list-item__title').contains('Audi').click();
    cy.get('.v-label').contains('Модель').next().click();
    cy.get('.v-list-item__title').contains('100').click();
    cy.get('.v-label').contains('Тип палива').next().click();
    cy.get('.v-list-item__title').contains('Бензин').click();
    cy.get(`input[placeholder="Об'єм двигуна"]`).type('200');
    cy.get('.v-label').contains('Тип трансмісії').next().click();
    cy.get('.v-list-item__title').contains('Автоматична').click();
    cy.get('.v-label').contains('Євро код').next().click();
    cy.get('.v-list-item__title').contains('61').click();
    // cy.get('.v-label')
    //   .contains('Нормативні акти для норми забрудьоючих речовин')
    //   .next()
    //   .click();
    cy.get('.col-12 > .v-input > .v-input__control > .v-input__slot').click();
    cy.wait(500);
    cy.get('.v-list-item__title').contains('Регламент EC 715/2007 ').click();
    cy.get(
      ':nth-child(2) > .v-stepper__content > .v-stepper__wrapper > .v-card > .v-card__actions > .primary'
    ).click();

    //Інформація про власника
    cy.get('input[placeholder="Прізвище"]').type(`${randomName(5)}`);
    cy.get(`input[placeholder="Ім'я"]`).type(`${randomName(5)}`);
    cy.get('input[placeholder="По-батькові"]').type(`${randomName(5)}`);

    cy.get('.v-label').contains('Дата народження').next().click();
    cy.get('.v-date-picker-years > li').contains('2000').click();
    cy.get('.v-btn__content').contains('тра').click();
    cy.get('.v-btn__content').contains('10').click();
    cy.get('input[placeholder="РНОКПП (ІПН)"]').type('234566233224');

    cy.get('input[placeholder="Номер паспорта"]').type('364545364');
    cy.get('.v-label').contains('Дата видачі').next().click();
    cy.get('.v-date-picker-years > li').contains('2013').click();
    cy.get('.v-btn__content').contains('тра').click();
    cy.get(
      '.menuable__content__active > .v-picker > .v-picker__body > :nth-child(1) > .v-date-picker-table > table > tbody > :nth-child(1) > :nth-child(4) > .v-btn'
    )
      .contains('1')
      .click();
    cy.get('.v-text-field__slot').next();
    cy.get('input[placeholder="Індекс"]').type('5433');
    cy.get('.v-label').contains('Область').next().click();
    cy.get('.v-list-item__title').contains('Волинська область').click();
    cy.get('.v-label').contains('Місто/Село').next().click();
    cy.wait(1500);
    cy.get('.v-list-item__title').contains('Луцьк').click();
    cy.get('input[placeholder="Вулиця"]').type('Жижкевіч');
    cy.get('input[placeholder="Дім"]').type('34');
    cy.get('input[placeholder="Квартира"]').type('56');
    cy.get('input[placeholder="Email"]').type('autotest@mail.com');
    cy.get('input[placeholder="Номер телефону"]').type('682176659');
    cy.get(
      ':nth-child(3) > .v-stepper__content > .v-stepper__wrapper > .v-card > .v-card__actions > .primary > .v-btn__content > .white--text'
    ).click();

    //Документы

    //Паспорт
    cy.readFile('cypress/fixtures/glassmarking.jpeg', null).then((file) => {
      expect(Cypress.Buffer.isBuffer(file)).to.be.true;
      cy.get('.file-uploader-preview')
        .children('div')
        .contains('Паспорт')
        .click();
      cy.get(
        '[style=""] > .d-flex > .file-uploader > .filepond--root > .filepond--drop-label'
      ).selectFile('cypress/fixtures/glassmarking.jpeg', {
        action: 'drag-drop',
        mimeType: 'image/png',
      });
    });
    //РНОКПП (ІПН
    cy.readFile('cypress/fixtures/glassmarking.jpeg', null).then((file) => {
      expect(Cypress.Buffer.isBuffer(file)).to.be.true;
      cy.get('.file-uploader-preview')
        .children('div')
        .contains('РНОКПП (ІПН)')
        .click();
      cy.get(
        '[style=""] > .d-flex > .file-uploader > .filepond--root > .filepond--drop-label'
      ).selectFile('cypress/fixtures/glassmarking.jpeg', {
        action: 'drag-drop',
        mimeType: 'image/png',
      });
    });
    //Митні документи
    cy.readFile('cypress/fixtures/glassmarking.jpeg', null).then((file) => {
      expect(Cypress.Buffer.isBuffer(file)).to.be.true;
      cy.get('.file-uploader-preview')
        .children('div')
        .contains('Митні документи')
        .click();
      cy.get(
        '[style=""] > .d-flex > .file-uploader > .filepond--root > .filepond--drop-label'
      ).selectFile('cypress/fixtures/glassmarking.jpeg', {
        action: 'drag-drop',
        mimeType: 'image/png',
      });
    });
    //Свідоцтво про реєстрацію
    cy.readFile('cypress/fixtures/glassmarking.jpeg', null).then((file) => {
      expect(Cypress.Buffer.isBuffer(file)).to.be.true;
      cy.get('.file-uploader-preview')
        .children('div')
        .contains('Свідоцтво про реєстрацію')
        .click();
      cy.get(
        '[style=""] > .d-flex > .file-uploader > .filepond--root > .filepond--drop-label'
      ).selectFile('cypress/fixtures/glassmarking.jpeg', {
        action: 'drag-drop',
        mimeType: 'image/png',
      });
    });
    //Копія інвойсу
    cy.readFile('cypress/fixtures/glassmarking.jpeg', null).then((file) => {
      expect(Cypress.Buffer.isBuffer(file)).to.be.true;
      cy.get('.file-uploader-preview')
        .children('div')
        .contains('Копія інвойсу')
        .click();
      cy.get(
        '[style=""] > .d-flex > .file-uploader > .filepond--root > .filepond--drop-label'
      ).selectFile('cypress/fixtures/glassmarking.jpeg', {
        action: 'drag-drop',
        mimeType: 'image/png',
      });
    });
    //Екологічний стандарт
    cy.readFile('cypress/fixtures/glassmarking.jpeg', null).then((file) => {
      expect(Cypress.Buffer.isBuffer(file)).to.be.true;
      cy.get('.file-uploader-preview')
        .children('div')
        .contains('Екологічний стандарт')
        .click();
      cy.get(
        '[style=""] > .d-flex > .file-uploader > .filepond--root > .filepond--drop-label'
      ).selectFile('cypress/fixtures/glassmarking.jpeg', {
        action: 'drag-drop',
        mimeType: 'image/png',
      });
    });
    cy.get('.white--text').contains('Зберегти').click();
    //End create request
    cy.wait(2500);
    cy.get(':nth-child(4) > .v-btn__content > .white--text').click();
    cy.wait(2500);
    cy.get('.v-input--selection-controls__ripple').click();
    cy.wait(500);
    cy.get('.d-flex > .v-btn > .v-btn__content > .white--text').click();
    cy.get('.signature_pad').click();
    cy.get('.success').click();
    //Signature client
    cy.wait(2000);
    cy.get('.white--text').contains('Підписати заяву').click();
    //Signature auditor
    cy.wait(7000);
    cy.get('.white--text').contains('Відповідає').click();
    cy.wait(2000);
    cy.get('.white--text').contains('Підписати акт ідентифікації').click();
    //successful act identification
    cy.wait(6000);
    cy.get('.white--text').contains('Виставити категорію').click();
    //Type Category KTZ
    cy.get('.v-input__icon > .v-icon').click();
    cy.get('.v-list-item__title').contains('M2').click();
    cy.get('.white--text').contains('Зберегти').click();
    cy.get('.mr-3').click();
    //Type branch office
    cy.get('.v-label')
      .contains('Філіал вимірювальної лабораторії')
      .next()
      .click();
    cy.get('.v-list-item__title').contains('Test').click();
    cy.get('.white--text').contains('Зберегти').click();
    cy.wait(1000);
    cy.get('.white--text').contains('Схвалити').click();
    cy.wait(1000);
    cy.get('.white--text').contains('Підписати рішення по заяві').click();
    //Save create request URL
    cy.location('href').then(($url) => {
      $createdUrlRequest = $url;
    });
  });
  //Signature request director
  it('aut__director__and__signature__req', () => {
    cy.visit(Cypress.env('urlStgLogin'));
    cy.get('#input-13').type(Cypress.env('directorOsLogin'));
    cy.get('#input-16').type(Cypress.env('directorOsPassword'));
    cy.get('.v-btn').click();
    cy.wait(3000);
    cy.visit($createdUrlRequest);
    cy.wait(5000);
    cy.get('.white--text').contains('Підписати рішення по заяві').click();
  });
  // Expert login and car inspection
  it('auth__expertVl', () => {
    cy.visit(Cypress.env('urlStgLogin'));
    cy.get('#input-13').type(Cypress.env('expertVlLogin'));
    cy.get('#input-16').type(Cypress.env('expertVlPassword'));
    cy.get('.v-btn').click();
    cy.wait(3000);
    cy.visit($createdUrlRequest);
    cy.wait(4000);
    cy.get('.white--text').contains('Почати огляд').click();
    cy.get('.v-expansion-panel-header').eq(0).click();
    cy.get('.finder-vehicle').trigger('mousedown');
    cy.get('.finder-vehicle').scrollTo('bottom');
    cy.wait(2000);
    cy.get('.white--text').contains('Обрати').click();
    cy.get('.v-select__slot').children().contains('Колір').next().click();
    cy.get('.v-list-item__title').contains('Білий').click();
    cy.get('input[placeholder="Пробіг"]').type('200');
    cy.get('input[placeholder="Кількість осей"]').clear();
    cy.get('input[placeholder="Кількість осей"]').type('1');
    cy.get('input[placeholder="Кількість коліс"]').clear();
    cy.get('input[placeholder="Кількість коліс"]').type('1');
    cy.get('input[placeholder="Тип"]').type('Тип');
    cy.get('input[placeholder="Варіант"]').type('Варіант');
    cy.get('input[placeholder="Версія"]').type('Версія');
    cy.get('.v-select__slot').children().contains('Клас КТЗ').next().click();
    cy.get('.v-list-item__title').contains('I').click();

    cy.get('.v-select__slot').children().contains('Тип кузова').next().click();
    cy.get('.v-list-item__title').contains('CA').click();
    cy.get(
      'input[placeholder="Кількість місць для пасажирів, які стоять"]'
    ).type('2');

    cy.get('.v-select__slot')
      .children()
      .contains('Колісна формула')
      .next()
      .click();
    cy.get('.v-list-item__title').contains('1x2').click();
    cy.wait(1500);
    cy.get(':nth-child(57) > .d-flex > .btn-link').click();
    cy.wait(2000);
    cy.get('.v-select__slot')
      .children()
      .contains('Вибір Реєстраційна/експлуатаційна для припустимої маси на осі')
      .next()
      .click();
    cy.get('.v-list-item__title').contains('Реєстраційна').click();
    cy.get('input[placeholder="Технічно припустима маса"]:visible').type('1');
    cy.get('input[placeholder="Розподіл цієї маси за осями"]:visible').type(
      '1'
    );
    cy.get(
      'input[placeholder="Реєстраційна/експлуатаційна максимально припустима маса на кожній осі"]:visible'
    ).type('1');
    cy.get('input[placeholder="Ширина"]:visible').eq(1).type('1');
    cy.get('input[placeholder="Діаметр"]:visible').eq(0).type('1');
    cy.get('input[placeholder="Висота"]:visible').eq(1).type('1');
    cy.get('input[placeholder="Тиск"]:visible').type('1');
    cy.get('input[placeholder="Висота малюнку протектора шини"]:visible').type(
      '1'
    );
    cy.get('.mr-2 > .v-btn__content > .white--text')
      .contains('Зберегти')
      .click();

    // cy.get(':nth-child(58) > .d-flex > .btn-link').click();
    // cy.get('.v-select__slot')
    //   .children()
    //   .contains(
    //     'Вибір Реєстраційна/експлуатаційна для припустимої маси на групі осей'
    //   )
    //   .next()
    //   .click();
    // cy.wait(2000);
    // cy.get('.v-list-item__content:visible').contains('Реєстраційна').click();
    // cy.get('input[placeholder="Кількість груп осей"]').type('0');
    // cy.get(
    //   '.v-dialog__content--active > .v-dialog > .v-card > .v-card__actions > .v-btn'
    // ).click();
  });
});
