// src/lib/search-client.ts — client-safe search utilities
import Fuse from "fuse.js";

export function searchMarketplace(items: any[], query: string): any[] {
  if (!Array.isArray(items) || !query?.trim()) return items ?? [];

  const fuse = new Fuse(items, {
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
      { name: "itemId", weight: 2.0 },
      { name: "resourceUrl", weight: 1.0 },
      { name: "mediaType", weight: 0.5 },
      { name: "content", weight: 1.0 },
    ],
  });

  return fuse.search(query).map((res) => ({
    ...res.item,
    searchScore: res.score,
  }));
}

export function highlightSearchMatch(text: string, query: string): string {
  if (!text || !query) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "gi");
  return text.replace(
    regex,
    '<mark class="bg-yellow-200 dark:bg-yellow-800">$1</mark>'
  );
}
