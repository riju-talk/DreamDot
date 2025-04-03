// File: src/lib/auth/register.js
import { randomBytes, createHash } from 'crypto';
import { prismaUser, prismaMessaging } from '../db/client';
import { v4 as uuidv4 } from 'uuid';
import { createToken, decodeToken } from './create_tokens';

function hashWithSalt(password, salt) {
    return createHash('sha256').update(password + salt).digest('hex');
}

export async function register(data) {
    try {
        // 1) Generate UUID for the user
        const uuid = uuidv4();

        // 2) Generate a 16-byte salt in hex
        const salt = randomBytes(16).toString('hex');

        // 3) Hash the password using SHA-256 and the salt
        const hashedPassword = hashWithSalt(data.password, salt);
        const parsedDob = data.dob ? new Date(data.dob) : null;

        // 4) Use a transaction to create both the user and user_profile entries
        await prismaUser.$transaction(async (prisma) => {
            await prisma.users.create({
                data: {
                    id: uuid,
                    email: data.email,
                    phone: data.phone,
                    password_hash: hashedPassword,
                    pass_salts: salt,
                    is_verified: false,
                    is_active: true,
                },
            });

            await prisma.user_profile.create({
                data: {
                    user_id: uuid,
                    username: data.username,
                    display_name: data.fullName || '',
                    dob: parsedDob,
                },
            });
        });

        // 5) Generate and store a token for the user
        const token = await onRegistrationComplete({
            id: uuid,
            email: data.email,
            phone: data.phone,
            username: data.username,
            fullName: data.fullName,
        });

        await prismaMessaging.user.create({
            data: {
                encryptedPrivateKey: data.encryptedPrivateKey,
                publicKey: data.publicKey,
                // iv: data.iv,
                // salt: data.salt,
                id: uuid,
                username: data.username,
                email: data.email,
                avatar: data.avatarUrl || null,
            },
        });

        return { success: true, message: 'User registered successfully', uuid: uuid, token: token };
    } catch (error) {
        console.error('Registration Error:', error.message);
        throw new Error('User registration failed: ' + error.message);
    }
}

export async function generateAndStoreToken(userData) {
    // 1. Generate token and a random secret using registration data.
    const { token, randomSecret } = createToken(userData);

    // 2. Decode the token to retrieve the user identifier.
    // Ensure your createToken payload sets the user id in either 'id' or 'sub'
    const decodedData = decodeToken(token, randomSecret);
    const uuid = decodedData.sub || decodedData.id;

    const ses_uuid = uuidv4();

    try {
        // 3. Store the token in the user_sessions table in a transaction.
        await prismaUser.$transaction(async (prisma) => {
            await prisma.user_sessions.create({
                data: {
                    session_id: ses_uuid,
                    token: token,
                    created_at: new Date(),
                    is_revoked: false,
                    secret: randomSecret,
                    users: { connect: { id: uuid } }
                },
            });
        });

        // 4. Return the generated token
        return token;
    } catch (error) {
        console.error('Error in generateAndStoreToken:', error);
        throw error;
    }
}

async function onRegistrationComplete(userData) {
    try {
        const token = await generateAndStoreToken(userData);
        return token;
    } catch (error) { 
        console.error('onRegistrationComplete Error:', error);
        throw error;
    }
}
