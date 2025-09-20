import { PrismaClient } from '@db/client.js'
import { withAccelerate } from '@prisma/extension-accelerate'

const createClient = () => {
  return new PrismaClient().$extends(withAccelerate());
}

export type DatabaseClient = NonNullable<ReturnType<typeof createClient>>;
declare global {
  var db: DatabaseClient | undefined;
}

export const db: DatabaseClient = globalThis.db ?? createClient()
// stash our DB in the global "this" so it is reused when possible
globalThis.db = db;
