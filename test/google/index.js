module.exports = {
    before: function(browser) {
        browser
            .url(browser.launchUrl)
            .waitForElementVisible("body");
    },
    after: function(browser) {
        // browser
        //     .end();
    }
};
