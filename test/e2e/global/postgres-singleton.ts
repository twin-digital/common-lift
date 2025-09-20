import { startPostgres } from "../../common/db-control.js"

let db: Awaited<ReturnType<typeof startPostgres>> | undefined

export const startDatabase = async (): Promise<string> => {
  if (db) {
    console.log('Reusing existing Postgres container.')
    return db.url
  }

  console.log('Starting postgres...')
  db = await startPostgres()
  return db.url
}

export const stopDatabase = async (): Promise<void> => {
  if (db) {
    console.log('Stopping postgres...')
    await db.stop()
    db = undefined
  }
}
