import { test as setup } from '@playwright/test';
import { execSync } from "node:child_process";
import { startDatabase } from './postgres-singleton.js';

setup('start postgres', async ({ }) => {
  setup.setTimeout(300_000);
  const url = await startDatabase()

  process.env.DATABASE_URL = url;

  // Make sure schema exists for tests
  console.log('Running prisma migrations...')
  execSync("pnpm prisma db push", { 
    env: {
      ...process.env,
      DATABASE_URL: url
    },
    stdio: "inherit" 
  });
});