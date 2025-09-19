import { describe, it, expect, beforeEach } from "vitest";
import {
  render,
  screen,
  expectExternalLink,
  expectNextImage,
  expectUTMParameters,
} from "@test/common";
import Home from "./page.js";

describe("Home Page", () => {
  beforeEach(() => {
    render(<Home />);
  });

  describe("Next.js Logo", () => {
    it("should display the Next.js logo", () => {
      expectNextImage("Next.js logo", "/next.svg", {
        width: "180",
        height: "38",
      });
    });

    it("should display the Next.js logo with correct attributes", () => {
      const logo = expectNextImage("Next.js logo", "/next.svg", {
        width: "180",
        height: "38",
      });
      // Note: priority is handled internally by Next.js Image component
      expect(logo).toBeInTheDocument();
    });
  });

  describe("Next.js Documentation Link", () => {
    it("should have a link to Next.js docs", () => {
      const docsLink = screen.getByRole("link", { name: /read our docs/i });
      expectExternalLink(docsLink, /https:\/\/nextjs\.org\/docs/);
    });

    it("should have proper UTM parameters in docs link", () => {
      const docsLink = screen.getByRole("link", { name: /read our docs/i });
      expectUTMParameters(docsLink, {
        source: "create-next-app",
        medium: "appdir-template-tw",
        campaign: "create-next-app",
      });
    });
  });

  describe("Page Structure", () => {
    it("should have the main content area", () => {
      const main = screen.getByRole("main");
      expect(main).toBeInTheDocument();
    });

    it("should display getting started instructions", () => {
      expect(screen.getByText(/get started by editing/i)).toBeInTheDocument();
      expect(screen.getByText("src/app/page.tsx")).toBeInTheDocument();
    });

    it("should display the save and see changes message", () => {
      expect(
        screen.getByText(/save and see your changes instantly/i)
      ).toBeInTheDocument();
    });
  });

  describe("Additional Links", () => {
    it("should have a deploy link to Vercel", () => {
      const deployLink = screen.getByRole("link", { name: /deploy now/i });
      expectExternalLink(deployLink, /https:\/\/vercel\.com\/new/);
    });

    it("should have footer links for Learn, Examples, and Go to nextjs.org", () => {
      const learnLink = screen.getByRole("link", { name: /learn/i });
      const examplesLink = screen.getByRole("link", { name: /examples/i });
      const nextjsLink = screen.getByRole("link", {
        name: /go to nextjs\.org/i,
      });

      expectExternalLink(learnLink, /https:\/\/nextjs\.org\/learn/);
      expectExternalLink(examplesLink, /https:\/\/vercel\.com\/templates/);
      expectExternalLink(nextjsLink, /https:\/\/nextjs\.org/);
    });
  });

  describe("Images", () => {
    it("should display Vercel logo in deploy button", () => {
      expectNextImage("Vercel logomark", "/vercel.svg");
    });

    it("should display footer icons", () => {
      expectNextImage("File icon", "/file.svg");
      expectNextImage("Window icon", "/window.svg");
      expectNextImage("Globe icon", "/globe.svg");
    });
  });
});
