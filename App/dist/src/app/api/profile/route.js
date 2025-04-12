// src/app/api/users/all/route.js
import { prismaUser } from "../../../lib/db/client";
export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const query = searchParams.get('query') || '';
        const profiles = await prismaUser.user_profile.findMany({
            select: { username: true, display_name: true, user_id: true },
            where: {
                OR: [
                    { username: { contains: query, mode: 'insensitive' } },
                    { display_name: { contains: query, mode: 'insensitive' } },
                ]
            }
        });
        return new Response(JSON.stringify(profiles), { status: 200 });
    }
    catch (error) {
        console.error("Error retrieving user profiles:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}
//# sourceMappingURL=route.js.map