// pages/api/settings.js
import { prismaUser } from '../../../lib/db/client';

export default async function POST(req, res) {
    const userId = req.user?.id || 'some-user-uuid-from-session';

    if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    if (req.method === 'GET') {
        try {
            // Retrieve user details along with user_profile info
            const user = await prismaUser.users.findUnique({
                where: { id: userId },
                include: { user_profile: true },
            });
            if (!user) return res.status(404).json({ message: "User not found" });

            // Merge data from both tables for the form
            res.status(200).json({
                email: user.email,
                phone: user.phone,
                username: user.user_profile?.username || "",
                displayName: user.user_profile?.display_name || "",
                bio: user.user_profile?.bio || "",
                avatarUrl: user.user_profile?.avatar_url || "",
                website: user.user_profile?.website || "",
                dob: user.user_profile?.dob
                    ? new Date(user.user_profile.dob).toISOString().substr(0, 10)
                    : "",
            });
        } catch (error) {
            console.error("Error fetching settings:", error);
            res.status(500).json({ message: "Error retrieving settings" });
        }
    } else if (req.method === 'PUT') {
        const { email, phone, username, displayName, bio, avatarUrl, website, dob } = req.body;
        try {
            // Update basic user fields (email, phone) in the users table
            await prismaUser.users.update({
                where: { id: userId },
                data: { email, phone, updated_at: new Date() },
            });

            // Update profile details in the user_profile table
            await prismaUser.user_profile.update({
                where: { user_id: userId },
                data: {
                    username,
                    display_name: displayName,
                    bio,
                    avatar_url: avatarUrl,
                    website,
                    dob: dob ? new Date(dob) : null,
                    updated_at: new Date(),
                },
            });

            res.status(200).json({ message: "Settings updated successfully." });
        } catch (error) {
            console.error("Error updating settings:", error);
            res.status(500).json({ message: "Error updating settings." });
        }
    } 
}
