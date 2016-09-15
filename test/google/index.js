module.exports = {
    before: function(browser) {
        // browser
        //     .url(browser.launchUrl)
        //     .waitForElementVisible("body");
        browser
            .page.object().show()
    },
    after: function(browser) {
        // browser
        //     .end();
    }
};
