class BasePage {
    constructor(selector) {
        this.selector = selector;
    }

    /**
     * Wait for the element to be visible or hidden
     *
     * @param {boolean} [isShown=true]
     * @returns {Promise<boolean | void>}
     */
    async waitForIsShown(isShown = true) {
        return $(this.selector).waitForDisplayed({
            reverse: !isShown,
        });
    }
}

module.exports = BasePage;