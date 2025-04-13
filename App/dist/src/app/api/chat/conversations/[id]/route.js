import { NextRequest, NextResponse } from 'next/server';
import getServerSession from 'next-auth';
import { prismaMessaging, prismaUser } from '../../../../../lib/db/client';
async function verifySession(token) {
    const session = prismaUser.user_sessions.findFirst({
        where: { token },
        include: { users: true },
    });
    if (!session || session.is_revoked) {
        throw new Error('Invalid or revoked session');
    }
    // Optional: Check session expiry (if applicable)
    // const sessionExpiry = new Date(session.created_at);
    // sessionExpiry.setHours(sessionExpiry.getHours() + 24);
    // if (new Date() > sessionExpiry) {
    //   throw new Error('Session expired');
    // }
    return session.users;
}
// GET handler to fetch a conversation by its ID
export async function GET(request, { params }) {
    try {
        const token = request.headers.get('Authorization')?.replace('Bearer ', '');
        console.log("Token:", token);
        if (!token) {
            return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
        }
        const user = await verifySession(token);
        const conversationId = params.id;
        // Verify the user is part of this conversation
        const conversation = prismaMessaging.conversation.findFirst({
            where: {
                id: conversationId,
                participants: {
                    some: {
                        id: user.id,
                    },
                },
            },
            include: {
                participants: {
                    select: { id: true /*, username, email, avatar can be added if needed */ },
                },
                group: true,
            },
        });
        if (!conversation) {
            return new NextResponse(JSON.stringify({ error: 'Conversation not found or access denied' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
        }
        return new NextResponse(JSON.stringify(conversation), { status: 200, headers: { 'Content-Type': 'application/json' } });
    }
    catch (error) {
        console.error('Error fetching conversation:', error);
        return new NextResponse(JSON.stringify({ error: 'Internal server error' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}
// PATCH handler to update a conversation
export async function PATCH(request, { params }) {
    try {
        const token = request.headers.get('Authorization')?.replace('Bearer ', '');
        console.log("Token:", token);
        if (!token) {
            return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
        }
        const user = await verifySession(token);
        const conversationId = params.id;
        const body = await request.json();
        const { name, participantIds } = body;
        // Verify the user is part of this conversation
        const conversation = prismaMessaging.conversation.findFirst({
            where: {
                id: conversationId,
                participants: {
                    some: { id: user.id },
                },
            },
            include: { group: true },
        });
        if (!conversation) {
            return new NextResponse(JSON.stringify({ error: 'Conversation not found or access denied' }), { status: 404, headers: { 'Content-Type': 'application/json' } });
        }
        // If it's a group conversation, verify user is admin
        if (conversation.isGroup) {
            const group = prismaMessaging.group.findFirst({
                where: {
                    conversationId,
                    adminId: user.id,
                },
            });
            if (!group) {
                return new NextResponse(JSON.stringify({ error: 'Only group admin can update the group' }), { status: 403, headers: { 'Content-Type': 'application/json' } });
            }
        }
        // Update conversation details
        const updateData = {};
        if (name && conversation.isGroup) {
            updateData.name = name;
        }
        const updatedConversation = prismaMessaging.conversation.update({
            where: { id: conversationId },
            data: updateData,
            include: {
                participants: {
                    select: { id: true },
                },
            },
        });
        // If group conversation, update group details
        if (conversation.isGroup && conversation.group) {
            let groupUpdateData = {};
            if (name) {
                groupUpdateData.name = name;
            }
            if (participantIds && Array.isArray(participantIds)) {
                await prismaMessaging.group.update({
                    where: { id: conversation.group.id },
                    data: {
                        ...groupUpdateData,
                        members: {
                            set: [],
                            connect: participantIds.map((id) => ({ id })),
                        },
                    },
                });
                await prismaMessaging.conversation.update({
                    where: { id: conversationId },
                    data: {
                        participants: {
                            set: [],
                            connect: participantIds.map((id) => ({ id })),
                        },
                    },
                });
            }
            else if (Object.keys(groupUpdateData).length > 0) {
                await prismaMessaging.group.update({
                    where: { id: conversation.group.id },
                    data: groupUpdateData,
                });
            }
        }
        return new NextResponse(JSON.stringify(updatedConversation), { status: 200, headers: { 'Content-Type': 'application/json' } });
    }
    catch (error) {
        console.error('Error updating conversation:', error);
        return new NextResponse(JSON.stringify({ error: 'Internal server error' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}
//# sourceMappingURL=route.js.map