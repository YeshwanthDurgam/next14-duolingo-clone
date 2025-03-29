import "dotenv/config";
import "dotenv/config";
const { defineConfig } = require("drizzle-kit");
module.exports = defineConfig({
  dialect: "postgresql",
  schema: "./db/schema.ts",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});