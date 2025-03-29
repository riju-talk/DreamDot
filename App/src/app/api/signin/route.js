import { signIn } from '../../../lib/auth/login'; 

// Export the POST handler for the /api/signin route
export async function POST(req) {
    try {
        // Parse the request body
        const data = await req.json();

        // Call the signIn function
        const result = await signIn(data);

        // Return a success response
        return new Response(JSON.stringify(result), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        // Return an error response
        return new Response(JSON.stringify({ error: error.message }), {
            status: 400, // Bad Request for user errors, or 500 for server errors
            headers: { 'Content-Type': 'application/json' },
        });
    }
}