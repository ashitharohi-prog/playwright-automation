import { expect } from '@playwright/test';

export class HomePage {

    constructor(page) {
        this.page = page;

        this.setupTitle = page.locator('[title="Setup"]');
        this.appLauncher = page.locator('[title="App Launcher"]');
        this.searchBox = page.getByPlaceholder('Search apps and items...');
        this.salesOption = page.locator('[data-label="Sales"]');
        this.leadsTab = page.locator('[title="Leads"]');
        this.myLeadsHeading = page.getByText('My Leads');
    }

    async verifyHomePageLoaded() {
        await expect(this.setupTitle).toBeVisible();
    }

    async clickAppLauncher() {
    await this.appLauncher.click();
    await expect(this.searchBox).toBeVisible();
    }
    async searchApp(appName) {
        await this.searchBox.fill('Sales');
    }
    async clickSalesOption() {
        await this.salesOption.click();
    }
    async openSalesApp() {
        await this.searchApp('Sales');
        await this.clickSalesOption();
    }
    async clickLeadsTab() {
        await this.leadsTab.click();
    }
    async openLeads() {
        await this.clickLeadsTab();
    }
    async verifyLeadPageLoaded() {
        await expect(this.myLeadsHeading).toBeVisible();
    }
    async selectSalutation() {
    await this.clickSalutationDropdown();
    await this.page.getByRole('option', { name: 'Ms.' }).click();
    }
}