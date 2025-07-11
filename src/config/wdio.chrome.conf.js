const { config: baseConfig } = require('./wdio.shared.conf');

const config = {
    ...baseConfig,

    capabilities: [
        {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: [
                    '--no-sandbox',
                    '--disable-gpu',
                    '--disable-dev-shm-usage',
                    '--disable-blink-features=AutomationControlled',
                    '--window-size=1600,1200'
                ]
            }
        }
    ],

    // Optional: override other settings if needed
    maxInstances: 5,
    // baseUrl: 'https://your-site.com', // Optional environment override
};

module.exports.config = config;