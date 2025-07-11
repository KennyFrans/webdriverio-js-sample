const dotenv = require('dotenv');

class ConfigManager {
    static prefix;

    static init() {
        dotenv.config();
        const env = (process.env.TEST_ENV || "DEV").toUpperCase();
        ConfigManager.prefix = `${env.trim()}_`;
    }

    static get(key) {
        if (!ConfigManager.prefix) {
            ConfigManager.init();
        }
        const fullKey = `${this.prefix}${key}`;
        const value = process.env[fullKey];
        if (!value) {
            throw new Error(`❌ Missing environment variable: ${fullKey}`);
        }
        return value;
    }
}

// Initialize immediately
ConfigManager.init();

module.exports = ConfigManager;