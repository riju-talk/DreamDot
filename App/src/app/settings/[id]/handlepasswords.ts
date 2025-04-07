"use server"
import { createHash, randomBytes  } from "crypto";
import { prismaUser } from "../../../lib/db/client";

function generateSalt(): string {
    return randomBytes(16).toString("hex");
}

function hashPassword(password: string, salt: string): [string, string] {
    return [createHash("sha256").update(password + salt).digest("hex"), salt];
}

function change_password(
    uuid: string,
    newPassword: string,
    salt: string
) {
    const [hashedNewPassword, newSalt] = hashPassword(newPassword, generateSalt());
    const completion = prismaUser.users.update({
        where: { id: uuid },
        data: {
            password_hash: hashedNewPassword,
            pass_salts: newSalt,
            updated_at: new Date(),
        },
    });
}


export async function handleResetPassword(values) {
    const { uuid, newPassword, salt } = values;
    try {
        change_password(uuid, newPassword, salt);
        return true;
    } catch (error) {
        console.error("Error resetting password:", error);
        return false;
    }
}
