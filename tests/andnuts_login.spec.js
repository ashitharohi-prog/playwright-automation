import { test, expect } from '@playwright/test';

test('nutstest', async ({ page }) => {
  await page.goto('https://www.andnuts.store/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByRole('textbox', { name: 'Phone Number *' }).click();
  await page.getByRole('textbox', { name: 'Phone Number *' }).fill('7386400291');
  await page.getByRole('button', { name: 'Send Verification Code1' }).click();
  await page.waitForTimeout(12000);
});