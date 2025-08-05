ALTER TABLE "cars" ADD COLUMN "vin" text NOT NULL;--> statement-breakpoint
ALTER TABLE "cars" ADD CONSTRAINT "cars_vin_unique" UNIQUE("vin");