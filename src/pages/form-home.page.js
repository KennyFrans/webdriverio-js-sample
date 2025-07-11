const ConfigManager = require('../config/manager.conf');
const BasePage = require('./base.page');

class HomeFormCollectionPage extends BasePage {
    constructor() {
        super("div[id='content']");
    }

    get loginFormLink() {
        return $("a[href='/login']");
    }

    async navigate() {
        await browser.url(ConfigManager.get("BASE_URL"));
    }

    async goToLoginForm() {
        await this.loginFormLink.click();
    }
}

module.exports = new HomeFormCollectionPage();