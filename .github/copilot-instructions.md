# CommonLift - Copilot Instructions

## Project Overview

**CommonLift** is a lightweight web platform for **coordinating and tracking outreach to elected officials**. It helps organizations ensure their members make consistent, distributed contact with decision-makers, turning individual calls and emails into visible, collective impact.

### Key Features (MVP Scope)

- **Campaign creation**: Organizers define issues, set member goals, add scripts/talking points
- **Target officials**: Database with filters (office, jurisdiction, party, etc.)
- **Public join links**: Easy volunteer onboarding without private invites
- **Assignment engine**: Volunteers get "next best official" based on location/logic
- **Call logging**: Record actions with notes and categorized responses
- **Dashboards**: Activity and outcome rollups by campaign, official, and volunteer
- **Integrity checks**: Email verification, CAPTCHA, rate limits

### Repository Stats

- **Size**: Small, early-stage (~15 source files)
- **Type**: Full-stack web application
- **Languages**: TypeScript (95%), CSS (3%), JavaScript (2%)
- **Framework**: Next.js 15.5.3 with React 19.1.0
- **Target Runtime**: Node.js 22+ in browser and server environments

## Code Styling and Standards

- TypeScript strict mode enforced
- **ES modules (ESM)**: Project uses `"type": "module"` with `import`/`export` syntax throughout
- Key code styles: prefer single quotes, no semicolons, arrow functions instead of `function` keyword
- Include TSDoc for all functions, types, classes, etc.
- Next.js ESLint rules with TypeScript support
- React 19 with App Router patterns
- TailwindCSS for styling (utility-first approach)
- Absolute imports via `@/*` path mapping

## Build & Validation Instructions

### Prerequisites

- **Node.js**: 22+ (specified in .nvmrc)
- **pnpm**: 8+ (specified in package.json engines)

### Essential Commands (Always Follow This Order)

1. **Bootstrap** (required first step):
   ```bash
   pnpm install
   ```
2. **Development Server** (primary development workflow):

   ```bash
   pnpm dev
   ```

   - Uses Turbopack for fast compilation
   - Serves on http://localhost:3000
   - Hot reload enabled

3. **Linting** (run before commits):

   ```bash
   pnpm lint
   ```

   - Uses ESLint with Next.js TypeScript configuration
   - Zero tolerance - must pass with no errors

4. **Testing** (recommended development workflow):

   ```bash
   # Unit/Component Tests
   pnpm test          # Run tests once

   # End-to-End Tests
   pnpm test:e2e  # Run e2e tests (requires dev server)
   ```

   - Uses Vitest with React Testing Library for unit/component tests
   - Uses Playwright for end-to-end testing

5. **Production Build**:

   ```bash
   pnpm build
   ```

   - Uses Turbopack for optimized builds

6. **Production Server**:
   ```bash
   pnpm start
   ```
   - Requires successful build first

### Testing Guidelines

#### Test File Placement

- **Unit tests**: Place `.test.ts` or `.test.tsx` files alongside the source code they test
- **End-to-end tests**: Place `.spec.ts` files in `test/e2e/` directory
- **Shared test utilities**: Place in `test/common/` directory

#### Test Environment

- **Unit/Component**: Vitest with jsdom environment
- **End-to-End**: Playwright with Chrome, Firefox, Safari
- **Testing utilities**: React Testing Library with Jest DOM matchers
- **Import aliases**: Use `@/` for source code, `@test/` for test utilities
- **Global setup**: Configured in `test/common/setup.ts`

#### Validation Requirements

When making code changes, **always validate** using the full test suite:

1. **Linting**: `pnpm lint` - Must pass with no errors
2. **Unit Tests**: `pnpm test` - All tests must pass
3. **End-to-End Tests**: `pnpm test:e2e` - Full integration testing
4. **Build**: `pnpm build` - Must compile successfully

Run these commands iteratively during development to catch issues early.

### Common Issues & Workarounds

- **Timing**: `pnpm install` can take 15-30 seconds, builds take 5-10 seconds
- **Never skip**: Always run `pnpm install` after pulling changes

## Project Layout & Architecture

### Directory Structure

