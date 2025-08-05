import { timestamp, text, pgTable, serial, date, integer } from "drizzle-orm/pg-core"

export const users = pgTable("users", {
	id: serial("id").primaryKey(),
	createdAt: timestamp("created_at").defaultNow(),
	email: text("email").notNull().unique(),
	password: text("password").notNull(),
})

export const cars = pgTable("cars", {
	id: serial("id").primaryKey(),
	brand: text("name").notNull(),
	model: text("model").notNull(),
	firstRegistration: date().notNull(),
	vin: text("vin").notNull().unique(),
	createdAt: timestamp("created_at").defaultNow(),
	// owner: serial("owner_id").references(() => users.id, { onDelete: "cascade" }),
})

export const services = pgTable("services", {
	id: serial("id").primaryKey(),
	carId: serial("car_id").references(() => cars.id, { onDelete: "cascade" }),
	serviceType: text("service_type").notNull(),
	serviceDate: date("service_date").notNull(),
	description: text("description").notNull(),
	mileage: integer("mileage").notNull(),
	createdAt: timestamp("created_at").defaultNow(),
})
