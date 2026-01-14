import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  // In development, allow running without DB
  console.log("DATABASE_URL not set, using mock storage");
}

export const pool = process.env.DATABASE_URL
  ? new Pool({ connectionString: process.env.DATABASE_URL })
  : null;
export const db = process.env.DATABASE_URL ? drizzle(pool!, { schema }) : null;
