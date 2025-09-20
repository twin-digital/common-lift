import { PostgreSqlContainer } from '@testcontainers/postgresql'


/**
 * Starts an ephemeral instance of Postgres in a Docker container which can be used during automated tests. Returns
 * a URL connection string for connecting to the database and a callback which will stop the database.
 **/
export const startPostgres = async (): Promise<{ 
  /**
   * Handle which will stop the database container.
   */
  stop: () => Promise<void>,

  /**
   * Connection string for the new database.
   */
  url: string 
}> => {
  const container = await new PostgreSqlContainer("postgres:16")
    .start();

  const url = container.getConnectionUri()

  return { 
    stop: async () => {
      await container.stop()
    },
    url
  };
}
