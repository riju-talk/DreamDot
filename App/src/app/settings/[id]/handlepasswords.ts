"use server"
import { createHash } from "crypto";
import { prismaUser } from "../../../lib/db/client";



function hashPassword(password: string): string {
    return createHash("sha256").update(password).digest("hex");
}
export async function handleResetPassword(values) {

    console.log("Button clicked!");  
    console.log("Updating password", values);  // Check if the form values are received
}
