// lib/search.ts - Enhanced search functionality with Fuse.js
import { prismaUser } from "@/lib/db";
import Fuse from "fuse.js";

const prisma = prismaUser;
export const marketplaceSearchOptions = {
  includeScore: true,
  threshold: 0.3, // Lower threshold for more precise matches
  keys: [
    { name: 'itemId', weight: 2 },
    { name: 'description', weight: 1.5 },
    { name: 'category', weight: 1.2 },
    { name: 'tags', weight: 1 },
    { name: 'creatorName', weight: 0.8 }
  ],
  minMatchCharLength: 2,
  ignoreLocation: true,
  getFn: (obj: any, path: string) => {
    // Custom getter to handle nested properties and arrays
    if (path === 'creatorName') {
      return obj.creator?.name || obj.resourceUrl || ''
    }
    if (path === 'tags') {
      return obj.tags || []
    }
    return Fuse.config.getFn(obj, path)
  }
}

export const profileSearchOptions = {
  includeScore: true,
  threshold: 0.4, // Slightly higher threshold for user search
  keys: [
    { name: 'username', weight: 2.5 },
    { name: 'display_name', weight: 2 },
    { name: 'bio', weight: 1 },
    { name: 'location', weight: 0.8 },
    { name: 'skills', weight: 1.2 }
  ],
  minMatchCharLength: 1,
  ignoreLocation: true,
  getFn: (obj: any, path: string) => {
    if (path === 'handle' && obj.username) {
      return obj.username.startsWith('@') ? obj.username : `@${obj.username}`
    }
    if (path === 'skills') {
      return Array.isArray(obj.skills) ? obj.skills : []
    }
    return Fuse.config.getFn(obj, path)
  }
}

// Conversation search configuration
export const conversationSearchOptions = {
  includeScore: true,
  threshold: 0.5,
  keys: [
    { name: 'name', weight: 2 },
    { name: 'participants.name', weight: 1.5 },
    { name: 'participants.handle', weight: 1.5 },
    { name: 'lastMessage.content', weight: 1 }
  ],
  minMatchCharLength: 1,
  ignoreLocation: true
}

// Enhanced user search with database query
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

  // Step 2: Create Fuse instance with enhanced options
  const fuse = new Fuse(allProfiles, profileSearchOptions);

  // Step 3: Search
  const result = fuse.search(query);

  // Step 4: Extract matched users with scores
  const matchedUsers = result.map(res => ({
    ...res.item,
    searchScore: res.score
  }));

  return matchedUsers;
}

// Generic search function
export function createSearchInstance<T>(data: T[], options: Fuse.IFuseOptions<T>) {
  return new Fuse(data, options)
}

// Marketplace search function
export function searchMarketplace(items: any[], query: string) {
  if (!query.trim()) return items
  
  const fuse = createSearchInstance(items, marketplaceSearchOptions)
  const results = fuse.search(query)
  
  return results.map(result => ({
    ...result.item,
    searchScore: result.score
  }))
}

// Profile search function (for frontend arrays)
export function searchProfiles(profiles: any[], query: string) {
  if (!query.trim()) return profiles
  
  const fuse = createSearchInstance(profiles, profileSearchOptions)
  const results = fuse.search(query)
  
  return results.map(result => ({
    ...result.item,
    searchScore: result.score
  }))
}

// Conversation search function (for chat sidebar)
export function searchConversations(conversations: any[], query: string) {
  if (!query.trim()) return conversations
  
  const fuse = createSearchInstance(conversations, conversationSearchOptions)
  const results = fuse.search(query)
  
  return results.map(result => ({
    ...result.item,
    searchScore: result.score
  }))
}

// Utility to highlight search matches
export function highlightSearchMatch(text: string, query: string): string {
  if (!query.trim()) return text
  
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi')
  return text.replace(regex, '<mark class="bg-yellow-200 dark:bg-yellow-800">$1</mark>')
}

// Utility to extract search suggestions
export function getSearchSuggestions(items: any[], query: string, maxSuggestions = 5) {
  if (!query.trim()) return []
  
  const fuse = createSearchInstance(items, {
    ...marketplaceSearchOptions,
    threshold: 0.6, // Higher threshold for suggestions
  })
  
  const results = fuse.search(query)
  
  return results
    .slice(0, maxSuggestions)
    .map(result => ({
      suggestion: result.item.itemId || result.item.name || result.item.title,
      score: result.score,
      item: result.item
    }))
}
