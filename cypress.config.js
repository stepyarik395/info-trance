const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 't8xu2f',
  chromeWebSecurity: false,
  env: {
    urlStgLogin: 'https://certification.stg.disoft.dev/login',
    loginAuditor: 'secretary@certification.test.ua',
    passAuditor: 'dianetdev',
    directorOsLogin: 'director@certification.test',
    directorOsPassword: 'disoftdev',
    expertVlLogin: 'expert1@test.ua',
    expertVlPassword: 'dianetdev',
    chiefVllogin: '',
    chiefVlPassword: '',
    directorVlLogin: '',
    directorVlPassword: '',
    loginAuditorx: '',
    loginAuditorxPassword: '',
  },

  video: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
