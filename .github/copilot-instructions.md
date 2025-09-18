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

4. **Production Build**:
   ```bash
   npm run build
   ```
   - Uses Turbopack for optimized builds

5. **Production Server**:
   ```bash
   npm start
   ```
   - Requires successful build first

### Common Issues & Workarounds

- **Timing**: `npm install` can take 15-30 seconds, builds take 5-10 seconds
- **Never skip**: Always run `npm install` after pulling changes

## Project Layout & Architecture

### Directory Structure
```
/
├── .github/                 # GitHub configuration
├── .next/                  # Next.js build output (auto-generated)
├── docs/                   # Project documentation
│   ├── project-overview.md # Comprehensive project description
│   └── nextjs-readme.md    # Standard Next.js setup info
├── node_modules/           # Dependencies (auto-generated)
├── public/                 # Static assets
│   ├── *.svg              # Icons and logos
│   └── favicon.ico        # Site icon
├── src/                    # Application source code
│   └── app/               # Next.js App Router directory
│       ├── globals.css    # Global styles with TailwindCSS
│       ├── layout.tsx     # Root layout component
│       └── page.tsx       # Home page component
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
**Current State**: No automated CI/CD workflows detected
- No GitHub Actions workflows
- No test framework (Jest, Vitest, etc.)
- No deployment configuration
- Manual validation relies on local `npm run lint` and `npm run build`

### Non-Obvious Dependencies
- **@tailwindcss/postcss**: Required for TailwindCSS 4 processing
- **@eslint/eslintrc**: Compatibility layer for ESLint flat config
- **Turbopack**: Bundled with Next.js, enables `--turbopack` flag

## Development Process

### Available Scripts
```bash
npm run dev    # Development server with Turbopack
npm run build  # Production build with Turbopack  
npm run start  # Production server
npm run lint   # ESLint validation
```

### Documentation Inventory
1. **README.md**: Brief project introduction (7 lines)
2. **docs/project-overview.md**: Comprehensive feature/purpose documentation
3. **docs/nextjs-readme.md**: Standard Next.js project setup info
4. **This file**: Complete development onboarding guide

### Code Style & Standards
- TypeScript strict mode enforced
- Next.js ESLint rules with TypeScript support
- React 19 with App Router patterns
- TailwindCSS for styling (utility-first approach)
- Absolute imports via `@/*` path mapping

---

**Trust these instructions**: This information is validated and current. Only search further if specific technical details are missing or if errors occur that aren't documented here. The development server (`npm run dev`) is the most reliable workflow for active development.