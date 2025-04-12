import { prismaMessaging, prismaUser } from '../../../../lib/db/client';
import { NextResponse } from 'next/server';

async function verifySession(token) {
  const session = await prismaUser.user_sessions.findFirst({
    where: { token },
    include: { users: true },
  });

  if (!session || session.is_revoked) {
    throw new Error('Invalid or revoked session');
  }

  return session.users;
}


export async function GET(request) {
  try {
    const token = request.headers.get('authorization')?.replace('Bearer ', '');

    //console.log("Token:", token);
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = await verifySession(token);
    //console.log("User:", user);
    //console.log("User2:", user.id);

    const { searchParams } = new URL(request.url);
    const query = searchParams.get('search');

    //console.log("Search Params:", searchParams);
    const currentUser = await prismaUser.users.findUnique({
      where: { id: user.id },
    });

    if (!currentUser) {
      console.log(currentUser);
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    console.log("Query:", query);
    if (!query) {
      return NextResponse.json([], { status: 200 });
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

    console.log(users);
    return NextResponse.json(users, { status: 200 });

  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

