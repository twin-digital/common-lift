import { test as teardown } from '@playwright/test';
import { stopDatabase } from './postgres-singleton.js';

teardown('stop postgres', async () => {
  await stopDatabase()
});