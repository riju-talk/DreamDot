import { NextResponse } from "next/server";
import { prismaContent, prismaItems } from "../../../../../lib/db/client";

export async function GET(request, { params }) {
  try {
    const { uuid } = await params;

    // Fetch metadata from PostgreSQL
    const metadata = await prismaItems.items.findMany({
      where: { user_id: uuid },
    });

    // Extract item IDs (UUID strings)
    const itemIDs = metadata.map((item) => item.item_id);

    // Fetch content from MongoDB using item_d
    const contentRecords = await prismaContent.Item.findMany({
      where: { item_d: { in: itemIDs } },
    });

    // Merge data
    const mergedItems = metadata.map((meta) => ({
      ...meta,
      contentData: contentRecords.find((c) => c.item_d === meta.item_id) || {},
    }));

    return NextResponse.json(mergedItems, { status: 200 });
  } catch (error) {
    console.error("Error fetching items:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}