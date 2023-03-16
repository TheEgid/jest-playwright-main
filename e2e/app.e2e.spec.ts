import { test, expect } from '@playwright/test';

test('ReactApp e2e test', async ({ page }) => {
  await page.goto('http://localhost:3007/');

  // Take a screenshot and compare with golden file.
  // expect(await page.screenshot()).toMatchSnapshot('01_home.png');

  // Expect some text to be visible on the page.
  await expect(page.locator('text=Hello, John!').first()).toBeVisible();

  // Click the button.
  await page.click('text=Click Me');

  // // Take a screenshot and compare with golden file.
  // expect(await page.screenshot()).toMatchSnapshot('02_clicked.png');

  // Expect some text to be visible on the page.
  await expect(page.locator('text=Have a nice day!').first()).toBeVisible();
});
