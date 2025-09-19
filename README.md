# CommonLift

CommonLift is a lightweight platform for **coordinating and tracking outreach to elected officials**. It helps
organizations ensure their members make consistent, distributed contact with decision-makers—turning individual calls
and emails into visible, collective impact.

For more details, see the [full project overview](./docs/project-overview.md).

## Development

This project uses:

- **Next.js 15** with React 19 and TypeScript
- **TailwindCSS** for styling
- **Vitest** for testing

### Getting Started

```bash
# Install dependencies
pnpm install

# For end-to-end testing, install Playwright browsers (one-time setup)
pnpm run playwright:install

# Start development server
pnpm dev

# Run unit tests
pnpm test

# Run e2e tests
pnpm test:e2e

# Build for production
pnpm build
```

For detailed development information, see [docs/DEVELOPER.md](./docs/DEVELOPER.md).
