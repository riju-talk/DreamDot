import { createHash } from 'crypto';
import { prismaUser, prismaMessaging } from '../../../lib/db/client';
import { v4 as uuidv4 } from 'uuid';
import { createToken, decodeToken } from '../../../lib/auth/create_tokens';

function hashWithSalt(password, salt) {
    return createHash('sha256').update(password + salt).digest('hex');
}

async function signIn(data) {
    try {
        const { email, password } = data;
        // 1. Find the user by email
        const user = await prismaUser.users.findFirst({
          where: { email },
          include: { user_profile: true },
        });

        // const userKeys = await prismaMessaging.user.findFirst({
        //     where: { email },
        //     select: { encryptedPrivateKey: true, iv: true, salt: true }
        // });

        // console.log(user)
        // console.log(data)
        if (!user) {
            throw new Error('User not found');
        }

        if (!user.is_active) {
            throw new Error('User account is inactive');
        }

        // 2. Validate the password
        const hashedPassword = hashWithSalt(password, user.pass_salts);
        if (hashedPassword !== user.password_hash) {
            throw new Error('Invalid credentials');
        }

        // 3. Create JWT and Session
        const { token, uuid } = await generateAndStoreToken({
          id: user.id,
          email: user.email,
          phone: user.phone,
          username: user.user_profile?.username || '',
          fullName: user.user_profile?.display_name || '',
      });

    //   console.log("UserKeys", userKeys)

      const userData = {
        id: user.id,
        email: user.email,
        username: user.user_profile?.username || '',
        fullName: user.user_profile?.display_name || '',
        avatar: user.user_profile?.avatar_url || '',
        // encryptedPrivateKey: userKeys.encryptedPrivateKey,
        // iv: userKeys.iv,
        // salt: userKeys.salt,
    };
      
      return { success: true, message: 'Sign-in successful', token, uuid, user: userData};
      

    } catch (error) {
        console.error('Sign-in Error:', error.message);
        throw new Error('Sign-in failed: ' + error.message);
    }
}

async function generateAndStoreToken(userData) {
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
                    session_id: sessionId, // Fixed typo: was ses_uuid
                    token: token,
                    created_at: new Date(),
                    is_revoked: false,
                    secret: randomSecret,
                    users: { connect: { id: uuid } },
                },
            });
        });
        console.log("token and session id set")
        return { token, uuid };
    } catch (error) {
        console.error('Error in generateAndStoreToken:', error);
        throw error;
    }
}

// Export the POST handler for the /api/signin route
export async function POST(req) {
    try {
        // Parse the request body
        const data = await req.json();

        // Call the signIn function
        const result = await signIn(data);

        // Return a success response
        return new Response(JSON.stringify(result), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        // Return an error response
        return new Response(JSON.stringify({ error: error.message }), {
            status: 400, // Bad Request for user errors, or 500 for server errors
            headers: { 'Content-Type': 'application/json' },
        });
    }
}