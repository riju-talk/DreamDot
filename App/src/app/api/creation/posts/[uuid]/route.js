import { NextResponse } from "next/server";
import { prismaSocial, prismaContent , prismaUser} from "../../../../../lib/db/client";

export async function GET(request, props) {
    const params = await props.params;
    try {
        const { uuid } = params; // Extract user_id (UUID) from dynamic route

        if (!uuid) {
            return NextResponse.json({ error: "User ID is required" }, { status: 400 });
        }

        // Retrieve post metadata for the specific user from PostgreSQL (social)
        const metadata = await prismaSocial.posts_metadata.findMany({
            where: { user_id: uuid },
            include: { posts_analytics: true },
        });

        // Retrieve post content from MongoDB (content)
        const postIDs = metadata.map((meta) => meta.id);
        const postsContent = await prismaContent.Post.findMany({
            where: { postID: { in: postIDs } },
        });

        // Fetch user details from PostgreSQL (users)
        const user = await prismaUser.user_profile.findUnique({
            where: { user_id: uuid },
            select: { user_id: true, username: true, display_name: true },
        });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // Create a lookup map for content using postID as key
        const contentMap = postsContent.reduce((acc, post) => {
            acc[post.postID] = post;
            return acc;
        }, {});

        // Merge metadata with corresponding content and user details
        const posts = metadata.map((meta) => ({
            ...meta,
            username: user.username,
            display_name: user.display_name,
            contentData: contentMap[meta.id] || null,
        }));
        //console.log("Merged posts:", posts);
        return NextResponse.json(posts, { status: 200 });
    } catch (error) {
        console.error("Error fetching posts:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
