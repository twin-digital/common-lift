import { Page, expect } from "@playwright/test";

/**
 * Common utilities for Playwright e2e tests
 */

/**
 * Navigate to a page and verify it loads successfully
 */
export async function navigateAndVerify(page: Page, path: string = "/") {
  await page.goto(path);
  // Wait for the page to be in a good state
  await page.waitForLoadState("networkidle");
}

/**
 * Test external link opens in new tab and has expected domain
 */
export async function testExternalLink(
  page: Page,
  linkSelector: string,
  expectedDomain: string
) {
  const popupPromise = page.waitForEvent("popup");
  await page.click(linkSelector);
  const popup = await popupPromise;
  await expect(popup).toHaveURL(new RegExp(expectedDomain));
  await popup.close();
}

/**
 * Verify page is responsive across different viewport sizes
 */
export async function testResponsiveness(
  page: Page,
  desktopSize = { width: 1200, height: 800 },
  mobileSize = { width: 375, height: 667 }
) {
  // Test desktop
  await page.setViewportSize(desktopSize);
  await page.waitForLoadState("networkidle");

  // Test mobile
  await page.setViewportSize(mobileSize);
  await page.waitForLoadState("networkidle");
}

/**
 * Take a screenshot with a descriptive name
 */
export async function takeScreenshot(page: Page, name: string) {
  await page.screenshot({
    path: `test-results/screenshots/${name}.png`,
    fullPage: true,
  });
}
