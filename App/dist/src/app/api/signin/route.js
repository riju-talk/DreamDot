import { createHash } from 'crypto';
import { prismaUser } from '../../../lib/db/client';
import { EmailTemplate } from '../../(components)/email_template';
import { Resend } from 'resend';
// Instantiate the Resend client using your environment variable
const resend = new Resend(process.env.OTP_ONLY);
/**
 * Hashes the given password together with a salt using SHA-256.
 */
function hashWithSalt(password, salt) {
    return createHash('sha256').update(password + salt).digest('hex');
}
/**
 * Sends an OTP email using the EmailTemplate as a React email.
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
            return Response.json({ error }, { status: 500 });
        }
        return Response.json(data);
    }
    catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
}
/**
 * Validates the sign-in data.
 * - Looks up the user by email.
 * - Verifies that the account is active and the provided password matches.
 * - Generates a 6-digit OTP, creates a new record in the user_security table,
 *   and sends the OTP email.
 * - Returns a response object with a success flag, message, and the user's uuid.
 */
async function signIn(data) {
    try {
        const { email, password } = data;
        // 1. Find the user by email.
        const user = await prismaUser.users.findFirst({
            where: { email },
            include: { user_profile: true },
        });
        if (!user) {
            throw new Error('User not found');
        }
        if (!user.is_active) {
            throw new Error('User account is inactive');
        }
        // 2. Validate the password.
        const hashedPassword = hashWithSalt(password, user.pass_salts);
        if (hashedPassword !== user.password_hash) {
            throw new Error('Invalid credentials');
        }
        // 3. Generate a 6-digit OTP and its expiration time (10 minutes later).
        const otp = (Math.floor(100000 + Math.random() * 900000)).toString();
        const otpExpires = new Date(Date.now() + 10 * 60 * 1000);
        // 4. Create the OTP record in the user_security table.
        await prismaUser.user_security.upsert({
            where: { user_id: user.id },
            update: {
                otp_code: otp,
                otp_expires_at: otpExpires,
                updated_at: new Date(),
            },
            create: {
                user_id: user.id,
                otp_code: otp,
                otp_expires_at: otpExpires,
                updated_at: new Date(),
            },
        });
        // 5. Send OTP to the user's email.
        await sendEmail(user.email, otp, user.user_profile?.display_name || '');
        // 6. Return a successful response (no token generated here).
        return { success: true, message: 'Sign-in successful', uuid: user.id };
    }
    catch (error) {
        console.error('Sign-in Error:', error.message);
        throw new Error('Sign-in failed: ' + error.message);
    }
}
// Export the POST handler for the /api/signin route.
export async function POST(req) {
    try {
        // Parse the request body.
        const data = await req.json();
        // Validate sign-in data.
        const result = await signIn(data);
        // Return a success response as JSON.
        return new Response(JSON.stringify(result), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    }
    catch (error) {
        // Return an error response as JSON.
        return new Response(JSON.stringify({ error: error.message }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
//# sourceMappingURL=route.js.map