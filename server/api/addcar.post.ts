import { database } from "../database/client"
import { cars } from "../database/schema"

export default defineEventHandler(async (event) => {
	const body = await readBody<{
		vin: string
		brand: string
		model: string
		firstRegistration: string
	}>(event)

	if (!body.vin || !body.brand || !body.model || !body.firstRegistration) {
		throw createError({ statusCode: 400, statusMessage: "Fehlende Daten, digga!" })
	}

	const inserted = await database
		.insert(cars)
		.values({
			vin: body.vin,
			brand: body.brand,
			model: body.model,
			firstRegistration: new Date(body.firstRegistration).toISOString().slice(0, 10), // ISO string (YYYY-MM-DD) for Postgres DATE
		})
		.returning()

	return inserted[0]
})
