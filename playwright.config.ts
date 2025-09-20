import { defineConfig, devices } from "@playwright/test";

const isCI = !!process.env.CI;
const baseURL = process.env.PW_BASE_URL || "http://localhost:3000";

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: "./test/e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  globalTimeout: 3_600_000,
  retries: isCI ? 2 : 0,
  workers: isCI ? 1 : undefined,

  /* Reporters */
  reporter: [
    ["line"],
    ["junit", { outputFile: ".out/test-results/results.xml" }],
  ],

  /* Shared settings for all the projects below. */
  use: {
    baseURL,
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'setup',
      teardown: 'teardown',
      testMatch: 'global/*.setup.ts',
    },
    {
      name: 'teardown',
      testMatch: 'global/*.teardown.ts',
    },
    {
      dependencies: ['setup'],
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      dependencies: ['setup'],
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      dependencies: ['setup'],
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],

  /* Run your local dev server before starting the tests */
  webServer: {
    command: "pnpm dev",
    url: baseURL,
    reuseExistingServer: !isCI,
  },

  /* Move outputs into .out subdirectory */
  outputDir: ".out/test-results",
  snapshotDir: ".out/snapshots",
});
