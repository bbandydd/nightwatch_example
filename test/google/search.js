module.exports = {
    'step one': function(browser) {
        browser
            .setValue('input[type="text"]', browser.globals.google.search.keyword)
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
