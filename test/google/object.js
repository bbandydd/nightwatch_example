module.exports = function (browser) {
    this.show = () => {
        return browser
            .url('http://google.com.tw')
            .waitForElementPresent('body')
    }
}
