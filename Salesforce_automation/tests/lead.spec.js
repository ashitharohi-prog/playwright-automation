import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'; 
import { HomePage } from '../pages/HomePage';
import { LeadPage } from '../pages/LeadPage';
import { leadData } from '../test-data/leadData';
import { loginData } from '../test-data/loginData';
import { searchData } from '../test-data/searchData';
test.describe('Lead Tests', () => {
test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
 await loginPage.navigateToLoginPage();
    await loginPage.login(
    loginData.username,
    loginData.password

); 
});
test('Create Lead', async ({page}) => {
    const homePage = new HomePage(page);
    const leadpage = new LeadPage(page);
    await page.pause();
    await homePage.verifyHomePageLoaded();
    await homePage.clickAppLauncher();
    await homePage.openSalesApp();
    await homePage.openLeads();
    await homePage.verifyLeadPageLoaded();
    await leadpage.clickNew();
    await leadpage.createLead(
    leadData.salutation,
    leadData.lastName,
    leadData.company,
    leadData.leadStatus
);

    await leadpage.verifyLeadCreated();
});
test('Search Lead', async ({ page }) => {
    const homePage = new HomePage(page);
    const leadpage = new LeadPage(page);
    await page.pause();
    await homePage.verifyHomePageLoaded();
    console.log(await page.url());
    await page.pause();
    await homePage.clickAppLauncher();
    await homePage.openSalesApp();
    await homePage.openLeads();
    await homePage.verifyLeadPageLoaded();
    await page.pause();
    await leadpage.clickSearchButton();
    await leadpage.searchLead(searchData.leadName);

});
});