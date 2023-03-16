import { PlaywrightTestConfig, devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  use: {
    trace: "off",
  },
  projects: [
    {
      name: "Firefox",
      use: { ...devices["Desktop Firefox"] },
    },
  ],
};

export default config;
