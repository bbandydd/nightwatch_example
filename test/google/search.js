'use strict';

let searchWord = 'git';

module.exports = {
    'promise and setValue': function(browser) {
        browser
            .setValue('input[type="text"]', searchWord)
            .pause(2000)

        new Promise(function(resolve, reject) {
            searchWord = 'hub';
            resolve();
        })
        .then(function() {
            browser
                .setValue('input[type="text"]', searchWord)
        })
    },
    'step one': function(browser) {
        browser
            .keys(browser.Keys.ENTER)
            .pause(1000)
            .click('div.rc a:first-child')
            .pause(1000)
    },

    'step two': function(browser) {
        browser
            .setValue('input[type="text"]', 'bbandydd')
            .keys(browser.Keys.ENTER)
            .pause(1000)
            .click('ul.repo-list h3.repo-list-name a:first-child')
    }
}
