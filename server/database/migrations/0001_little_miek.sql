ALTER TABLE "users" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "users" CASCADE;--> statement-breakpoint
ALTER TABLE "cars" DROP CONSTRAINT "cars_owner_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "cars" DROP COLUMN "owner_id";