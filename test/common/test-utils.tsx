import React, { ReactElement } from "react";
import { render, RenderOptions, screen } from "@testing-library/react";
import { expect } from "vitest";

// Custom render function that includes providers if needed
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => {
  // Add any global providers here (Theme, Context, etc.)
  const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
  };

  return render(ui, { wrapper: AllTheProviders, ...options });
};

/**
 * Test utility for external links with security attributes
 * Verifies link href, target="_blank", and rel="noopener noreferrer"
 *
 * @param linkElement - The link element to test
 * @param expectedHref - Expected href (string or regex)
 *
 * @example
 * ```typescript
 * const docsLink = screen.getByRole('link', { name: /docs/i })
 * expectExternalLink(docsLink, 'https://example.com')
 * ```
 */
export const expectExternalLink = (
  linkElement: HTMLElement,
  expectedHref: string | RegExp
) => {
  expect(linkElement).toBeInTheDocument();

  if (typeof expectedHref === "string") {
    expect(linkElement).toHaveAttribute("href", expectedHref);
  } else {
    expect(linkElement.getAttribute("href")).toMatch(expectedHref);
  }

  // Verify security attributes for external links
  expect(linkElement).toHaveAttribute("target", "_blank");
  expect(linkElement).toHaveAttribute("rel", "noopener noreferrer");
};

/**
 * Test utility for Next.js Image components
 * Verifies alt text, src, and optional dimensions
 *
 * @param altText - Alt text of the image
 * @param expectedSrc - Expected src attribute
 * @param expectedDimensions - Optional width and height attributes
 * @returns The found image element
 *
 * @example
 * ```typescript
 * expectNextImage('Logo', '/logo.svg', { width: '100', height: '50' })
 * ```
 */
export const expectNextImage = (
  altText: string,
  expectedSrc: string,
  expectedDimensions?: { width: string; height: string }
) => {
  const image = screen.getByAltText(altText);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", expectedSrc);

  if (expectedDimensions) {
    expect(image).toHaveAttribute("width", expectedDimensions.width);
    expect(image).toHaveAttribute("height", expectedDimensions.height);
  }

  return image;
};

/**
 * Test utility for UTM parameters in URLs
 * Verifies UTM tracking parameters are present in link href
 *
 * @param linkElement - The link element to test
 * @param expectedParams - Object with expected UTM parameters
 *
 * @example
 * ```typescript
 * const link = screen.getByRole('link')
 * expectUTMParameters(link, {
 *   source: 'website',
 *   medium: 'email',
 *   campaign: 'launch'
 * })
 * ```
 */
export const expectUTMParameters = (
  linkElement: HTMLElement,
  expectedParams: {
    source?: string;
    medium?: string;
    campaign?: string;
  }
) => {
  const href = linkElement.getAttribute("href");
  expect(href).toBeTruthy();

  if (expectedParams.source) {
    expect(href).toContain(`utm_source=${expectedParams.source}`);
  }
  if (expectedParams.medium) {
    expect(href).toContain(`utm_medium=${expectedParams.medium}`);
  }
  if (expectedParams.campaign) {
    expect(href).toContain(`utm_campaign=${expectedParams.campaign}`);
  }
};

// Re-export everything from @testing-library/react
export * from "@testing-library/react";

// Override render method
export { customRender as render };
