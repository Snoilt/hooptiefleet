import { drizzle } from "drizzle-orm/node-postgres"
import pkg from "pg"
import * as schema from "./schema" // Importiert alle Tables, digga

const { Pool } = pkg

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
})

export const database = drizzle(pool, { schema })
