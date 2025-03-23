// src/app/api/settings/route.js
import { prismaUser } from '../../../lib/db/client';

// GET method to fetch settings
export async function GET(request) {
    // In the App Router, you’ll typically extract data from request headers or cookies.
    // For this example, we’ll simulate the userId.
    const userId = 'some-user-uuid-from-session'; // Replace with your auth logic

    if (!userId) {
        return new Response(JSON.stringify({ message: 'Unauthorized' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const user = await prismaUser.users.findUnique({
            where: { id: userId },
            include: { user_profile: true },
        });
        if (!user)
            return new Response(JSON.stringify({ message: 'User not found' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' },
            });

        const responseData = {
            email: user.email,
            phone: user.phone,
            username: user.user_profile?.username || '',
            displayName: user.user_profile?.display_name || '',
            bio: user.user_profile?.bio || '',
            avatarUrl: user.user_profile?.avatar_url || '',
            website: user.user_profile?.website || '',
            dob: user.user_profile?.dob
                ? new Date(user.user_profile.dob).toISOString().substr(0, 10)
                : '',
        };

        return new Response(JSON.stringify(responseData), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error fetching settings:', error);
        return new Response(JSON.stringify({ message: 'Error retrieving settings' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

// PUT method to update settings
export async function PUT(request) {
    // In the App Router, you must parse the body using request.json()
    const userId = 'some-user-uuid-from-session'; // Replace with your auth logic

    if (!userId) {
        return new Response(JSON.stringify({ message: 'Unauthorized' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    const { email, phone, username, displayName, bio, avatarUrl, website, dob } = await request.json();

    try {
        // Update basic user fields in users table
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

        return new Response(JSON.stringify({ message: 'Settings updated successfully.' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error updating settings:', error);
        return new Response(JSON.stringify({ message: 'Error updating settings.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
