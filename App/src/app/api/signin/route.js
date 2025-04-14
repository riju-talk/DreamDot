import { createHash } from 'crypto';
import { prismaUser } from '../../../lib/db/client';
import { EmailTemplate } from './render';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",              
  port: 587,
  secure: false,  // true for port 465, false for other ports
  auth: {
    user: "dreamdot609@gmail.com",
    pass: "lxls icmt klfw zuff",
  }
});


function hashWithSalt(password, salt) {
  return createHash('sha256').update(password + salt).digest('hex');
}


async function sendEmail(email, otp, display_name) {
  try {
    console.log('Sending OTP to:', email);
    // Use the EmailTemplate to generate HTML content.
    const { renderToStaticMarkup } = await import('react-dom/server');
    const htmlContent = renderToStaticMarkup(
      EmailTemplate({ firstName: display_name, OTP: otp })
    );
    
    const mailOptions = {
      from: 'DreamDot <no-reply@yourdomain.com>',  // Use a valid sender address
      to: email,
      subject: 'Welcome to DreamDot: OTP Verification',
      html: htmlContent,
    };

    // Send the email via NodeMailer.
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    return new Response(JSON.stringify({ messageId: info.messageId }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}


async function signIn(data) {
  try {
    const { email, password } = data;

    // 1. Find the user by email.
    // console.log('Finding user by email:', email);
    const user = await prismaUser.users.findFirst({
      where: { email },
      include: { user_profile: true },
    });
    // console.log('User found:', user);
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
  } catch (error) {
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
  } catch (error) {
    // Return an error response as JSON.
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
