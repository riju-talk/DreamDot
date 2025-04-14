import { NextRequest, NextResponse } from 'next/server';
import { prismaMessaging, prismaUser } from '../../../../lib/db/client';
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

export async function GET(request: NextRequest) {
  try {
    const token = request.headers.get('Authorization')?.replace('Bearer ', '');

    console.log("Token:",token);
    if (!token) {
      return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const user = await verifySession(token);
    console.log("User:",user);
    console.log("User2:",user.id);
    const { searchParams } = new URL(request.url);

    console.log("Search Params:",searchParams);
    const query = searchParams.get('search');
    const currentUser = await prismaUser.users.findUnique({
        where: { id: user.id },
        //   include: { blockedUsers: true },
    });
    
    if (!currentUser) {
        console.log(currentUser)
        return new NextResponse(JSON.stringify({ error: 'User not found' }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' },
        });
    }
    
    console.log("Query:",query);
    if(query === undefined || query === null){
        return new NextResponse(JSON.stringify([]), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        })
    }
    const users = await prismaUser.users.findMany({
        where: {
          OR: [
            { user_profile: { username: { contains: query, mode: 'insensitive' } } },
            { email: { contains: query, mode: 'insensitive' } },
          ],
          AND: [
            { id: { not: user.id } },
          ],
        },
        select: {
          id: true,
          email: true,
          user_profile: {
            select: {
              username: true,
              avatar_url: true,
            },
          },
        },
        take: 20,
      });
    
      console.log(users)
    return new NextResponse(JSON.stringify(users), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error fetching users:', error);
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}