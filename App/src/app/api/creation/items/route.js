import { NextResponse } from "next/server";
import { uploadImageToCloudinary } from "../../../../lib/media_upload";
import { prismaItems, prismaContent, prismaUser } from "../../../../lib/db/client";

export async function POST(request) {
    try {
        // Parse the JSON body
        console.log(request)
        const body = await request.json();
        const {
            user_id,
            title,
            description,
            category,
            price,
            monetization_type,
            text_content,
            images,
            thumbnail, // For capturing thumbnail
        } = body;

        // Ensure required fields are provided
        if (!user_id || !title || !description || !price) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Upload artwork images to Cloudinary, if provided.
        let art_urls = [];
        if (images && images.length > 0) {
            art_urls = await Promise.all(
                images.map(async (filePath) => await uploadImageToCloudinary(filePath))
            );
        }

        // Upload thumbnail separately
        let thumbnail_url = "";
        if (thumbnail) {
            thumbnail_url = await uploadImageToCloudinary(thumbnail);
        }

        // Step 1: Insert into `items` table
        const itemMetadata = await prismaItems.items.create({
            data: {
                user_id,
                title,
                description,
                category,
                price,
                monetization_type,
            },
        });

        // Step 2: If monetization_type is not "free", insert into `monetization` table
        if (monetization_type !== "free") {
            await prismaItems.monetization.create({
                data: {
                    item_id: itemMetadata.item_id,
                    type: monetization_type,
                    price,
                },
            });
        }

        // Step 3: Check if `user_id` already exists in `collections`
        const existingCollection = await prismaItems.collections.findFirst({
            where: { user_id },
        });

        // If user does not exist in collections, insert them
        if (!existingCollection) {
            await prismaItems.collections.create({
                data: {
                    user_id,
                    name: "Default Collection",
                    description: "User's default collection",
                },
            });
        }

        // Step 4: Insert into `Item` (content database)
        const itemContent = await prismaContent.Item.create({
            data: {
                item_d: itemMetadata.item_id,
                text_content,
                art_urls,
                thumbnail: thumbnail_url,
            },
        });
        console.log("Item created successfully")
        //console.log("Item created successfully:", itemMetadata, itemContent);
        return NextResponse.json({ itemMetadata, itemContent }, { status: 200 });
    } catch (error) {
        console.error("Error creating item:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function GET(request) {
    try {
        // Step 1: Fetch all item metadata records from PostgreSQL.
        const metadata = await prismaItems.items.findMany();

        // Step 2: Fetch all content records from MongoDB.
        const contentRecords = await prismaContent.Item.findMany();

        // Build a lookup map for content using item_d as key.
        const contentMap = contentRecords.reduce((acc, content) => {
            acc[content.item_d] = content;
            return acc;
        }, {});

        // Step 3: For each metadata record, fetch user details (username and display_name) 
        // from prismaUser (assumed to be in the user_d schema).
        const mergedItems = await Promise.all(
            metadata.map(async (meta) => {
                // Retrieve user details (using the user_profile relation)
                const user = await prismaUser.users.findUnique({
                    where: { id: meta.user_id },
                    select: {
                        user_profile: {
                            select: {
                                username: true,
                                display_name: true,
                            },
                        },
                    },
                });
                return {
                    ...meta,
                    contentData: contentMap[meta.item_id] || null,
                    userDetails: user?.user_profile || null,
                };
            })
        );
        //console.log("Merged items:", mergedItems);
        return NextResponse.json(mergedItems, { status: 200 });
    } catch (error) {
        console.error("Error fetching items:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}