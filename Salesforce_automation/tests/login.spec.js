import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'; 
import { HomePage } from '../pages/HomePage';
import { LeadPage } from '../pages/LeadPage';
//import { TIMEOUT } from 'node:dns';
test('login', async ({page}) => {
    
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const leadpage = new LeadPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.login(
    'ashitharohi@brave-goat-bjzglj.com',
    'Milie@0210'
);
    await page.pause();
    await homePage.verifyHomePageLoaded();
    await homePage.clickAppLauncher();
    await homePage.openSalesApp();
    await homePage.openLeads();
    await homePage.verifyLeadPageLoaded();
    await homePage.clickNew();
    await leadpage.selectSalutation();
    await leadpage.enterLastName('Kondru');
    await leadpage.enterCompany('&Nuts')
    await leadpage.slectLeadStatus();
    await leadpage.clickSave();

    

    
    
    
    
    
    
    //await page.getByPlaceholder('Username').fill('standard_user');
    //await page.getByPlaceholder('Password').fill('secret_sauce');
    //await page.getByRole('button', { id: 'login-button' }).click();
    //await page.waitForTimeout(20000);
    //Login success verification
    //await expect(page.locator('.title')).toHaveText('Products');
    //Add products to the cart
    //await page.locator('[id=add-to-cart-sauce-labs-backpack]').click();
    //await page.locator('[id=add-to-cart-sauce-labs-bike-light]').click();
    //await page.locator('[id=shopping_cart_container]').click();
    //await expect(page.locator('.title')).toHaveText('Your Cart');
    //await page.locator('[id=remove-sauce-labs-backpack]').click();
    //await page.locator('[id=checkout]').click();
    //checkout page verification
    //await expect(page.locator('.title')).toHaveText('Checkout: Your Information');
    //await page.getByPlaceholder('First Name').fill('Ash');
    //await page.getByPlaceholder('Last Name').fill('K');
    //await page.getByPlaceholder('Zip/Postal Code').fill('500089');
    //await page.waitForTimeout(10000);

   //Login
    //await loginPage.enterUsername('ashitharohi@brave-goat-bjzglj.com');
    //await loginPage.enterPassword('Milie@0210');
    //await loginPage.clickLogin();

    
 //await loginPage.verifyLoginSuccessful();
  // await page.locator('[title="App Launcher"]').click();



    

    
});