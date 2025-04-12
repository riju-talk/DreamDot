import { prismaUser } from '../../../../lib/db/client';
import { Resend } from 'resend';
import { EmailTemplate } from '../../../(components)/email_template';
import { createToken, decodeToken } from '../../../../lib/auth/create_tokens';
import { v4 as uuidv4 } from 'uuid';

// Instantiate the Resend client using your environment variable.
const resend = new Resend(process.env.OTP_ONLY);

/**
 * Helper: Generate a new token from user data and store the session record.
 * The token payload uses the uuid (user id) and other necessary details,
 * making it compatible with your middleware validateToken function.
 */
async function generateAndStoreToken(userData) {
    // 1. Generate token and a random secret.
    const { token, randomSecret } = createToken(userData);

    // 2. Decode the token to retrieve the user ID.
    const decodedData = decodeToken(token, randomSecret);
    const uuid = decodedData.sub || decodedData.id;
    const sessionId = uuidv4();

    try {
        // 3. Store the session in the `user_sessions` table.
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
        console.log("Token and session ID set");
        return { token, uuid };
    } catch (error) {
        console.error('Error in generateAndStoreToken:', error);
        throw error;
    }
}

/**
 * Send OTP email using the provided EmailTemplate.
 */
async function sendEmail(email, otp, display_name) {
    try {
        const { data, error } = await resend.emails.send({
            from: 'DreamDot <onboarding@resend.dev>',
            to: [email],
            subject: 'Welcome to DreamDot: OTP Verification',
            react: EmailTemplate({ firstName: display_name, OTP: otp }),
        });

        if (error) {
            return new Response(JSON.stringify({ error }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            });
        }
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

/**
 * POST /api/signin/otp
 * Verifies the OTP.
 * Expects a JSON body with:
 *   - user_id: the user's unique id (uuid)
 *   - otp: the OTP code submitted by the user
 *
 * On success, deletes the OTP record and returns a new token.
 *
 * Strict equality (===) is used to compare the OTP provided by the user
 * with the stored OTP value.
 */
export async function POST(req) {
    try {
        const { user_id, otp } = await req.json();

        if (!user_id || !otp) {
            return new Response(
                JSON.stringify({ error: 'Missing user id or OTP' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // Retrieve the OTP record from user_security.
        const record = await prismaUser.user_security.findUnique({
            where: { user_id },
        });

        if (!record) {
            return new Response(
                JSON.stringify({ error: 'No OTP record found for this user' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // Check if the OTP matches strictly.
        if (record.otp_code !== otp) {
            return new Response(
                JSON.stringify({ error: 'Invalid OTP' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // Check if the OTP is expired.
        if (new Date() > record.otp_expires_at) {
            return new Response(
                JSON.stringify({ error: 'OTP expired' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // OTP valid: remove the OTP record.
        await prismaUser.user_security.delete({
            where: { user_id },
        });

        // Fetch full user details from the users table to include in token payload.
        const user = await prismaUser.users.findUnique({
            where: { id: user_id },
            include: { user_profile: true },
        });

        if (!user) {
            throw new Error('User not found during token generation');
        }

        // Generate a new token from user details.
        const { token, uuid } = await generateAndStoreToken({
            id: user.id,
            email: user.email,
            phone: user.phone,
            username: user.user_profile?.username || '',
            fullName: user.user_profile?.display_name || '',
        });

        return new Response(
            JSON.stringify({
                success: true,
                message: 'OTP verified successfully',
                token,
                id: user_id,
            }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Error verifying OTP:', error.message);
        return new Response(
            JSON.stringify({ error: error.message }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}

/**
 * PUT /api/signin/otp
 * Regenerates (resends) the OTP.
 * Expects a JSON body with:
 *   - user_id: the user's unique id (uuid)
 *   - email: user's email address
 *   - display_name: user's display name for personalization
 *
 * Generates a new 6-digit OTP, upserts it into user_security, and sends the OTP email.
 */
export async function PUT(req) {
    try {
        const { user_id, email, display_name } = await req.json();

        if (!user_id || !email) {
            return new Response(
                JSON.stringify({ error: 'Missing user id or email' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        // Generate a new 6-digit OTP.
        const otp = (Math.floor(100000 + Math.random() * 900000)).toString();
        // Set expiration to 10 minutes from now.
        const otpExpires = new Date(Date.now() + 10 * 60 * 1000);

        // Upsert the OTP record in user_security.
        await prismaUser.user_security.upsert({
            where: { user_id },
            update: {
                otp_code: otp,
                otp_expires_at: otpExpires,
                updated_at: new Date(),
            },
            create: {
                user_id,
                otp_code: otp,
                otp_expires_at: otpExpires,
                created_at: new Date(),
                updated_at: new Date(),
            },
        });

        // Send the OTP email using the EmailTemplate.
        await sendEmail(email, otp, display_name || email);

        return new Response(
            JSON.stringify({
                success: true,
                message: 'OTP resent successfully',
            }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Error resending OTP:', error.message);
        return new Response(
            JSON.stringify({ error: error.message }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}

/**
 * DELETE /api/signin/otp
 * Automatically deletes the OTP record for the given user.
 * Expects a JSON body with:
 *   - user_id: the user's unique id (uuid)
 */
export async function DELETE(req) {
    try {
        const { user_id } = await req.json();
        if (!user_id) {
            return new Response(
                JSON.stringify({ error: 'Missing user id' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        await prismaUser.user_security.delete({
            where: { user_id },
        });

        return new Response(
            JSON.stringify({
                success: true,
                message: 'OTP record deleted due to maximum attempts',
            }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Error deleting OTP record:', error.message);
        return new Response(
            JSON.stringify({ error: error.message }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
