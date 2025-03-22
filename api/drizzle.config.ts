// drizzle.config.ts
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  dbCredentials: {
    url: "postgres://postgres:postgrespw@localhost:5432/some_db2",
  },
  schema: "./src/schema.ts",
  out: "./drizzle",
  migrations: {
    prefix: "timestamp",
    table: "__drizzle_migrations__",
    schema: "public",
  },
});
