import { register } from "../../../lib/auth/register"; 

export async function POST(req) {
    try {
        const body = await req.json(); 
        const result = await register(body);
        return new Response(JSON.stringify(result), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
} 