const { defineConfig } = require("cypress")

module.exports = defineConfig({
  trashAssetsBeforeRuns: true,
  video: false,
  projectId: 'PID',
  defaultCommandTimeout: 10000,
  responseTimeout: 10000,
  requestTimeout: 10000,
  chromeWebSecurity: false,
  retries: 0,
  scrollBehavior: 'bottom',
  viewportWidth: 1600,
  viewportHeight: 1200,
  watchForFileChanges: false,
  redirectionLimit: 50,
  hideXHR: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      require('rctf/plugins/index.js')(on, config)
      return config
    },
    baseUrl: 'http://localhost:8080',
    stepDefinitions: 'cypress/support/step_definitions',
    specPattern: [ 'cypress/features/*.feature',
      'redcap_rsvc/*/[ABC]/*/*.feature',
      '!redcap_rsvc/*/[ABC]/*/*REDUNDANT*.feature'
    ],
    testIsolation: false,
    experimentalMemoryManagement: false,
    numTestsKeptInMemory: 10
  }
})