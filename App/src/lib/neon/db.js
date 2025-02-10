// app/actions.ts
"use server";
import { neon } from "@neondatabase/serverless";

export async function getData() {
    const sql = neon(process.env.AUTH_DATABASE_URL);
    const data = await sql`...`;
    return data;
}