import { NextResponse } from 'next/server';
import { prismaMessaging } from '../../../../lib/db/client';

// const prisma = new PrismaClient();

// GET handler to fetch all conversations for a user
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');
  console.log(userId);
  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
  }
  
  try {
    // Get all conversations where the user is a participant
    const conversations = await prismaMessaging.conversation.findMany({
      where: {
        participants: {
          some: {
            userId: userId,
          },
        },
      },
      include: {
        participants: {
          select: {
            user: {
              select: {
                id: true,
                username: true,
                avatar: true,
              },
            },
          },
        },
        group: true,
        messages: {
          orderBy: {
            createdAt: 'desc',
          },
          take: 1,
          include: {
            sender: {
              select: {
                id: true,
                username: true,
              },
            },
          },
        },
      },
      orderBy: {
        updatedAt: 'desc',
      },
    });
    // console.log("Conversations",conversations);
    // Format conversations data for the frontend
    const formattedConversations = conversations.map(conv => {
      if (conv.isGroup) {
        return {
          id: conv.id,
          name: conv.group?.name || 'Unnamed Group',
          isGroup: true,
          participants: conv.participants,
          lastMessage: conv.messages[0] || null,
        };
      } else {
        // For direct messages, get the other user
        const otherUser = conv.participants.find((p) => p.user.id !== userId)?.user;
        return {
          id: conv.id,
          isGroup: false,
          participants: conv.participants,
          otherUser: otherUser,
          lastMessage: conv.messages[0] || null,
        };
      }
    });
    console.log("formattedConversations",formattedConversations);
    return NextResponse.json(formattedConversations);
  } catch (error) {
    console.error('Error fetching conversations:', error);
    return NextResponse.json({ error: 'Failed to fetch conversations' }, { status: 500 });
  }
}


export async function POST(request: Request) {
  console.log("inside post");
  const body = await request.json();
  const { participants, isGroup, name } = body;
  console.log(body);

  if (!participants || !Array.isArray(participants) || participants.length === 0) {
    return NextResponse.json({ error: 'At least one participant is required' }, { status: 400 });
  }

  try {
    // For direct messages (non-group), check if a conversation already exists
    if (!isGroup && participants.length === 2) {
      const existingConversation = await prismaMessaging.conversation.findFirst({
        where: {
          isGroup: false,
          AND: [
            { participants: { some: { userId: participants[0] } } },
            { participants: { some: { userId: participants[1] } } }
          ],
          participants: {
            // Ensure there are exactly 2 participants (no more, no less)
            every: {
              userId: { in: participants }
            }
          }
        },
        include: {
          participants: {
            select: {
              user: {
                select: {
                  id: true,
                  username: true,
                  avatar: true,
                },
              },
            },
          },
        }
      });
      
      if (existingConversation && 
          existingConversation.participants.length === 2) {
            console.log("conversation exists")
        return NextResponse.json(existingConversation);
      }
    }

    console.log("creating conversation");
    // Create a new conversation
    const newConversation = await prismaMessaging.conversation.create({
      data: {
        isGroup: isGroup || false,
        name: isGroup ? name : null,
        participants: {
          create: participants.map(id => ({
            user: { connect: { id } },
          })),
        },
      },
      include: {
        participants: {
          select: {
            user: {
              select: {
                id: true,
                username: true,
                avatar: true,
              },
            },
          },
        },
      },
    });

    // If it's a group, create a Group record
    if (isGroup && name) {
      await prismaMessaging.group.create({
        data: {
          name,
          adminId: participants[0], // First participant is the admin
          members: {
            create: participants.map(userId => ({
              user: { connect: { id: userId } }, // Connect each user to a new GroupMember
            })),
          },
          conversationId: newConversation.id,
        },
      });
    }

    return NextResponse.json(newConversation);
  } catch (error) {
    console.error('Error creating conversation:', error);
    return NextResponse.json({ error: 'Failed to create conversation' }, { status: 500 });
  }
}