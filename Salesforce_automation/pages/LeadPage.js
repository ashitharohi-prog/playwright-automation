import { expect } from '@playwright/test'

export class LeadPage {
    constructor(page) {
        this.page = page;

         this.myLeadsHeading = page.getByText('My Leads');
        this.newButton = page.getByRole('button', { name: 'New' });
        this.salutationDropdown = page.getByRole('combobox', { name: 'salutation' });
        this.lastName = page.getByPlaceholder('Last Name');
        this.companyName = page.locator('[name="Company"]');
        this.leadStatusDropdown = page.getByRole('combobox', { id: 'combobox-button-1465'});
        this.clickSave = page.getByRole('button', { name: 'SaveEdit '});
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
    async selectSalutation() {
    await this.clickSalutationDropdown();
    await this.page.waitForTimeout(3000);
    await this.page.getByRole('option', { name: 'Ms.' }).click();
    }
    async enterLastName(lastName) {
    await this.lastName.fill(lastName);
    }
    async enterCompany(companyName) {
        await this.companyName.fill(companyName);
    }
    async slectLeadStatus() {
    await this.clickLeadStatusDropdown();
    await this.page.waitForTimeout(3000);
    await this.page.getByRole('option', { name: 'Open - Not Contacted' }).click();
    }
    async save() {
        await this.clickSave.click();
    }
        
    
}