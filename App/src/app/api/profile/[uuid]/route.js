import {
    prismaUser,
    prismaSocial,
    prismaItems
  } from "../../../../lib/db/client";
  import { validate } from "uuid";
  
  export async function GET(request, { params }) {
    try {
        const { uuid } = params || {};

        if (!uuid) {
            return new Response(
                JSON.stringify({ error: "UUID is required" }),
                { status: 400 }
            );
        }

        // Validate UUID format
        if (!validate(uuid)) {
            return new Response(
                JSON.stringify({ error: "Invalid UUID format" }),
                { status: 400 }
            );
        }

        // Fetch user and related profile data
        const user = await prismaUser.users.findUnique({
            where: { id: uuid },
            include: {
                user_profile: true,
            },
        });

        if (!user) {
            return new Response(
                JSON.stringify({ error: "User not found" }),
                { status: 404 }
            );
        }

        // Structure the response to match the settings form
        const userData = {
            email: user.email || "",
            phone: user.phone || "",
            user_name: user.user_profile?.username || "",
            name: user.user_profile?.display_name || "",
            bio: user.user_profile?.bio || "",
            avatarUrl: user.user_profile?.profile_picture || "",
            website: user.user_profile?.website || "",
            dob: user.user_profile?.date_of_birth || "",
            user_type: user.user_type || "",
        };

        return new Response(JSON.stringify(userData), { status: 200 });
    } catch (error) {
        console.error("GET /profile/[uuid] Error:", error);
        return new Response(
            JSON.stringify({ error: "Internal Server Error" }),
            { status: 500 }
        );
    }
}

  
  export async function PUT(request, { params }) {
    try {
      const { uuid } = params || {};
  
      if (!uuid) {
        return new Response(
          JSON.stringify({ error: "UUID is required" }),
          { status: 400 }
        );
      }
  
      // Validate UUID format
      if (!validate(uuid)) {
        return new Response(
          JSON.stringify({ error: "Invalid UUID format" }),
          { status: 400 }
        );
      }
  
      // Parse the JSON body from the request
      const body = await request.json();
  
      // Ensure user exists
      const user = await prismaUser.users.findUnique({
        where: { id: uuid },
      });
  
      if (!user) {
        return new Response(
          JSON.stringify({ error: "User not found" }),
          { status: 404 }
        );
      }
  
      // Update user data
      await prismaUser.users.update({
        where: { id: uuid },
        data: {
          // Update only the fields you need. Example:
          email: body.email,
          phone: body.phone,
          // You can also update the user's profile or other relations if needed
        },
      });
  
      return new Response(
        JSON.stringify({ message: "User updated successfully" }),
        { status: 200 }
      );
    } catch (error) {
      console.error("PUT /profile/[uuid] Error:", error);
      return new Response(
        JSON.stringify({ error: "Internal Server Error" }),
        { status: 500 }
      );
    }
  }
  