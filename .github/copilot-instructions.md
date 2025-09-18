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
- **Target Runtime**: Node.js 20+ in browser and server environments

## Code Guidelines

- All code must transpile cleanly using Typescript strict mode
- Key code styles: prefer single quotes, no semicolons, arrow functions instead of `function` keyword
- Include TSDoc for all functions, types, classes, etc.

## Build & Validation Instructions

### Prerequisites

- **Node.js**: 20.19.5+ (verified working)
- **npm**: 10.8.2+ (verified working)

### Essential Commands (Always Follow This Order)

1. **Bootstrap** (required first step):
   ```bash
   npm install
   ```
2. **Development Server** (primary development workflow):

   ```bash
   npm run dev
   ```

   - Uses Turbopack for fast compilation
   - Serves on http://localhost:3000
   - Hot reload enabled

3. **Linting** (run before commits):

   ```bash
   npm run lint
   ```

   - Uses ESLint with Next.js TypeScript configuration
   - Zero tolerance - must pass with no errors

4. **Testing** (recommended development workflow):

   ```bash
   # Unit/Component Tests
   npm test          # Run tests once

   # End-to-End Tests
   npm run test:e2e  # Run e2e tests (requires dev server)
   ```

   - Uses Vitest with React Testing Library for unit/component tests
   - Uses Playwright for end-to-end testing

5. **Production Build**:

   ```bash
   npm run build
   ```

   - Uses Turbopack for optimized builds

6. **Production Server**:
   ```bash
   npm start
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

### Common Issues & Workarounds

- **Timing**: `npm install` can take 15-30 seconds, builds take 5-10 seconds
- **Never skip**: Always run `npm install` after pulling changes

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

### CI/CD & Validation

**Current State**: Basic testing setup, no automated CI/CD workflows

- No GitHub Actions workflows
- Vitest + React Testing Library configured for unit/component testing
- No deployment configuration
- Manual validation relies on `npm run lint`, `npm test`, and `npm run build`

### Non-Obvious Dependencies

- **@tailwindcss/postcss**: Required for TailwindCSS 4 processing
- **@eslint/eslintrc**: Compatibility layer for ESLint flat config
- **Turbopack**: Bundled with Next.js, enables `--turbopack` flag

## Development Process

### Available Scripts

```bash
npm run dev          # Development server with Turbopack
npm run build        # Production build with Turbopack
npm run start        # Production server
npm run lint         # ESLint validation

# Unit/Component Testing
npm test             # Run unit tests once
npm run test:run     # Run unit tests once (explicit)
npm run test:watch   # Run unit tests in watch mode

# End-to-End Testing
npm run test:e2e     # Run e2e tests
npm run test:e2e:ui  # Run e2e tests with UI mode
npm run test:e2e:debug # Run e2e tests in debug mode
```

### Documentation Inventory

1. **README.md**: Brief project introduction (7 lines)
2. **docs/project-overview.md**: Comprehensive feature/purpose documentation
3. **docs/nextjs-readme.md**: Standard Next.js project setup info
4. **docs/DEVELOPER.md**: Comprehensive developer documentation
5. **.github/copilot-instructions.md**: (_This File_) Specific instructions for AI agents

### Code Style & Standards

- TypeScript strict mode enforced
- Next.js ESLint rules with TypeScript support
- React 19 with App Router patterns
- TailwindCSS for styling (utility-first approach)
- Absolute imports via `@/*` path mapping

---

**Trust these instructions**: This information is validated and current. Only search further if specific technical details are missing or if errors occur that aren't documented here. The development server (`npm run dev`) is the most reliable workflow for active development.
