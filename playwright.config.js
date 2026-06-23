const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

    testDir: './tests',

    timeout: 120000,

    use: {
        browserName: 'chromium',

        headless: false,

        viewport: {
            width: 1366,
            height: 768
        },

        screenshot: 'only-on-failure',

        video: 'retain-on-failure',

        trace: 'on-first-retry'
    },

    reporter: [
        ['html'],
        ['list']
    ]
});