import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

export const sql = neon(
    `postgresql://neondb_owner:npg_KZH2JgIL8Fxl@ep-silent-sea-a87kqu7w-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require`
);

