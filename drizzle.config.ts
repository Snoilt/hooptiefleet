import { defineConfig } from "drizzle-kit"

export default defineConfig({
	dialect: "postgresql",
	schema: "./server/database/schema.ts",
	out: "./server/database/migrations",
	dbCredentials: {
		url: "postgresql://admin:dookiefard@localhost:5432/hooptiedb",
	},
})
