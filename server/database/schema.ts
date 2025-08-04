import { timestamp, text, pgTable, serial, date } from "drizzle-orm/pg-core"

// export const users = pgTable("users", {
// 	id: serial("id").primaryKey(),
// 	userName: text("username").notNull(),
// 	createdAt: timestamp("created_at").defaultNow(),
// 	email: text("email").notNull().unique(),
// 	password: text("password").notNull(),
// })

export const cars = pgTable("cars", {
	id: serial("id").primaryKey(),
	brand: text("name").notNull(),
	model: text("model").notNull(),
	firstRegistration: date().notNull(),
	createdAt: timestamp("created_at").defaultNow(),
	// owner: serial("owner_id").references(() => users.id, { onDelete: "cascade" }),
})
