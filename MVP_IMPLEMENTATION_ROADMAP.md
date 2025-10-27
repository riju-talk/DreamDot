# DreamDot MVP Implementation Roadmap

**Goal**: Transform DreamDot into a deployable, functional social media platform MVP

## Status: 🚧 In Progress

---

## ✅ Phase 1: Foundation & Infrastructure (COMPLETED)

### 1.1 Environment & Build Fixes
- [x] Fixed layout TypeScript error (removed session prop)
- [x] Created BETA banner component
- [x] Added BETA banner to root layout
- [x] Fixed Mongoose model imports (Conversation, Message)
- [x] Fixed Item model imports
- [x] Created landing page placeholder components

### 1.2 OAuth Integration  
- [x] Google OAuth setup with feature flags
- [x] GitHub OAuth setup with feature flags
- [x] OAuth UI components
- [x] Documentation (OAUTH_SETUP.md, OAUTH_QUICKSTART.md)

---

## 🔄 Phase 2: Core Social Features (IN PROGRESS)

### 2.1 Posts & Feed System
**Priority: CRITICAL**

#### API Routes Needed:
- [x] `/api/posts/create` - Exists
- [ ] `/api/posts/[id]` - Get single post
- [ ] `/api/posts/feed` - Get paginated feed
- [ ] `/api/posts/[id]/like` - Toggle like
- [ ] `/api/posts/[id]/delete` - Delete post

#### Components Needed:
- [ ] `PostCard` - Display individual post with lazy-loaded images
- [ ] `CreatePostDialog` - Modal for creating posts
- [ ] `FeedList` - Infinite scroll feed with pagination
- [ ] `PostActions` - Like, comment, share buttons
- [ ] `CommentSection` - Display and add comments

#### Database Schema:
```prisma
// SOCIAL DB - posts_metadata table
model posts_metadata {
  id String @id @default(uuid())
  user_id String
  content String?
  media_urls Json?
  created_at DateTime
  updated_at DateTime
  likes_count Int @default(0)
  comments_count Int @default(0)
}
```

### 2.2 Likes System
**Priority: HIGH**

#### API Routes:
- [ ] POST `/api/social/like` - Toggle like on post/comment
- [ ] GET `/api/social/likes/[id]` - Get likes for item

#### Database:
```prisma
// SOCIAL DB
model likes {
  id String @id
  user_id String
  post_id String?
  comment_id String?
  created_at DateTime
}
```

### 2.3 Comments System
**Priority: HIGH**

#### API Routes:
- [x] `/api/social/comments` - Exists (needs verification)
- [ ] GET `/api/posts/[id]/comments` - Get comments with pagination

#### Components:
- [ ] `CommentList` - Display comments with lazy loading
- [ ] `CommentForm` - Add new comment
- [ ] `CommentCard` - Individual comment display

### 2.4 Follow System
**Priority: HIGH**

#### API Routes:
- [x] `/api/social/follow` - Exists
- [ ] GET `/api/social/followers/[userId]` - Get followers list
- [ ] GET `/api/social/following/[userId]` - Get following list

---

## 🔄 Phase 3: Marketplace & Discovery (NEXT)

### 3.1 Marketplace
**Status**: Partial implementation exists

#### What Exists:
- Basic page structure
- `fetchItems()` function in `lib/mongoose/items.ts`
- MarketplaceHero component
- Category filtering

#### What's Needed:
- [ ] Implement infinite scroll
- [ ] Add search functionality
- [ ] Create item detail pages
- [ ] Add filters (price, date, popularity)
- [ ] Implement lazy image loading

#### Components to Create/Fix:
```typescript
// MarketplaceGrid.tsx - Main grid with infinite scroll
// ItemCard.tsx - Individual item card
// ItemFilters.tsx - Filter sidebar
// ItemDetail.tsx - Full item view page
```

### 3.2 Discovery Page
**Status**: Basic structure exists

#### Features to Implement:
- [ ] User search with autocomplete
- [ ] Content search (posts, items)
- [ ] Trending hashtags (functional)
- [ ] Suggested creators based on interests
- [ ] Filter by content type

---

## 🔄 Phase 4: Chat with Multimedia (CRITICAL)

### 4.1 Socket.IO Chat Server
**Location**: `apps/chat/server.js`

#### Current Status:
- ✅ Basic structure exists
- ✅ Conversation endpoints
- ✅ Message endpoints
- ❌ Image upload not implemented
- ❌ File sharing not implemented

#### Implementation Plan:
```javascript
// Add to chat server:
1. ImageKit integration for image uploads
2. File upload endpoint with validation
3. Socket events for media sharing
4. Message type support (text, image, file, audio)
```

### 4.2 Frontend Chat Components

#### Components Needed:
- [ ] `ChatList` - List of conversations
- [ ] `ChatWindow` - Active conversation view
- [ ] `MessageBubble` - Individual message with media support
- [ ] `MessageInput` - Text + file upload
- [ ] `ImagePreview` - Preview before sending
- [ ] `FileUpload` - Drag & drop support

#### Features:
- Real-time messaging via Socket.IO
- Image upload (compress before send)
- File upload (PDF, docs, etc.) - max 10MB
- Typing indicators
- Read receipts
- Message timestamps

---

## Phase 5: User Profiles & Settings

### 5.1 Profile Pages
- [ ] Public profile view
- [ ] Edit profile functionality
- [ ] User posts grid
- [ ] User items grid
- [ ] Follow/unfollow button
- [ ] Stats (followers, following, posts)

