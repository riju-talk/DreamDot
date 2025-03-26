import {
    prismaUser,
    prismaSocial,
    prismaItems
} from "../../../lib/db/client"

// app/api/user/[uuid]/route.js
import { prismaUser } from '@/lib/prismaUser';

export async function GET(request, { params }) {
    const { uuid } = params;
    const user = await prismaUser.users.findUnique({
        where: { id: uuid },
        include: { user_profile: true, user_analytics: true },
    });
    if (!user) {
        return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
    }
    return new Response(JSON.stringify(user), { status: 200 });
}

export async function PUT(request, { params }) {
    const { uuid } = params;
    const { body } = request;
    const user = await prismaUser.users.findUnique({
        where: { id: uuid },
    });
    if (!user) {
        return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
    }
    await prismaUser.users.update({
        where: { id: uuid },
        data: {
            email: body.email,
            phone: body.phone,
        },
    });
    return new Response(JSON.stringify({ message: "User updated successfully" }), { status: 200 });
}