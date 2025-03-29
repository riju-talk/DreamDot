// lib/auth/hash.js
import { useUser } from "../../app/user_context";
import { createHash } from "crypto";

export function hashWithSalt(password, salt) {
    return createHash("sha256").update(password + salt).digest("hex");
}

// lib/auth/generateAndStoreToken.js
import { v4 as uuidv4 } from "uuid";
import { prismaUser } from "../../db/client";
import { createToken, decodeToken } from "./create_tokens";

const { login } = useUser()

export async function generateAndStoreToken(userData) {
    // 1. Generate token and a random secret
    const { token, randomSecret } = createToken(userData);

    // 2. Decode the token to retrieve the user ID
    const decodedData = decodeToken(token, randomSecret);
    const uuid = decodedData.sub || decodedData.id;

    const sessionId = uuidv4();

    try {
        // 3. Store the session in the `user_sessions` table
        await prismaUser.$transaction(async (prisma) => {
            await prisma.user_sessions.create({
                data: {
                    session_id: sessionId,
                    token: token,
                    created_at: new Date(),
                    is_revoked: false,
                    secret: randomSecret,
                    users: { connect: { id: uuid } },
                },
            });
        });

        return { token, uuid };
    } catch (error) {
        console.error("Error in generateAndStoreToken:", error);
        throw error;
    }
}


// lib/auth/signIn.js
import { prismaUser } from "../../db/client";
import { v4 as uuidv4 } from "uuid";
import { hashWithSalt } from "./hash";
import { generateAndStoreToken } from "./generateAndStoreToken";

export async function signIn(data) {
    try {
        const { email, password } = data;
        // 1. Find the user by email
        const user = await prismaUser.users.findFirst({
            where: { email },
            // include: { user_profile: true },
        });

        if (!user) {
            throw new Error("User not found");
        }

        if (!user.is_active) {
            throw new Error("User account is inactive");
        }

        // 2. Validate the password
        const profile_details = await prismaUser.user_profile.findFirst({
            where: { user_id: user.id },
        });
        if (!profile_details) {
            throw new Error("User profile not found");
        }
        const hashedPassword = hashWithSalt(password, user.pass_salts);
        if (hashedPassword !== user.password_hash) {
            throw new Error("Invalid credentials");
        }

        // 3. Create JWT and Session
        const { token, uuid } = await generateAndStoreToken({
            id: user.id,
            email: user.email,
            phone: user.phone,
            username: user.user_profile?.username || "",
            fullName: user.user_profile?.display_name || "",
        });

        // 4. Creating User Context
        login({
            id: user.id,
            name: profile_details.display_name || "",
            user_name: profile_details.username || "",
            email: user.email,
            profile_picture: profile_details.avatar_url || "",
            bio: profile_details.bio || "",
            website: profile_details.website || "",
            country: profile_details.country || "",
            phone: user.phone || "",
            date_of_birth: profile_details.dob || "",
            website_url: profile_details.website || "",
            social_links: profile_details.social_links || {},
        });

        return { success: true, message: "Sign-in successful", token, uuid };
    } catch (error) {
        console.error("Sign-in Error:", error.message);
        throw new Error("Sign-in failed: " + error.message);
    }
}
