// src/app/api/creation/posts/route.js
import { NextResponse } from "next/server";
import { uploadImageToCloudinary } from "../../../../lib/media_upload";
import { prismaSocial, prismaContent , prismaUser} from "../../../../lib/db/client";

export async function POST(request) {
  try {
    const body = await request.json();
    //console.log("Request body:", body);

    const { user_id, content, images } = body;

    // Validate required fields
    if (!user_id || !content) {
      console.error("Missing required fields: user_id or content");
      return NextResponse.json(
        { error: "Missing required fields: user_id or content" },
        { status: 400 }
      );
    }

    // Upload images if provided
    let imageURLs = [];
    if (images && images.length) {
      console.log("Uploading images...");
      imageURLs = await Promise.all(
        images.map(async (base64String, idx) => {
          try {
            const url = await uploadImageToCloudinary(base64String);
            //console.log(`Image ${idx} uploaded:`, url);
            return url;
          } catch (uploadError) {
            console.error(`Error uploading image ${idx}:`, uploadError);
            throw uploadError;
          }
        })
      );
    }

    // Create post metadata record (and connect the user)
    //console.log("Creating post metadata record...");
    const postMetadata = await prismaSocial.posts_metadata.create({
      data: {
        description: content,
        social_users: { connect: { id: user_id } },
      },
    });
    //console.log("Post metadata created:", postMetadata);

    // Create analytics record
    console.log("Creating post analytics record...");
    await prismaSocial.posts_analytics.create({
      data: {
        post_id: postMetadata.id,
        views_count: 0,
        likes_count: 0,
        shares_count: 0,
        comments_count: 0,
      },
    });
    console.log("Post analytics created.");

    // Create the actual post record in the content database
    //console.log("Creating post content record...");
    const post = await prismaContent.Post.create({
      data: {
        postID: postMetadata.id,
        content,
        imageURLs,
      },
    });
    //console.log("Post content created:", post);

    return NextResponse.json({ post, postMetadata }, { status: 200 });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}



export async function GET(request) {
  try {
    // Retrieve all post metadata from PostgreSQL (social)
    const metadata = await prismaSocial.posts_metadata.findMany({
      include: {
        posts_analytics: true,
      },
    });

    // Retrieve all post content from MongoDB (content)
    const postsContent = await prismaContent.Post.findMany();

    // Fetch all users from PostgreSQL (users)
    const users = await prismaUser.user_profile.findMany({
      select: {
        user_id: true,
        username: true,
        display_name: true,
      },
      where: {
        user_id: {
          in: metadata.map((meta) => meta.user_id),
        },
      },
    });

    // Create a lookup map for user details using user_id as key
    const userMap = users.reduce((acc, user) => {
      acc[user.user_id] = user;
      return acc;
    }, {});

    // Create a lookup map for content using postID as key
    const contentMap = postsContent.reduce((acc, post) => {
      acc[post.postID] = post;
      return acc;
    }, {});

    // Merge metadata with corresponding content and user details
    const posts = metadata.map((meta) => ({
      ...meta,
      username: userMap[meta.user_id]?.username || "Unknown",
      display_name: userMap[meta.user_id]?.display_name || "Unknown",
      contentData: contentMap[meta.id] || null,
    }));

    //console.log("Merged posts:", posts);
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
