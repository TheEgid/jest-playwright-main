import type { Config } from "jest";

const config: Config = {
  detectOpenHandles: true,
  silent: false,
  forceExit: true,
  verbose: true,
  clearMocks: true,
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
  rootDir: ".",
  modulePaths: ["<rootDir>"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  preset: "jest-playwright-preset",
  testEnvironmentOptions: {
    "jest-playwright": {
      launchOptions: {
        headless: true,
      },
      browsers: ["chromium"],
    },
  },
};

export default config;
