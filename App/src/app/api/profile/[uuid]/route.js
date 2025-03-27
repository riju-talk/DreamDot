import {
    prismaUser,
    prismaSocial,
    prismaItems
} from "../../../../lib/db/client";
import { validate } from 'uuid';

export async function GET(request, { params }) {
    if (!params || !params.uuid) {
        return new Response(JSON.stringify({ error: "UUID is required" }), { status: 400 });
    }
    const { uuid } = params;
    // Validate UUID format
    if (!validate(uuid)) {
        return new Response(JSON.stringify({ error: "Invalid UUID format" }), { status: 400 });
    }
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
    if (!params || !params.uuid) {
        return new Response(JSON.stringify({ error: "UUID is required" }), { status: 400 });
    }
    const { uuid } = params;
    // Validate UUID format
    if (!validate(uuid)) {
        return new Response(JSON.stringify({ error: "Invalid UUID format" }), { status: 400 });
    }
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