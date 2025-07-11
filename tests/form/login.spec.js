const formHomePage = require("../../src/pages/form-home.page");
const formLoginPage = require("../../src/pages/form-login.page");


describe('Login Flow', function () {
    it('should allow user to log in with valid credentials', async function () {
        await formHomePage.navigate();

        await formHomePage.waitForIsShown();
        await formHomePage.goToLoginForm();

        await formLoginPage.waitForIsShown();
        await formLoginPage.authenticate(
            "tomsmith",
            "SuperSecretPassword!"
        );
        
        let result = (await formLoginPage.getLoginStatus()).trim();
        await expect(result).toContain("logged into a secure");
    });
});