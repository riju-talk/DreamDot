import { NextRequest, NextResponse } from 'next/server';
import getServerSession  from 'next-auth';
import { prismaMessaging, prismaUser } from '../../../../../lib/db/client';
import { use } from 'react';

async function verifySession(token: string) {
  const session = await prismaUser.user_sessions.findFirst({
    where: { token},
    include: { users: true },
  });

  if (!session || session.is_revoked) {
    throw new Error('Invalid or revoked session');
  }

  // Optional: Check session expiry (if applicable)
//   const sessionExpiry = new Date(session.created_at);
//   sessionExpiry.setHours(sessionExpiry.getHours() + 24); // Example: 24-hour expiry
//   if (new Date() > sessionExpiry) {
//     throw new Error('Session expired');
//   }

  return session.users;
}


export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // const session = await getServerSession(authOptions);
    // if (!session || !session.user) {
    //   return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), {
    //     status: 401,
    //     headers: { 'Content-Type': 'application/json' },
    //   });
    // }

    const token = request.headers.get('Authorization')?.replace('Bearer ', '');

    console.log("Token:",token);
    if (!token) {
      return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    const user = await verifySession(token);

    const conversationId = params.id;

    // Verify the user is part of this conversation
    const conversation = await prismaMessaging.conversation.findFirst({
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
          select: {
            id: true,
            // username: true,
            // email: true,
            // avatar: true,
          },
        },
        group: true,
      },
    });

    if (!conversation) {
      return new NextResponse(JSON.stringify({ error: 'Conversation not found or access denied' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new NextResponse(JSON.stringify(conversation), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching conversation:', error);
    return new NextResponse(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // const session = await getServerSession(authOptions);
    // if (!session || !session.user) {
    //   return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), {
    //     status: 401,
    //     headers: { 'Content-Type': 'application/json' },
    //   });
    // }

    const token = request.headers.get('Authorization')?.replace('Bearer ', '');

    console.log("Token:",token);
    if (!token) {
      return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    const user = await verifySession(token);


    const conversationId = params.id;
    const body = await request.json();
    const { name, participantIds } = body;

    // Verify user is part of this conversation
    const conversation = await prismaMessaging.conversation.findFirst({
      where: {
        id: conversationId,
        participants: {
          some: {
            id: user.id,
          },
        },
      },
      include: {
        group: true,
      },
    });

    if (!conversation) {
      return new NextResponse(JSON.stringify({ error: 'Conversation not found or access denied' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // If it's a group, verify user is admin
    if (conversation.isGroup) {
      const group = await prismaMessaging.group.findFirst({
        where: {
          conversationId,
          adminId: user.id,
        },
      });

      if (!group) {
        return new NextResponse(JSON.stringify({ error: 'Only group admin can update the group' }), {
          status: 403,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    // Update conversation
    const updateData: any = {};
    if (name && conversation.isGroup) {
      updateData.name = name;
    }

    const updatedConversation = await prismaMessaging.conversation.update({
      where: { id: conversationId },
      data: updateData,
      include: {
        participants: {
          select: {
            id: true,
            // username: true,
            // email: true,
            // avatar: true,
          },
        },
      },
    });

    // Update group if it's a group conversation
    if (conversation.isGroup && conversation.group) {
      let groupUpdateData: any = {};
      
      if (name) {
        groupUpdateData.name = name;
      }

      // Update group members if participantIds are provided
      if (participantIds && Array.isArray(participantIds)) {
        await prismaMessaging.group.update({
          where: { id: conversation.group.id },
          data: {
            ...groupUpdateData,
            members: {
              set: [],
              connect: [
                // { id: session.user.id }, // Always include the admin
                ...participantIds.map((id: string) => ({ id })),
              ],
            },
          },
        });
        
        // Also update conversation participants
        await prismaMessaging.conversation.update({
          where: { id: conversationId },
          data: {
            participants: {
              set: [],
              connect: [
                // { id: session.user.id }, // Always include the admin
                ...participantIds.map((id: string) => ({ id })),
              ],
            },
          },
        });
      } else if (Object.keys(groupUpdateData).length > 0) {
        // Only update name
        await prismaMessaging.group.update({
          where: { id: conversation.group.id },
          data: groupUpdateData,
        });
      }
    }

    return new NextResponse(JSON.stringify(updatedConversation), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error updating conversation:', error);
    return new NextResponse(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}