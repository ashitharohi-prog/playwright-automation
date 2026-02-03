import {test} from '@playwright/test'

test.skip('Test One', async({page}) => {

})

test('not yet ready', async({page}) => {
    //page.goto('https://www.amazon.in/')
    test.fail()
})

test.fixme('Fix test', async({page}) => {

})

test('slow test', async({page}) => {
    test.slow()
})

//tags
test('Test login page @fast', async ({page}) => {
    //..
})