### 5.2 Settings Page
- [ ] Account settings
- [ ] Privacy settings
- [ ] Notification preferences
- [ ] Theme selection (if applicable)

---

## Phase 6: Performance & Optimization

### 6.1 Lazy Loading
**Apply to all lists/grids:**
- Feed posts
- Marketplace items
- Comments
- User lists
- Search results

**Implementation**:
```typescript
// Use react-intersection-observer or native IntersectionObserver
// Implement virtual scrolling for very long lists
// Lazy load images with blur placeholder
```

### 6.2 Image Optimization
- [ ] Implement ImageKit transformations
- [ ] Add blur placeholders
- [ ] Responsive images
- [ ] WebP format where supported

### 6.3 Code Splitting
- [ ] Split large components
- [ ] Dynamic imports for heavy features
- [ ] Reduce initial bundle size

---

## Phase 7: Vercel Deployment

### 7.1 Build Configuration

#### vercel.json:
```json
{
  "buildCommand": "cd apps/web && npm run build",
  "devCommand": "cd apps/web && npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "outputDirectory": "apps/web/.next"
}
```

### 7.2 Environment Variables
**Required in Vercel Dashboard:**
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`
- `JWT_SECRET`
- `MONGO_CLUSTER`
- `POSTGRESS_DB_*` (all 5)
- `IMAGEKIT_*`
- `NEXT_PUBLIC_CHAT_SERVER_URL`
- `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` (if OAuth enabled)
- `GITHUB_ID`, `GITHUB_SECRET` (if OAuth enabled)

### 7.3 External Services
- **Chat Server**: Deploy to Railway/Render
- **Payment Service**: Skip for MVP (as requested)
- **MongoDB**: Use Atlas (already configured)
- **PostgreSQL**: Use Neon/Supabase (already configured)

### 7.4 Build Checks
- [ ] Fix all TypeScript errors
- [ ] Ensure all imports resolve
- [ ] Test production build locally
- [ ] Verify all API routes work
- [ ] Test with production databases

---

## Implementation Priority Order

### Week 1: Core Functionality
1. ✅ Fix build issues
2. ✅ Add BETA banner
3. 🔄 Implement Posts API (create, get, delete)
4. 🔄 Implement Likes API
5. 🔄 Implement Comments API
6. 🔄 Create PostCard component with lazy images
7. 🔄 Implement infinite scroll feed

### Week 2: Social Features
1. Verify Follow/Unfollow API
2. Implement user profiles
3. Add notifications
4. Complete Discovery page search
5. Test all social interactions

### Week 3: Marketplace & Chat
1. Complete Marketplace with search
2. Implement chat with multimedia
3. Add image upload to posts
4. Test file sharing in chat

### Week 4: Polish & Deploy
1. Performance optimization
2. Lazy loading everywhere
3. Fix any remaining bugs
4. Deploy to Vercel
5. Deploy chat server
6. End-to-end testing

---

## Critical Components Status

### Completed:
- [x] BetaBanner
- [x] OAuthButtons
- [x] Landing page components (placeholders)

### In Progress:
- [ ] PostCard
- [ ] FeedList
- [ ] CreatePostDialog
- [ ] UnifiedFeed (exists but needs work)

### Not Started:
- [ ] ChatWindow
- [ ] MessageBubble
- [ ] ItemGrid (marketplace)
- [ ] UserSearch
- [ ] NotificationCenter

---

## Testing Checklist

### Authentication:
- [ ] Sign up with email
- [ ] Sign in with email
- [ ] Sign in with Google (if enabled)
- [ ] Sign in with GitHub (if enabled)
- [ ] Sign out

### Posts:
- [ ] Create text post
- [ ] Create post with image
- [ ] Like a post
- [ ] Unlike a post
- [ ] Comment on post
- [ ] Delete own post
- [ ] View post details

### Social:
- [ ] Follow user
- [ ] Unfollow user
- [ ] View user profile
- [ ] See follower/following lists
- [ ] Block user (if implemented)

### Marketplace:
- [ ] Browse items
- [ ] Search items
- [ ] Filter by category
- [ ] View item details
- [ ] (Purchase - skip for MVP)

### Chat:
- [ ] Start conversation
- [ ] Send text message
- [ ] Send image
- [ ] Send file
- [ ] See typing indicator
- [ ] Receive real-time messages

### Discovery:
- [ ] Search users
- [ ] Search posts
- [ ] Browse by hashtag
- [ ] See trending content

---

## Known Issues to Fix

1. **TypeScript Build Error** - ✅ FIXED (removed session prop)
2. **Missing Mongoose Models** - ✅ FIXED (created Conversation, Message)
3. **Landing Components** - ✅ FIXED (created placeholders)
4. **Chat not functional** - 🔄 IN PROGRESS
5. **Marketplace search not working** - 🔄 NEEDS FIX
6. **No lazy loading** - 🔄 TO IMPLEMENT
7. **Images not optimized** - 🔄 TO IMPLEMENT

---

## Next Immediate Steps

1. **Build Test** - Verify the app builds successfully
2. **API Verification** - Test all existing API routes
3. **Component Audit** - Check which components exist vs need creation
4. **Database Seed** - Create sample data for testing
5. **Socket.IO Test** - Verify chat server connects

---

**This roadmap will be updated as implementation progresses.**
