// lib/search/searchUsers.ts
import { PrismaClient } from "@prisma/client";
import Fuse from "fuse.js";

const prisma = new PrismaClient();

export async function searchUsers(query: string) {
  // Step 1: Get all user profiles
  const allProfiles = await prisma.user_profile.findMany({
    select: {
      user_id: true,
      username: true,
      display_name: true,
      bio: true,
      avatar_url: true,
    },
  });

  // Step 2: Create Fuse instance
  const fuse = new Fuse(allProfiles, {
    keys: ["username", "display_name", "bio"],
    threshold: 0.3, // lower = stricter
  });

  // Step 3: Search
  const result = fuse.search(query);

  // Step 4: Extract matched users
  const matchedUsers = result.map(res => res.item);

  return matchedUsers;
}
