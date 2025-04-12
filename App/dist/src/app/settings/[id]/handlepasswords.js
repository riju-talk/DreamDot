"use server";
import { createHash, randomBytes } from "crypto";
import { prismaUser } from "../../../lib/db/client";
function generateSalt() {
    return randomBytes(16).toString("hex");
}
function hashPassword(password, salt) {
    return [createHash("sha256").update(password + salt).digest("hex"), salt];
}
function change_password(uuid, newPassword, salt) {
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
    }
    catch (error) {
        console.error("Error resetting password:", error);
        return false;
    }
}
//# sourceMappingURL=handlepasswords.js.map