"use server";

import { fetchPosts } from "@/lib/mongoose/posts";
import { connectToDatabase } from "@/lib/mongoose/connection";
import { Post } from "@repo/database-mongo";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

export async function getFeedPosts(page = 1, limit = 10) {
    try {
        const session = await getServerSession();
        // In a real feed, we might filter by following, but for now fetch all or user specific
        // Using fetchPosts from lib
        const result = await fetchPosts({ page, limit });
        return { success: true, ...result };
    } catch (error) {
        console.error("Error fetching feed:", error);
        return { success: false, error: "Failed to fetch posts" };
    }
}

export async function createPost(formData: FormData) {
    try {
        const session = await getServerSession();
        if (!session?.user?.email) { // Using email or whatever identifier session provides
            // Session likely has id if customized, but default next-auth might not. 
            // Assuming session object structure.
            return { success: false, error: "Unauthorized" };
        }

        const content = formData.get("content") as string;
        const userId = (session.user as any).id; // Need to ensure session has ID

        if (!content) {
            return { success: false, error: "Content is required" };
        }

        // STEP 1: Create SQL metadata FIRST to get the UUID
        const { prismaSocial } = await import("@/lib/db");

        const sqlPost = await prismaSocial.posts_metadata.create({
            data: {
                user_id: userId,
                description: content.substring(0, 500), // Store content as fallback
                created_at: new Date(),
                updated_at: new Date(),
            }
        });

        const sqlId = sqlPost.id;

        // STEP 2: Create MongoDB post WITH the SQL UUID
        try {
            await connectToDatabase();

            const newPost = new Post({
                userId,
                sqlId,
                content,
                visibility: true,
                createdAt: new Date(),
                likes: [],
                comments: []
            });

            await newPost.save();
        } catch (mongoError) {
            // MongoDB save failed, but SQL is created
        }

        revalidatePath("/feed");
        return { success: true, data: sqlId };

    } catch (error) {
        console.error("Error creating post:", error);
        return { success: false, error: "Failed to create post" };
    }
}

import { Item } from "@repo/database-mongo";

export async function createItem(formData: FormData) {
    try {
        const session = await getServerSession();
        if (!session?.user?.email) {
            return { success: false, error: "Unauthorized" };
        }

        const userId = (session.user as any).id;
        const title = formData.get("title") as string;
        const description = formData.get("description") as string;
        const category = formData.get("category") as string;
        const priceStr = formData.get("price") as string;
        const price = parseFloat(priceStr) || 0;

        if (!title || !description) {
            return { success: false, error: "Title and description are required" };
        }

        await connectToDatabase();

        const newItem = new Item({
            userId,
            title,
            description,
            category,
            price,
            createdAt: new Date(),
        });

        await newItem.save();

        revalidatePath("/marketplace");
        return { success: true, data: newItem._id.toString() };

    } catch (error) {
        console.error("Error creating item:", error);
        return { success: false, error: "Failed to create item" };
    }
}
