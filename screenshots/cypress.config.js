const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:14069',
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true,
    videosFolder: 'cypress/videos',
    screenshotsFolder: 'cypress/screenshots',
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    responseTimeout: 60000,
    supportFile: false,
    chromeWebSecurity: false,
    retries: 0,
    watchForFileChanges: false,
    videoCompression: 32
  }
})
