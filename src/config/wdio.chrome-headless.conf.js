const { config: baseConfig } = require('./wdio.shared.conf');

const config = {
    ...baseConfig,

    capabilities: [
        {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: [
                    '--headless=new', // modern headless mode (better support)
                    '--no-sandbox',
                    '--disable-gpu',
                    '--disable-dev-shm-usage',
                    '--disable-blink-features=AutomationControlled',
                    '--window-size=1600,1200',
                    '--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36'
                ]
            }
        }
    ],

    // Optional: override other settings if needed
    maxInstances: 5,
    // baseUrl: 'https://your-site.com', // Optional environment override
};

module.exports.config = config;