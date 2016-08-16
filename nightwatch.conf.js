require('babel-core/register');

var os = require('os');
var google_default = require('./env/google.js');
var url_default = require('./env/url.js');

var config = {
    "src_folders": [
        "test" // Where you are storing your Nightwatch e2e tests
    ],
    "output_folder": "./reports", // reports (test outcome) output by nightwatch
    "selenium": { // downloaded by selenium-download module (see readme)
        "start_process": true, // tells nightwatch to start/stop the selenium process
        "server_path": "./bin/selenium-server.jar",
        "host": "127.0.0.1",
        "port": 4444, // standard selenium port
        "cli_args": { // chromedriver is downloaded by selenium-download (see readme)
            "webdriver.chrome.driver": "nightwatch",
            "webdriver.firefox.profile" : "nightwatch"
        }
    },
    "test_settings": {
        "default": {
            "screenshots": {
                "enabled": false, // if you want to keep screenshots
                "path": './screenshots' // save screenshots here
            },
            "globals": {
                "waitForConditionTimeout": 5000, // sometimes internet is slow so wait.
                "google": google_default
            },
            "desiredCapabilities": { // use Chrome as the default browser for tests
                "browserName": "chrome"
            },
            "launch_url": url_default.index,
            "skip_testcases_on_fail": true
        },
        "chrome": {
            "desiredCapabilities": {
                "browserName": "chrome",
                "javascriptEnabled": true // set to false to test progressive enhancement
            }
        }
    }
}

// condition os type
var os_type = os.type().toLowerCase();
var selenium_cli = config.selenium.cli_args;
if (os_type.indexOf('windows') > -1) {
    selenium_cli['webdriver.chrome.driver'] = 'bin/chromedriver_windows.exe';
} else if (os_type.indexOf('darwin') > -1) {
    selenium_cli['webdriver.chrome.driver'] = 'bin/chromedriver_mac';
} else {
    selenium_cli['webdriver.chrome.driver'] = 'bin/chromedriver_linux64';
}

module.exports = config;
