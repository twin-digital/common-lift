# Playwright Setup

## Local Development

After cloning the repository and installing dependencies with `pnpm install`, you'll need to manually install Playwright browsers for end-to-end testing:

```bash
pnpm run playwright:install
```

This command installs all required browsers and system dependencies for Playwright testing.

## Why This Change?

Previously, Playwright browsers were automatically installed via a `postinstall` script. This caused deployment failures on platforms like Vercel, which don't need the browsers but would fail during the installation process.

Now:
- **Local development**: Developers install browsers manually when needed
- **CI/CD**: GitHub Actions automatically install and cache browsers efficiently in a workspace-relative directory
- **Deployment**: No browser installation attempts, preventing deployment failures

## Running E2E Tests

After installing the browsers, you can run the end-to-end tests:

```bash
# Run tests headlessly
pnpm run test:e2e

# Run tests with UI
pnpm run test:e2e:ui

# Run tests in debug mode
pnpm run test:e2e:debug
