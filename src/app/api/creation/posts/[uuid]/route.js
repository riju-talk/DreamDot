import { NextResponse } from "next/server";
import { prismaSocial, prismaContent } from "../../../../../lib/db/client";

export async function GET(request, { params }) {
  try {
    const { uuid } = await params;

    // Fetch metadata for posts by the specific user
    const metadata = await prismaSocial.posts_metadata.findMany({
      where: { user_id: uuid },
    });

    // Extract post IDs (UUID strings)
    const postIDs = metadata.map((meta) => meta.id);

    // Fetch content using postID (string) instead of id (ObjectID)
    const postsContent = await prismaContent.Post.findMany({
      where: { postID: { in: postIDs } },
    });

    // Merge metadata and content
    const mergedPosts = metadata.map((meta) => ({
      ...meta,
      content: postsContent.find((c) => c.postID === meta.id) || {},
    }));

    return NextResponse.json(mergedPosts, { status: 200 });
  } catch (error) {
    console.error("Error fetching user-specific posts:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}