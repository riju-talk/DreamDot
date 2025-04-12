const { prismaMessaging, prismaUser } = require('../../../../lib/db/client');

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

async function getUsers(request, response) {
  try {
    const token = request.headers['authorization']?.replace('Bearer ', '');

    console.log("Token:", token);
    if (!token) {
      response.status(401).json({ error: 'Unauthorized' });
      return;
    }

    const user = await verifySession(token);
    console.log("User:", user);
    console.log("User2:", user.id);

    const url = new URL(request.url, `http://${request.headers.host}`);
    const query = url.searchParams.get('search');

    console.log("Search Params:", url.searchParams);
    const currentUser = await prismaUser.users.findUnique({
      where: { id: user.id },
    });

    if (!currentUser) {
      console.log(currentUser);
      response.status(404).json({ error: 'User not found' });
      return;
    }

    console.log("Query:", query);
    if (query === undefined || query === null) {
      response.status(200).json([]);
      return;
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
    response.status(200).json(users);

  } catch (error) {
    console.error('Error fetching users:', error);
    response.status(500).json({ error: error.message });
  }
}

module.exports = { getUsers };
