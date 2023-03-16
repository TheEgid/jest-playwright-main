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
  testPathIgnorePatterns: ["/e2e/"],
};

export default config;
