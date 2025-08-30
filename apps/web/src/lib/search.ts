// src/lib/search.ts — server-only Fuse.js search over Prisma results
import { prismaUser, prismaItem } from "@/lib/db";
import Fuse from "fuse.js";

export type SearchResult = {
  type: "profile" | "marketplace";
  id: string;
  title: string;
  description?: string;
  image?: string;
  url: string;
  score?: number;
  metadata?: Record<string, any>;
};

// --- alias map: try snake_case and camelCase variants, nested, and common fallbacks
const aliasMap: Record<string, string[]> = {
  username: ["username", "userName", "handle"],
  display_name: ["display_name", "displayName", "displayNameRaw", "name"],
  bio: ["bio", "about", "description"],
  avatar_url: ["avatar_url", "avatarUrl", "avatar"],
  location: ["location", "city", "country"],
  skills: ["skills", "tags"],

  title: ["title", "name"],
  description: ["description", "summary", "body"],
  category: ["category", "type"],
  tags: ["tags", "labels"],
  "creator.username": ["creator.username", "creator.userName", "creatorName", "creator.name"],
};

// Helper that returns a string or array — uses Fuse's default getFn under the hood
function aliasGetFn(obj: any, path: string) {
  const candidates = aliasMap[path] ?? [path];
  for (const p of candidates) {
    try {
      const v = Fuse.config.getFn(obj, p);
      if (v === undefined || v === null) continue;
      if (Array.isArray(v)) {
        if (v.length) return v;
        continue;
      }
      const s = String(v).trim();
      if (s.length) return s;
    } catch {
      // ignore and try next candidate
    }
  }
  return "";
}

// PROFILE options — permissive enough for partial display name match
export const profileSearchOptions: Fuse.IFuseOptions<any> = {
  includeScore: true,
  threshold: 0.55,         // tuned: not too strict, not too loose
  minMatchCharLength: 1,
  ignoreLocation: true,
  keys: [
    { name: "username", weight: 3.0 },
    { name: "display_name", weight: 2.2 },
    { name: "bio", weight: 1.0 },
    { name: "location", weight: 0.8 },
    { name: "skills", weight: 1.2 },
  ],
  getFn: (obj, path) => {
    if (path === "skills") {
      const v = aliasGetFn(obj, path);
      if (Array.isArray(v)) return v;
      if (typeof v === "string") return v.split(",").map((s: string) => s.trim()).filter(Boolean);
      return [];
    }
    return aliasGetFn(obj, path);
  },
};

// MARKETPLACE options — slightly stricter for relevance
export const marketplaceSearchOptions: Fuse.IFuseOptions<any> = {
  includeScore: true,
  threshold: 0.4,
  minMatchCharLength: 2,
  ignoreLocation: true,
  keys: [
    { name: "title", weight: 3.0 },
    { name: "description", weight: 2.0 },
    { name: "category", weight: 1.5 },
    { name: "tags", weight: 1.5 },
    { name: "creator.username", weight: 1.0 },
  ],
  getFn: (obj, path) => {
    if (path === "tags") {
      const v = aliasGetFn(obj, path);
      return Array.isArray(v) ? v : typeof v === "string" ? v.split(",").map((s: string) => s.trim()) : [];
    }
    return aliasGetFn(obj, path);
  },
};

function createSearchInstance<T>(data: T[], options: Fuse.IFuseOptions<T>) {
  return new Fuse(data, options);
}

export async function unifiedSearch(query: string, limit = 10): Promise<SearchResult[]> {
  if (!query || !query.trim()) return [];

  // --- Fetch users from Prisma (server-side)
  const users = await prismaUser.user_profile.findMany({
    select: {
      user_id: true,
      username: true,
      display_name: true,
      bio: true,
      avatar_url: true,
      location: true,
      skills: true,
    },
  });

  // DEBUG: if you need to inspect the shape once
  // console.log("SEARCH: first users:", users.slice(0, 10).map(u => ({ user_id: u.user_id, username: u.username, display_name: u.display_name })));

  const userFuse = createSearchInstance(users, profileSearchOptions);
  const userResults = userFuse.search(query).slice(0, limit * 2);

  // --- Fetch marketplace items
  const items = await prismaItem.market_place.findMany({
    include: { creator: { select: { username: true } } },
    take: 300,
  });
  const itemFuse = createSearchInstance(items, marketplaceSearchOptions);
  const itemResults = itemFuse.search(query).slice(0, limit * 2);

  // --- Combine results (normalize id fallbacks)
  const results: SearchResult[] = [
    ...userResults.map(res => {
      const item = res.item as any;
      const id = item.user_id ?? item.id ?? String(item.userId ?? "");
      return {
        type: "profile" as const,
        id,
        title: item.display_name ?? item.username ?? id,
        description: item.bio ?? undefined,
        image: item.avatar_url ?? item.avatarUrl ?? undefined,
        url: `/profile/${id}`,
        score: res.score,
        metadata: { username: item.username, location: item.location },
      };
    }),
    ...itemResults.map((res: any) => {
      const item = res.item;
      const id = item.id ?? item.item_id ?? String(item.itemId ?? "");
      return {
        type: "marketplace" as const,
        id,
        title: item.title ?? item.name ?? id,
        description: item.description ?? undefined,
        image: item.image_url ?? item.imageUrl ?? undefined,
        url: `/items/${id}`,
        score: res.score,
        metadata: { price: item.price, category: item.category, creator: item.creator?.username },
      };
    }),
  ];

  // lower score = better; undefined score => treat as worst (1)
  return results.sort((a, b) => (a.score ?? 1) - (b.score ?? 1)).slice(0, limit);
}

// Quick wrapper that keeps score + metadata for UI
export async function quickSearch(query: string, limit = 5) {
  const res = await unifiedSearch(query, limit);
  return res.map(r => ({ id: r.id, type: r.type, title: r.title, url: r.url, image: r.image, score: r.score, metadata: r.metadata }));
}

// highlight util (unchanged)
export function highlightMatches(text: string, query: string) {
  if (!text || !query) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  return text.replace(regex, '<mark class="bg-yellow-200 dark:bg-yellow-800">$1</mark>');
}
