const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:14069',
    viewportWidth: 1920,
    viewportHeight: 1080,
    screenshotsFolder: './cypress/screenshots',
    videosFolder: './cypress/videos',
    supportFile: false,
    video: false,
    chromeWebSecurity: false,
    defaultCommandTimeout: 60000,
    pageLoadTimeout: 120000,
    responseTimeout: 120000,
    taskTimeout: 120000,
  },
})
