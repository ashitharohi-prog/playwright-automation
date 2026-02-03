import { test, expect } from '@playwright/test';
test('Selectors Demo', async({page}) => {
    await page.goto('https://www.amazon.in/')
    await page.pause()
    //using any object property
    await page.click('id=twotabsearchtextbox')
    await page.locator('id=twotabsearchtextbox').fill('shoes')
    //using css selector
    //#nav-search-submit-button
    await page.locator('#nav-search-submit-button').click()
    //using xpath
    await page.locator('xpath=//input[@id="nav-search-submit-button"]').click()
    //using text
    await page.locator('text=Fresh').click()






})