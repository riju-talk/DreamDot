import { NextResponse } from "next/server";
import { prismaItems, prismaContent, prismaUser } from "../../../../../lib/db/client";

export async function GET(request, { params }) {
    try {
        const { uuid } = params; // Extract user_id (UUID) from the dynamic route

        if (!uuid) {
            return NextResponse.json({ error: "User ID is required" }, { status: 400 });
        }

        // Fetch all item metadata records for the specific user from PostgreSQL
        const metadata = await prismaItems.items.findMany({
            where: { user_id: uuid },
        });

        if (!metadata.length) {
            return NextResponse.json({ error: "No items found for this user" }, { status: 404 });
        }

        // Extract item IDs
        const itemIDs = metadata.map((meta) => meta.item_id);

        // Fetch corresponding content from MongoDB
        const contentRecords = await prismaContent.Item.findMany({
            where: { item_d: { in: itemIDs } },
        });

        // Fetch user details from PostgreSQL
        const user = await prismaUser.users.findUnique({
            where: { id: uuid },
            select: {
                user_profile: {
                    select: { username: true, display_name: true },
                },
            },
        });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // Build a lookup map for content using item_d as key
        const contentMap = contentRecords.reduce((acc, content) => {
            acc[content.item_d] = content;
            return acc;
        }, {});

        // Merge metadata with content and user details
        const mergedItems = metadata.map((meta) => ({
            ...meta,
            contentData: contentMap[meta.item_id] || null,
            userDetails: user.user_profile || null,
        }));

        return NextResponse.json(mergedItems, { status: 200 });
    } catch (error) {
        console.error("Error fetching items:", error); a
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
