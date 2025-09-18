# CommonLift: Developer Guide

This guide is meant to assist developers working on the CommonLift application. For general information about the
project, see the [full project overview](./docs/project-overview.md).

## Testing

This project uses:

- [Vitest](https://vitest.dev/) for unit/component testing
- [Playwright](https://playwright.dev/) for end-to-end testing.

### Test Organization

- `src/**/*.test.tsx?`
  - Module tests
  - Located alongside their source files with the `.test.ts` or `.test.tsx` extension
- `test/common/`
  - Shared test utilities and configuration
  - Contains utilities used across different test types (unit, end-to-end)
  - Can be imported via `'@test/common'` or `'@test/common/test-module'`
- `test/e2e/`
  - End-to-end tests using Playwright
  - Tests full user workflows and integration scenarios
  - Files should use `.spec.ts` extension
- `test/vitest/`
  - Unit test utilities and helpers
  - Contains files used only for vitest unit tests
  - `test/vitest/setup.ts` - Global test configuration and setup

### Running Tests

```bash
# Unit/Component Tests (Vitest)
npm test                 # Run tests once
npm test:run             # Run tests once (explicit)
npm run test:watch       # Run tests in watch mode

# End-to-End Tests (Playwright)
npm run test:e2e         # Run e2e tests
npm run test:e2e:ui      # Run e2e tests with UI mode
npm run test:e2e:debug   # Run e2e tests in debug mode
```

### Writing Tests

**Unit/Component Tests (Vitest):**
The test environment is configured with:

- `jsdom` for DOM simulation
- `@testing-library/react` for component testing
- `@testing-library/jest-dom` for additional matchers

**End-to-End Tests (Playwright):**

- Tests run against the actual application in browsers
- Supports Chrome, Firefox, and Safari
- Start your dev server before running e2e tests: `npm run dev`
