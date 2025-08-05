<script setup lang="ts">
import * as z from "zod"

const _form = z.object({
	brand: z.string().min(1, "Brand is required"),
	model: z.string().min(1, "Model is required"),
	firstRegistration: z
		.string()
		.regex(
			/^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/,
			"Needs to be in DD.MM.YYYY format",
		)
		.transform((value) => {
			const [day, month, year] = value.split(".")
			return `${year}-${month}-${day}`
		}),
	vin: z.string().regex(/^[A-HJ-NPR-Z0-9]{17}$/, "Enter Correct VIN"),
})

type Form = z.output<typeof _form>

const state = reactive<Partial<Form>>({
	brand: "BMW",
	model: "320i",
	firstRegistration: "24.08.2002",
	vin: "WBAEN110X0PB03980",
})

async function onSubmit() {
	try {
		await $fetch("/api/addcar", {
			method: "POST",
			body: state,
		})
		toastSuccess("Car added successfully")
		state.vin = ""
		state.brand = ""
		state.model = ""
		state.firstRegistration = ""
	} catch (error) {
		toastError(error)
	}
}
</script>

<template>
	<div class="flex flex-col items-center justify-center h-screen">
		<UForm
			:state="state"
			:schema="_form"
			class="gap-4 flex flex-col w-60"
			@submit="onSubmit"
		>
			<h1 class="text-2xl font-bold">Add Car</h1>
			<UFormField label="Brand" name="brand">
				<UInput v-model="state.brand" placeholder="BMW" />
			</UFormField>

			<UFormField label="Model" name="model">
				<UInput v-model="state.model" placeholder="320i" />
			</UFormField>

			<UFormField label="First Registration" name="firstRegistration">
				<UInput v-model="state.firstRegistration" placeholder="24.08.2002" />
			</UFormField>

			<UFormField label="VIN" name="vin">
				<UInput v-model="state.vin" placeholder="WBAEN110X0PB03980" />
			</UFormField>

			<UButton color="neutral" variant="outline" class="self-start" type="submit"
				>Add</UButton
			>
		</UForm>
	</div>
</template>
