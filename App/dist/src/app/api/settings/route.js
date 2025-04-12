import { prismaUser } from '../../../lib/db/client';
import { validate } from 'uuid';
export async function GET(request) {
    // Instead of a hardcoded string, get the userId from a header.
    // In a real app, this should come from your session/cookies/JWT.
    const userId = request.headers.get('x-user-id');
    if (!userId) {
        return new Response(JSON.stringify({ message: 'Unauthorized' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' },
        });
    }
    if (!validate(userId)) {
        return new Response(JSON.stringify({ message: 'Invalid user id' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }
    try {
        const user = await prismaUser.users.findFirst({
            where: { id: userId },
            include: { user_profile: true },
        });
        if (!user) {
            return new Response(JSON.stringify({ message: 'User not found' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' },
            });
        }
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
    }
    catch (error) {
        console.error('Error fetching settings:', error);
        return new Response(JSON.stringify({ message: 'Error retrieving settings' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
export async function PUT(request) {
    const userId = request.headers.get('x-user-id');
    if (!userId) {
        return new Response(JSON.stringify({ message: 'Unauthorized' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' },
        });
    }
    if (!validate(userId)) {
        return new Response(JSON.stringify({ message: 'Invalid user id' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }
    const { email, phone, username, displayName, bio, avatarUrl, website, dob } = await request.json();
    try {
        // Update the users table (basic user fields)
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
        const data = {
            id: userId,
            name: displayName,
            user_name: username,
            email: email,
            profile_picture: avatarUrl,
            bio: bio,
            website: website,
            country: '', // Assuming country is not provided in the request, set it to an empty string or fetch it if available
            phone: phone,
            date_of_birth: dob ? new Date(dob).toISOString().substr(0, 10) : '',
            website_url: website,
            social_links: {}, // Assuming social_links is not provided in the request, set it to an empty object or fetch it if available
        };
        return new Response(JSON.stringify({ message: 'Settings updated successfully.', user: data }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    }
    catch (error) {
        console.error('Error updating settings:', error);
        return new Response(JSON.stringify({ message: 'Error updating settings.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
//# sourceMappingURL=route.js.map