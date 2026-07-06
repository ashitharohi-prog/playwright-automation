import { expect } from '@playwright/test';
export class LoginPage{
    constructor(page) {
        this.page=page;
        this.usernameInput = page.locator('[id=username]');
        this.passwordInput = page.locator('[id=password]');
        this.loginButton = page.locator('[id="Login"]');
        this.setupTitle = this.page.locator('[title="Setup"]');
    }
    async navigateToLoginPage() {
    await this.page.goto('https://brave-goat-bjzglj-dev-ed.trailblaze.my.salesforce.com/');
}
 async enterUsername(username) {
        await this.usernameInput.fill('ashitharohi@brave-goat-bjzglj.com');
 }
 async enterPassword(password) {
        await this.passwordInput.fill('Milie@0210');
 }
 async clickLogin() {
        await this.loginButton.click();
    }
     async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
     }
    async verifyLoginSuccessful() {
    await expect(this.setupTitle).toBeVisible();
}

}