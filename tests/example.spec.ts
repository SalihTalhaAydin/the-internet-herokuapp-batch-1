import { test, expect } from '@playwright/test';

test.describe('The Internet Herokuapp Tests', () => {
  test('should load the homepage', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/The Internet/);
    await expect(page.locator('h1')).toContainText('Welcome to the-internet');
  });

  test('should navigate to A/B Testing page', async ({ page }) => {
    await page.goto('/');
    await page.click('a[href="/abtest"]');
    await expect(page).toHaveURL(/.*abtest/);
    await expect(page.locator('h3')).toContainText('A/B Test');
  });

  test('should navigate to Add/Remove Elements page', async ({ page }) => {
    await page.goto('/');
    await page.click('a[href="/add_remove_elements/"]');
    await expect(page).toHaveURL(/.*add_remove_elements/);
    await expect(page.locator('h3')).toContainText('Add/Remove Elements');
  });
});