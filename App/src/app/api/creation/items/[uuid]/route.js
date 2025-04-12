import { NextResponse } from "next/server";
import { prismaContent, prismaItems } from "../../../../../lib/db/client";

export async function GET(request, { params }) {
    try {
        const { uuid } = await params;
        // Fetch metadata from PostgreSQL
        const metadata = await prismaItems.items.findMany({
            where: { user_id: uuid },
        });

        const itemIDs = metadata.map((item) => item.id);

        // Fetch content from MongoDB
        const contentRecords = prismaContent.Item.findMany({
            where: { id: { in: itemIDs } }, // Fixed field name
        });

        // Merge data
        const mergedItems = metadata.map((meta) => ({
            ...meta,
            contentData: contentRecords.find((c) => c.id === meta.id)?.content || {},
        }));

        return NextResponse.json(mergedItems, { status: 200 });
    } catch (error) {
        console.error("Error fetching items:", error); // Removed stray 'a'
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}