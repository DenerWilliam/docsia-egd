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
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 60000,
  },
})
