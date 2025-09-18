import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test("should load and display key elements", async ({ page }) => {
    // Navigate to the home page
    await page.goto("/");

    // Check page title
    await expect(page).toHaveTitle(/Create Next App/);

    // Verify Next.js logo is visible
    const nextLogo = page.getByAltText("Next.js logo");
    await expect(nextLogo).toBeVisible();

    // Verify main heading content
    await expect(page.getByText("Get started by editing")).toBeVisible();
    await expect(page.getByText("src/app/page.tsx")).toBeVisible();

    // Verify the "Read our docs" link is present and functional
    const docsLink = page.getByRole("link", { name: /read our docs/i });
    await expect(docsLink).toBeVisible();
    await expect(docsLink).toHaveAttribute(
      "href",
      expect.stringContaining("nextjs.org/docs")
    );
    await expect(docsLink).toHaveAttribute("target", "_blank");
  });

  test("should have working external links", async ({ page }) => {
    await page.goto("/");

    // Test docs link opens in new tab
    const docsLinkPromise = page.waitForEvent("popup");
    await page.getByRole("link", { name: /read our docs/i }).click();
    const docsPage = await docsLinkPromise;
    await expect(docsPage).toHaveURL(/nextjs\.org/);
    await docsPage.close();

    // Test deploy link opens in new tab
    const deployLinkPromise = page.waitForEvent("popup");
    await page.getByRole("link", { name: /deploy now/i }).click();
    const deployPage = await deployLinkPromise;
    await expect(deployPage).toHaveURL(/vercel\.com/);
    await deployPage.close();
  });

  test("should display footer links", async ({ page }) => {
    await page.goto("/");

    // Check that footer links are present
    await expect(page.getByRole("link", { name: /learn/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /examples/i })).toBeVisible();
    await expect(
      page.getByRole("link", { name: /go to nextjs\.org/i })
    ).toBeVisible();
  });

  test("should be responsive", async ({ page }) => {
    await page.goto("/");

    // Test desktop view
    await page.setViewportSize({ width: 1200, height: 800 });
    await expect(page.getByAltText("Next.js logo")).toBeVisible();

    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.getByAltText("Next.js logo")).toBeVisible();

    // In mobile view, the layout should still be functional
    await expect(page.getByText("Get started by editing")).toBeVisible();
  });
});
