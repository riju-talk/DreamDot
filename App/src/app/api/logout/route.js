// app/api/logout/route.js
import { prismaUser } from "../../../lib/db/client";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    // const sessionToken = cookies().get("ugid")?.value; // Use cookies

    const authHeader = req.headers.get('authorization');
    const sessionToken = authHeader.split(' ')[1];
    
    if (!sessionToken) {
    console.log(sessionToken)
      return new Response(JSON.stringify({ message: "Unauthorized: No session token" }), { status: 401 });
    }

    // Revoke session in the database
    await prismaUser.user_sessions.updateMany({
      where: { token: sessionToken },
      data: { is_revoked: true },
    });

    // Clear session token cookie
    // cookies().delete("ugid");

    return new Response(JSON.stringify({ message: "Logout successful" }), { status: 200 });
  } catch (error) {
    console.error("Logout error:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), { status: 500 });
  }
}
