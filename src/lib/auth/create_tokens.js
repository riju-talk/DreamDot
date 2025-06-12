import jwt from 'jsonwebtoken';
import { randomBytes } from 'crypto';

export function createToken(userData) {
  // Generate a random secret for this token
  const randomSecret = randomBytes(32).toString('hex');

  // Create the payload with all desired registration data and the random secret.
  const payload = {
    id: userData.id,
    email: userData.email,
    phone: userData.phone,
    username: userData.username,
    fullName: userData.fullName,
    iss: 'dreamdot.io',
    iat: Math.floor(Date.now() / 1000)
  };

  // Sign the token using HS512 algorithm.
  // Make sure JWT_SECRET is defined in your environment variables.
  const token = jwt.sign(payload, randomSecret, {algorithm: 'HS512'});

  return { token, randomSecret };
}

export function decodeToken(token, secret) {
  try {
    // Verify and decode the token using the provided secret and HS512 algorithm
    const decoded = jwt.verify(token, secret, {
      algorithms: ['HS512']
    });
    return decoded;
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
}