```
/
├── .github/                # GitHub configuration
├── .next/                  # Next.js build output (auto-generated)
├── docs/                   # Project documentation
├── node_modules/           # Dependencies (auto-generated)
├── public/                 # Static assets (images, fonts, etc.)
├── src/                    # Application source code
│   └── app/                # Next.js App Router directory
│       ├── globals.css     # Global styles with TailwindCSS
│       ├── layout.tsx      # Root layout component
│       └── page.tsx        # Home page component
├── test/                   # Test utilities and configuration
│   ├── common/             # Shared test utilities used by all test types
│   ├── e2e/                # End-to-end tests (Playwright)
│   └── vitest/             # Vitest-specific test files
│       └── setup.ts        # Global vitest configuration
├── eslint.config.mjs      # ESLint configuration
├── next.config.ts         # Next.js configuration
├── package.json           # Project dependencies and scripts
├── postcss.config.mjs     # PostCSS configuration for TailwindCSS
└── tsconfig.json          # TypeScript configuration
```

### Key Configuration Files

- **package.json**: Dependencies and scripts
  - React 19.1.0, Next.js 15.5.3, TypeScript 5+
  - TailwindCSS 4 for styling
  - ESLint for code quality
- **tsconfig.json**: TypeScript with Next.js plugin, path aliases (`@/*`)
- **eslint.config.mjs**: Next.js core web vitals + TypeScript rules
- **postcss.config.mjs**: TailwindCSS PostCSS integration
- **next.config.ts**: Empty Next.js configuration (default setup)

### Architecture

- **Framework**: Next.js 15 with App Router (src/app/)
- **Styling**: TailwindCSS 4 with custom theme variables
- **Fonts**: Geist Sans & Mono from Google Fonts via next/font
- **Build Tool**: Turbopack (Next.js' Rust-based bundler)
- **TypeScript**: Strict mode enabled with modern ES2017 target

### Non-Obvious Dependencies

- **@tailwindcss/postcss**: Required for TailwindCSS 4 processing
- **@eslint/eslintrc**: Compatibility layer for ESLint flat config
- **Turbopack**: Bundled with Next.js, enables `--turbopack` flag

## CI/CD & Validation

**Current State**: Automated CI/CD workflows with testing and release management

- **CI Workflow**: Runs on all branches - linting, testing, and building
- **Release Workflow**: Automated version management and publishing via Changesets
- Vitest + React Testing Library configured for unit/component testing
- Playwright configured for end-to-end testing
- Automated validation via `pnpm lint`, `pnpm build`, `pnpm test`, and `pnpm test:e2e`

### Version Management

- **Changesets**: Automated version management and changelog generation
- **Release Process**: Automated via GitHub Actions when changes are merged to `main`
- **Manual Commands**: `pnpm changeset` to create changesets for new features/fixes*. It helps organizations ensure their members make consistent, distributed contact with decision-makers, turning individual calls and emails into visible, collective impact.

## Development Process

### Available Scripts

```bash
pnpm dev          # Development server with Turbopack
pnpm build        # Production build with Turbopack
pnpm start        # Production server
pnpm lint         # ESLint validation

# Unit/Component Testing
pnpm test         # Run unit tests once
pnpm test:run     # Run unit tests once (explicit)
pnpm test:watch   # Run unit tests in watch mode

# End-to-End Testing
pnpm test:e2e     # Run e2e tests
pnpm test:e2e:ui  # Run e2e tests with UI mode
pnpm test:e2e:debug # Run e2e tests in debug mode

# Version Management (Changesets)
pnpm changeset    # Create a changeset for new changes
pnpm changeset:status # Check changeset status
pnpm changeset:version # Apply version bumps (automated)
pnpm changeset:publish # Publish release (automated)
```

### Documentation Inventory

1. **README.md**: Brief project introduction (7 lines)
2. **docs/project-overview.md**: Comprehensive feature/purpose documentation
3. **docs/nextjs-readme.md**: Standard Next.js project setup info
4. **docs/DEVELOPER.md**: Comprehensive developer documentation
5. **.github/copilot-instructions.md**: (_This File_) Specific instructions for AI agents
6. **.changeset/README.md**: Changesets workflow and version management guide

---

**Trust these instructions**: This information is validated and current. Only search further if specific technical details are missing or if errors occur that aren't documented here. The development server (`npm run dev`) is the most reliable workflow for active development.
