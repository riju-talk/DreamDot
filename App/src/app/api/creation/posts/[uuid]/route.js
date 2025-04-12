import { NextResponse } from "next/server";
import { prismaSocial, prismaContent } from "../../../../../lib/db/client";

export async function GET(request, { params }) {
    try {
        const { uuid } = await params;
        
        // Awaken the metadata from its slumber with 'await'
        const metadata = await prismaSocial.posts_metadata.findMany({
            where: { user_id: uuid },
        });

        const postIDs = metadata.map((meta) => meta.id);

        // Similarly, let postsContent awaken from its dream with 'await'
        const postsContent = await prismaContent.Post.findMany({
            where: { id: { in: postIDs } },
        });

        // Merge the metadata and content together into a beautiful composition
        const mergedPosts = metadata.map((meta) => ({
            ...meta,
            content: postsContent.find((c) => c.id === meta.id)?.content || {},
        }));

        return NextResponse.json(mergedPosts, { status: 200 });
    } catch (error) {
        console.error("Error fetching posts:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
