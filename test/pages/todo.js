module.exports = (browser) => {
    return {
        goPage: () => {
            browser
                .url(browser.globals.url_index)
                .waitForElementPresent('#app', 'page ok')

            return browser;
        },
        shouldAllElementPresent: () => {
            browser
                .assert.containsText('#title', 'todo MVC', 'title ok')
                .assert.elementPresent('#filters', 'filter ok')
                .assert.elementPresent('#new_todo', 'input field ok')
                .assert.elementPresent('#btn_add', 'add button ok')
                .assert.elementPresent('#btn_ajax', 'ajax button ok')

            return browser;
        },
        addTodo: (todo) => {
            browser
                .setValue('#new_todo', todo)
                .click('#btn_add')
                .assert.value('#new_todo', '', 'input field is empty')

            return browser;
        },
        shouldSeeAtList: (index, todo) => {
            browser
                .waitForElementPresent(`#todo_list > li.todo:nth-child(${index})`, `todo:${index} ok`)
                .assert.containsText(`#todo_list > li.todo:nth-child(${index}) > span > span:first-child`, todo, `todo:${index} should be '${todo}'`)

            return browser;
        },
        getDataFromAjax: () => {
            browser
                .click('#btn_ajax')

            return browser;
        },
        completeTodo: (index) => {
            browser
                .waitForElementPresent(`#todo_list > li.todo:nth-child(${index}) > button.complete`, `todo:${index} complete btn ok`)
                .click(`#todo_list > li.todo:nth-child(${index}) > button.complete`)

            return browser;
        },
        'shouldCompletedTodo': (index) => {
            browser
                .assert.attributeContains(`#todo_list > li.todo:nth-child(${index}) > span`, 'style', 'line-through', `todo:${index} is completed`)

            return browser;
        },
        'deleteTodo': (index) => {
            browser
                .waitForElementPresent(`#todo_list > li.todo:nth-child(${index}) > button.delete`, `todo:${index} delete btn ok`)
                .click(`#todo_list > li.todo:nth-child(${index}) > button.delete`)

            return browser;
        },
        'sholdGetNumbersOfTodos': (number) => {
            browser
                .elements('css selector', '#todo_list > li.todo', (result) => {
                    browser.assert.equal(result.value.length, number, `numbers of todo should be ${number}`)
                })

            return browser;
        },
        'switchTag': (name) => {
            browser
                .waitForElementPresent(`#filters > .filter_${name}`, `${name} ok`)
                .click(`#filters > .filter_${name}`)

            return browser;
        }
    }
}
