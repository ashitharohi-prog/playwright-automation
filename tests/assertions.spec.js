import { test, expect } from '@playwright/test';
test('Assertions Demo', async({page}) => {
    await page.goto('https://kitchen.applitools.com/')
    await page.pause()
    //Assertions
    //check element present or not
    await expect(page.locator('text=The Kitchen')).toHaveCount(1)
    if( await page.$('text=The Kitchen')){
        await page.locator('text=The Kitchen').click()

    }
    //check element hidden or visible
    await expect(page.locator('text=The Kitchen')).toBeVisible()
    //execution continues even if the line fails using soft
    await expect.soft(page.locator('text=The Kitchen')).toBeHidden()
    //check element enabled or disabled
    await expect(page.locator('text=The Kitchen')).toBeEnabled()
    await expect.soft(page.locator('text=The Kitchen')).toBeDisabled()
    //check text
    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen')
    await expect.soft(page.locator('text=The Kitchen')).not.toHaveText('The Kitchen')
    //check attribute value
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', /.*css-dpmy2a/)
    await expect(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/)
    //check page URL and title
    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    await expect(page).toHaveTitle(/.*Kitchen/)
    //await page.pause()
    //visual validation
    await expect(page).toHaveScreenshot()







})
   
