// logout.js
import { prismaUser } from "../db/client";
// Logout Function
export const logout = async (req, res) => {
    try {
        // Extract token from request (e.g., cookie or header)
        const token = req.cookies.sessionToken || req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized: No session token provided' });
        }
        // Revoke the session
        await prismaUser.user_sessions.updateMany({
            where: { token },
            data: { is_revoked: true },
        });
        // Clear the cookie
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
        });
        return res.status(200).json({ message: 'Logout successful' });
    }
    catch (error) {
        console.error('Logout error:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
//# sourceMappingURL=logout.js.map