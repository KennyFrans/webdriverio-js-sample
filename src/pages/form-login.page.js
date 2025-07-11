const BasePage = require('./base.page');

class LoginFormPage extends BasePage {
    constructor() {
        super("div[id='content']");
    }

    get usernameInput() {
        return $("input[name='username']");
    }

    get passwordInput() {
        return $("input[name='password']");
    }

    get loginButton() {
        return $("button[type='submit']");
    }

    get noticeBanner() {
        return $("//div[@id='flash']");
    }

    async authenticate(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async getLoginStatus() {
        return this.noticeBanner.getText();
    }
}

module.exports = new LoginFormPage();