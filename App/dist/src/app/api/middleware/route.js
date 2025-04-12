import { prismaUser } from '../../../lib/db/client';
import { decodeToken } from '../../../lib/auth/create_tokens';
export async function POST(req) {
    try {
        // Extract the Authorization header
        const authHeader = req.headers.get('Authorization');
        const uuid = req.headers.get('uuid');
        //console.log(authHeader);
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            console.log("here");
            return new Response(JSON.stringify({ error: 'Unauthorized' }), {
                status: 401,
                headers: { 'Content-Type': 'application/json' },
            });
        }
        // Get the token from the header
        const token = authHeader.split(' ')[1];
        // console.log(token);
        // Find the session with the matching token
        const session = await prismaUser.user_sessions.findFirst({
            where: { token, is_revoked: false },
            include: { users: true }, // Fetch the related user
        });
        if (!session) {
            //console.log("here2")
            return new Response(JSON.stringify({ error: 'Session not found or revoked' }), {
                status: 401,
                headers: { 'Content-Type': 'application/json' },
            });
        }
        // const { pathname } = req.header('Referer');
        // const uuid_url = pathname.split('/').pop();
        // console.log(pathname)
        // console.log(uuid_url);
        // console.log(uuid);
        // if(uuid_url !== uuid) {
        //   return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        //     status: 401,
        //     headers: { 'Content-Type': 'application/json' },
        //   });
        // }
        if (session.users.id !== uuid) {
            return new Response(JSON.stringify({ error: 'UUID mismatch' }), { status: 403 });
        }
        // Decode the token using the stored secret
        const decoded = decodeToken(token, session.secret);
        // Validate if the user is still active
        if (!session.users.is_active) {
            return new Response(JSON.stringify({ error: 'User account is inactive' }), {
                status: 403,
                headers: { 'Content-Type': 'application/json' },
            });
        }
        // Return user information on successful validation
        return new Response(JSON.stringify({
            success: true,
            user: {
                id: session.users.id,
                email: session.users.email,
                username: session.users.user_profile?.username || '',
                fullName: session.users.user_profile?.display_name || '',
            },
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    }
    catch (error) {
        console.error('Token validation error:', error.message);
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
//# sourceMappingURL=route.js.map