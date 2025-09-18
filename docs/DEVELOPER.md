# CommonLift: Developer Guide

This guide is meant to assist developers working on the CommonLift application. For general information about the
project, see the [full project overview](./docs/project-overview.md).

## Testing

This project uses [Vitest](https://vitest.dev/) for testing. The test setup includes:

- Unit testing for utility functions
- Component testing with React Testing Library
- TypeScript support for tests

### Test Organization

- `src/**/*.test.tsx?`
  - Module tests
  - Located alongside their source files with the `.test.ts` or `.test.tsx` extension
- `test/common/`
  - Shared test utilities
  - Contains utilities used across tests of different types (unit, end-to-end, etc.)
  - Can be imported via `'@test/common'`, or `'@test/common/test-module'`
- `test/vitest/`
  - Unit test utilities and helpers
  - Contains files used only for vitest unit tests
  - `test/vitest/setup.ts` - Global test configuration and setup

### Running Tests

```bash
# Run tests in watch mode
npm test

# Run tests once
npm run test:run

# Run tests in watch mode (explicit)
npm run test:watch
```

### Writing Tests

The test environment is configured with:

- `jsdom` for DOM simulation
- `@testing-library/react` for component testing
- `@testing-library/jest-dom` for additional matchers
