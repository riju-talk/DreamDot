// block.js
import { prismaSocial } from "../../../../lib/db/client";
import { validate } from "uuid";
// POST: Create a block record (i.e. block a user)
export async function POST(request) {
    try {
        const { blocker_id, blocked_id } = await request.json();
        if (!blocker_id || !blocked_id) {
            return new Response(JSON.stringify({ error: "blocker_id and blocked_id are required" }), { status: 400 });
        }
        if (!validate(blocker_id) || !validate(blocked_id)) {
            return new Response(JSON.stringify({ error: "Invalid UUID format" }), { status: 400 });
        }
        const block = await prismaSocial.blocking.create({
            data: {
                blocker_id,
                blocked_id,
            },
        });
        return new Response(JSON.stringify(block), { status: 201 });
    }
    catch (error) {
        console.error("POST /block error:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}
// DELETE: Remove a block record (i.e. unblock a user)
export async function DELETE(request) {
    try {
        const { blocker_id, blocked_id } = await request.json();
        if (!blocker_id || !blocked_id) {
            return new Response(JSON.stringify({ error: "blocker_id and blocked_id are required" }), { status: 400 });
        }
        if (!validate(blocker_id) || !validate(blocked_id)) {
            return new Response(JSON.stringify({ error: "Invalid UUID format" }), { status: 400 });
        }
        const result = await prismaSocial.blocking.deleteMany({
            where: { blocker_id, blocked_id },
        });
        return new Response(JSON.stringify({ message: "Unblocked successfully", deletedCount: result.count }), { status: 200 });
    }
    catch (error) {
        console.error("DELETE /block error:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}
export async function GET(request) {
    try {
        const url = new URL(request.url);
        const blocker_id = url.searchParams.get("blocker_id");
        const blocked_id = url.searchParams.get("blocked_id");
        if (!blocker_id || !blocked_id) {
            return new Response(JSON.stringify({ error: "blocker_id and blocked_id are required" }), { status: 400 });
        }
        if (!validate(blocker_id) || !validate(blocked_id)) {
            return new Response(JSON.stringify({ error: "Invalid UUID format" }), { status: 400 });
        }
        // Check if the block relationship exists
        const blockRecord = await prismaSocial.blocking.findFirst({
            where: {
                blocker_id,
                blocked_id,
            },
        });
        const isBlocked = !!blockRecord; // Convert to boolean: true if record exists, false if not
        return new Response(JSON.stringify({ isBlocked }), { status: 200 });
    }
    catch (error) {
        console.error("GET /block error:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}
//# sourceMappingURL=route.js.map