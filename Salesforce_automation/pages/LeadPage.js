import { expect } from '@playwright/test'

export class LeadPage {
    constructor(page) {
        this.page = page;

         this.myLeadsHeading = page.getByText('My Leads');
        this.newButton = page.getByRole('button', { name: 'New' });
        this.salutationDropdown = page.getByRole('combobox', { name: 'salutation' });
        this.lastName = page.getByPlaceholder('Last Name');
        this.companyName = page.locator('[name="Company"]');
        this.leadStatusDropdown = page.getByRole('combobox', { name: 'Lead Status' });
        this.saveButton = page.getByRole('button', {
    name: 'Save',
    exact: true
});
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.searchBox = page.getByPlaceholder('Search...');
        }
    async verifyLeadPageLoaded() {
        await expect(this.myLeadsHeading).toBeVisible();
    }
    async clickNew() {
        await this.newButton.click();
    }
    async clickSalutationDropdown() {
        await this.salutationDropdown.click();
    }
    async selectSalutation(salutation) {
    await this.clickSalutationDropdown();
    await this.page.getByRole('option', { name: salutation }).click();
    }   
    async enterLastName(lastName) {
    await this.lastName.fill(lastName);
    }
    async enterCompany(companyName) {
        await this.companyName.fill(companyName);
    }
    async clickLeadStatusDropdown() {
        await this.leadStatusDropdown.click();
    }
    async selectLeadStatus(leadStatus) {
    await this.clickLeadStatusDropdown();
    await this.page.getByRole('option', { name: leadStatus }).click();
    }
    async save() {
        await this.saveButton.click();
    }
    async createLead(salutation, lastName, company, leadStatus) {
    await this.selectSalutation(salutation);
    await this.enterLastName(lastName);
    await this.enterCompany(company);
    await this.selectLeadStatus(leadStatus);
    await this.save();
}
async verifyLeadCreated() {
    await expect(this.page).toHaveURL(/\/Lead\//);
}
async clickSearchButton() {
    await this.searchButton.click();
}
   async searchLead(leadName) {
    await expect(this.searchBox).toBeVisible();
    await this.searchBox.fill(leadName);
}
      async openLead(leadName) {
    await this.page.getByText(Kondru, { exact: true }).click();
}  
    
}