import { register } from "../../../lib/auth/register"; // Adjusted path (see step 2)

export async function POST(req) {
    try {
        const body = await req.json(); // Parse the request body
        const result = await register(body);
        return new Response(JSON.stringify(result), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
} 