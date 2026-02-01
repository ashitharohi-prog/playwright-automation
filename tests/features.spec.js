import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.andnuts.store/');
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: 'Shop Now' }).click();
  await page.waitForTimeout(3000);
  await page.getByRole('combobox').selectOption('price-asc');
  await page.waitForTimeout(3000);
  await page.getByRole('radio', { name: 'Flavored Cashews' }).check();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Add to Cart' }).first().click();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: 'Add to Cart' }).nth(1).click();
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: 'Shopping Cart' }).click();
  await page.waitForTimeout(6000);
  const checkoutBtn = page.getByRole('link', { name: 'Proceed to Checkout' });
  await checkoutBtn.scrollIntoViewIfNeeded();
  await checkoutBtn.click();
  await expect(page.getByText('Phone Number *')).toBeVisible();
  await page.getByRole('textbox', { name: 'Phone Number *' }).click();
  const phoneInput = page.getByRole('textbox', { name: 'Phone Number *' });
  await phoneInput.fill('7386400291');
  await phoneInput.blur(); // 🔑 important

const sendBtn = page.getByText(/send verification/i);
//await expect(sendBtn).toBeVisible({ timeout: 10000 });
//await expect(sendBtn).toBeEnabled({ timeout: 10000 });
//await sendBtn.click();


});
