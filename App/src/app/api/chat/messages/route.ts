import { NextResponse } from 'next/server';
import { prismaMessaging, prismaUser } from '../../../../lib/db/client';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';
import CryptoJS from 'crypto-js';
import { uploadImageToCloudinary } from '../../../../lib/media_upload';


async function verifySession(token: string) {
    const session = await prismaUser.user_sessions.findFirst({
        where: { token },
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


async function uploadFileToCloudinary(file: File): Promise<string> {
    // Read file data and create a temporary file name
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filename = `${uuidv4()}-${file.name}`;
    
    // Define a temporary local path (using a temporary directory)
    const tempPath = join(process.cwd(), 'tmp', filename);
    
    // Ensure the 'tmp' directory exists, or use another known temporary directory
    await writeFile(tempPath, new Uint8Array(buffer));
    
    // Upload the file to Cloudinary
    const secureUrl = await uploadImageToCloudinary(tempPath);    
    return secureUrl;
}

// Helper to handle media uploads
/*
async function saveMedia(file: File): Promise<string> {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create unique filename
    const filename = `${uuidv4()}-${file.name}`;
    const path = join(process.cwd(), 'public', 'uploads', filename);
    console.log("error here",path)

    // Save file
    await writeFile(path, new Uint8Array(buffer));
    return `/uploads/${filename}`; // Return the relative URL
}
*/


// GET handler to fetch messages for a conversation
export async function GET(request: Request) {

    const token = request.headers.get('Authorization')?.replace('Bearer ', '');

    console.log("Token:", token);
    if (!token) {
        return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' },
        });
    }
    const verifyingUser = await verifySession(token);

    const { searchParams } = new URL(request.url);
    const chatId = searchParams.get('chatId');
    //   console.log(chatId)
    if (!chatId) {
        return NextResponse.json({ error: 'Chat ID is required' }, { status: 400 });
    }

    try {
        const messages = await prismaMessaging.message.findMany({
            where: {
                conversationId: chatId,
            },
            include: {
                sender: {
                    select: {
                        id: true,
                        username: true,
                        avatar: true,
                    },
                },
                media: true,
            },
            orderBy: {
                createdAt: 'asc',
            },
        });
        
        const decryptedMessages = messages.map(message => {
            const decryptedMedia = message.media.map(media => {
                const decryptedUrl = CryptoJS.AES.decrypt(media.url.toString(), process.env.URL_ENCRYPTION_KEY).toString(CryptoJS.enc.Utf8);
                return {
                    ...media,
                    url: decryptedUrl, // Decrypted URL
                };
            });
            return {
                ...message,
                media: decryptedMedia,
            };
        });

        return NextResponse.json(decryptedMessages);

    } catch (error) {
        console.error('Error fetching messages:', error);
        return NextResponse.json({ error: 'Failed to fetch messages' }, { status: 500 });
    }
}

// POST handler to create a new message
export async function POST(request: Request) {

    const token = request.headers.get('Authorization')?.replace('Bearer ', '');

    // console.log("Token:", token);
    if (!token) {
        return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' },
        });
    }
    const verifyingUser = await verifySession(token);

    console.log("in")
    const formData = await request.formData();
    const content = formData.get('content') as string;
    const senderId = formData.get('senderId') as string;
    const chatId = formData.get('chatId') as string;
    const mediaFiles = formData.getAll('media') as File[];


    if (!chatId || !senderId) {
        return NextResponse.json({ error: 'Chat ID and sender ID are required' }, { status: 400 });
    }

    try {
        // Save any media files first
        const mediaUrls = [];
        for (const file of mediaFiles) {
            console.log("file:Media");
            const url = await uploadFileToCloudinary(file);
            mediaUrls.push({
                type: file.type.startsWith('image/') ? 'image' : 'file',
                url,
            });
        }


        console.log("skipped, mediaUrls:", mediaUrls);
        // Create message with media (if any)
        const message = await prismaMessaging.message.create({
            data: {
                content,
                senderId,
                conversationId: chatId,
                media: {
                    create: mediaUrls.map(media => ({
                        type: media.type,
                        url: CryptoJS.AES.encrypt(media.url, process.env.URL_ENCRYPTION_KEY).toString(),
                    })),
                },
            },
            include: {
                media: true,
                sender: {
                    select: {
                        id: true,
                        username: true,
                        avatar: true,
                    },
                },
            },
        });

        // Update conversation's updatedAt
        await prismaMessaging.conversation.update({
            where: { id: chatId },
            data: { updatedAt: new Date() },
        });

        return NextResponse.json(message);
    } catch (error) {
        console.error('Error creating message:', error);
        return NextResponse.json({ error: 'Failed to create message' }, { status: 500 });
    }
}