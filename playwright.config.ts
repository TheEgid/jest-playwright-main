import { devices, PlaywrightTestConfig } from "@playwright/test";

// require('dotenv').config();

const config: PlaywrightTestConfig = {
  testDir: "./e2e",
  /* Maximum time one test can run for. */
  timeout: 2 * 60 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 10000,
  },
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: true,
  retries: 4,
  workers: 12,
  repeatEach: 4,
  fullyParallel: true,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "list",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    // headless: false,
    trace: "off",
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 1000,
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: "http://localhost:3007",
  },

  projects: [
    {
        name: "chromium",
        use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
        name: `chrome`,
        use: { browserName: `chromium`, viewport: { width: 1280, height: 1280 } },
    },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  webServer: {
    reuseExistingServer: true,
    command: "npm run serve",
    timeout: 120 * 1000,
    port: 3007,
  },
};

export default config;
