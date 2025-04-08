import { prismaUser, prismaSocial, prismaItems } from "../../../../lib/db/client";
import { validate } from "uuid";

export async function GET(request, { params }) {
  try {
    const { uuid } = params || {};

    if (!uuid) {
      return new Response(
        JSON.stringify({ error: "UUID is required" }),
        { status: 400 }
      );
    }

    // Validate UUID format
    if (!validate(uuid)) {
      return new Response(
        JSON.stringify({ error: "Invalid UUID format" }),
        { status: 400 }
      );
    }

    // Fetch user and related profile data from prismaUser
    const user = await prismaUser.users.findUnique({
      where: { id: uuid },
      include: {
        user_profile: true,
      },
    });

    if (!user) {
      return new Response(
        JSON.stringify({ error: "User not found" }),
        { status: 404 }
      );
    }

    // Fetch social analytics (followers, following) from prismaSocial
    const following = await prismaSocial.following.findMany({
      where: { follower_id: uuid },
    });

    const followers = await prismaSocial.following.findMany({
      where: { followee_id: uuid },
    });

    const collection = await prismaItems.collections.findFirst({
      where: { user_id: uuid },
    });

    // Structure the response
    const userData = {
      email: user.email || "",
      phone: user.phone || "",
      user_name: user.user_profile?.username || "",
      name: user.user_profile?.display_name || "",
      bio: user.user_profile?.bio || "",
      avatarUrl: user.user_profile?.profile_picture || "",
      website: user.user_profile?.website || "",
      user_type: user?.user_type || "",
      followers: followers?.length || 0,
      following: following?.length || 0,
      collection: collection?.collection || 0,
    };

    return new Response(JSON.stringify(userData), { status: 200 });
  } catch (error) {
    console.error("GET /profile/[uuid] Error:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
