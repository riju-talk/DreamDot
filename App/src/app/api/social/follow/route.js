// follow.js
import { prismaSocial } from "../../../../lib/db/client";
import { validate } from "uuid";

// POST: Create a follow record (i.e. follow someone)
export async function POST(request) {
  try {
    const { follower_id, followee_id } = await request.json();
    if (!follower_id || !followee_id) {
      return new Response(JSON.stringify({ error: "follower_id and followee_id are required" }), { status: 400 });
    }
    if (!validate(follower_id) || !validate(followee_id)) {
      return new Response(JSON.stringify({ error: "Invalid UUID format" }), { status: 400 });
    }
    const follow = await prismaSocial.following.create({
      data: {
        follower_id,
        followee_id,
      },
    });
    return new Response(JSON.stringify(follow), { status: 201 });
  } catch (error) {
    console.error("POST /follow error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}

// DELETE: Remove a follow record (i.e. unfollow)
export async function DELETE(request) {
  try {
    const { follower_id, followee_id } = await request.json();
    if (!follower_id || !followee_id) {
      return new Response(JSON.stringify({ error: "follower_id and followee_id are required" }), { status: 400 });
    }
    if (!validate(follower_id) || !validate(followee_id)) {
      return new Response(JSON.stringify({ error: "Invalid UUID format" }), { status: 400 });
    }
    // Use deleteMany in case multiple records exist (should be unique by model, but this is safe)
    const result = await prismaSocial.following.deleteMany({
      where: { follower_id, followee_id },
    });
    return new Response(
      JSON.stringify({ message: "Unfollowed successfully", deletedCount: result.count }),
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE /follow error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
