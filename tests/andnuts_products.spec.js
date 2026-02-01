import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.andnuts.store/');
  await page.waitForTimeout(3000);
  await page.getByRole('banner').getByRole('link', { name: 'Home' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: 'Shop Now' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Add to Cart' }).first().click();
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: 'Shopping Cart' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: 'Proceed to Checkout' }).click();
  await page.waitForTimeout(3000);
});