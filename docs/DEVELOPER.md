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
pnpm test                 # Run tests once
pnpm test:run             # Run tests once (explicit)
pnpm test:watch           # Run tests in watch mode

# End-to-End Tests (Playwright)
pnpm test:e2e             # Run e2e tests
pnpm test:e2e:ui          # Run e2e tests with UI mode
pnpm test:e2e:debug       # Run e2e tests in debug mode
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
- Start your dev server before running e2e tests: `pnpm dev`

## Version Management & Releases

This project uses [Changesets](https://github.com/changesets/changesets) for version management and automated releases.

### Creating Changes

When you make changes that should be included in the next release:

```bash
# Create a changeset describing your changes
pnpm changeset
```

This will prompt you to:
1. Select which packages to bump (choose `common-lift`)
2. Select the type of change:
   - **patch** (0.0.X): Bug fixes, small improvements
   - **minor** (0.X.0): New features, backwards compatible changes
   - **major** (X.0.0): Breaking changes
3. Write a brief summary of the changes

### Release Process

The release process is automated:

1. **Development**: Create changesets for your changes during development
2. **Version PR**: When merged to `main`, Changesets automatically creates a "Version Packages" PR
3. **Release**: When the Version PR is merged, the new version is automatically published

### Manual Commands

```bash
# Check changeset status
pnpm changeset:status

# Apply version bumps (normally automated)
pnpm changeset:version

# Publish release (normally automated)
pnpm changeset:publish
```

For more details, see [`.changeset/README.md`](.changeset/README.md).
