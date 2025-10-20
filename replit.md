# DreamDot - Social Platform with E2EE Chat

## Overview
DreamDot is a full-stack social media platform featuring end-to-end encrypted chat, marketplace functionality, and community features. Built with Next.js 15, it combines the organizational structure of Reddit with the polished aesthetics of Instagram.

**Current State**: Successfully migrated from Vercel to Replit (October 20, 2025)

## Recent Changes
- **2025-10-20**: Migrated project from Vercel to Replit
  - Configured Next.js to run on port 5000 with 0.0.0.0 binding
  - Set up development workflow for Next.js app
  - Configured deployment settings for production (autoscale)
  - Updated next.config.ts to allow Replit dev origins
  - Updated .gitignore for Replit environment
  - Documented required environment variables

## Project Architecture

### Monorepo Structure (Turborepo)
```
├── apps/
│   ├── web/          # Next.js 15 frontend (main app)
│   └── chat/         # Socket.IO backend server (E2EE chat)
├── packages/
│   ├── ui/           # Shared UI components
│   ├── typescript-config/
│   └── eslint-config/
```

### Technology Stack
- **Frontend**: Next.js 15 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS 4, shadcn/ui components
- **Authentication**: NextAuth.js with Prisma adapter
- **Databases**: 
  - PostgreSQL (5 separate schemas via Prisma)
  - MongoDB (chat messages, items, posts)
- **Real-time**: Socket.IO for chat
- **Media**: ImageKit for image uploads
- **Payments**: Stripe integration (planned)
- **Encryption**: Web Crypto API / TweetNaCl for E2EE chat

### Database Architecture
The app uses a multi-database architecture with 5 PostgreSQL databases:
1. **POSTGRESS_DB_USER** - User accounts, profiles, sessions
2. **POSTGRESS_DB_SOCIAL** - Posts, comments, follows, blocking
3. **POSTGRESS_DB_ITEMS** - Marketplace items
4. **POSTGRESS_DB_COMMUNITY** - Communities, members, posts
5. **POSTGRESS_DB_AUDIT** - Admin actions, notifications, system logs

Plus MongoDB for:
- Chat conversations and messages
- Content storage

## Required Environment Variables

### Authentication & Security
- `NEXTAUTH_SECRET` - Secret for NextAuth.js (generate: `openssl rand -base64 32`)
- `JWT_SECRET` - Secret for JWT tokens in chat server

### Databases
- `MONGO_CLUSTER` - MongoDB connection string (format: mongodb+srv://...)
- `POSTGRESS_DB_USER` - PostgreSQL URL for user database
- `POSTGRESS_DB_SOCIAL` - PostgreSQL URL for social features
- `POSTGRESS_DB_ITEMS` - PostgreSQL URL for marketplace
- `POSTGRESS_DB_COMMUNITY` - PostgreSQL URL for communities
- `POSTGRESS_DB_AUDIT` - PostgreSQL URL for audit logs

### Media Services
- `IMAGEKIT_PRIVATE_KEY` - ImageKit private API key (server-side only)
- `NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY` - ImageKit public key (client-safe)
- `NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT` - ImageKit URL endpoint

### Future Requirements
- Stripe API keys (for payment processing)
- Additional service integrations as needed

## User Vision & Roadmap

### Phase 0: Migration & Setup ✅
- Replit environment configuration
- Dependencies installation
- Workflow setup
- Environment variables collection

### Phase 1: Real-Time E2EE Chat (Planned)
- Client-side encryption using Web Crypto / TweetNaCl
- Session keys via ECDH
- AES-GCM encryption for messages
- Socket.IO events: send_message, message, typing, presence, message_ack
- Media encrypted before upload (server never sees plaintext)

### Phase 2: Social Media & Marketplace (Planned)
- Posts, comments, voting system
- Follow/unfollow, like, block functionality
- Marketplace for digital items
- Creator paywall system
- Search, sorting, lazy loading
- Profile pages: `/profile` (own), `/profile/[id]` (others)

### Phase 3: Stripe Integration (Planned)
- Checkout sessions
- Webhook verification
- Credits system for user balances
- Purchase gating by credits

### Phase 4: Database Management (Planned)
- Automated DB inspection
- Orphaned reference cleanup
- Missing indexes detection
- Inconsistent field fixes
- Automated migrations

### Phase 5: UI Refinements (Planned)
- Main color: Whittier green (faded, lower saturation)
- Sidebar with communities + credit count
- Chat UI with E2EE badges and placeholders
- Reddit-inspired organization + Instagram polish

### Phase 6: Testing & Deployment (Planned)
- Smoke tests for all features
- Integration tests for critical paths
- Production deployment configuration
- Separate Socket.IO server deployment (optional VPS/Render/Railway)

### Phase 7: Security & Operations (Planned)
- Rate limiting for socket endpoints & webhooks
- File size/type validation at presign stage
- Stripe webhook signature verification
- Security audit and hardening

## Design Guidelines
- **Color Scheme**: Main green is whittier (faded, lower saturation)
- **Layout**: Sidebar with communities list and user credit count
- **Chat**: Display "🔒 E2EE" badges, use placeholders until decryption
- **Feeds**: Combine Reddit organization with Instagram polish
- **Marketplace**: Slick, polished UI with credit-based access control

## Development Notes

### Running Locally
The Next.js app runs on port 5000 and is accessible via the Replit webview. The chat server (when needed) runs on port 3001 separately.

### Chat Server
The Socket.IO chat server in `apps/chat` is configured but not currently running as a workflow. It requires:
- MongoDB connection (MONGO_CLUSTER)
- JWT_SECRET for authentication
- CORS configuration for Replit domains

To start the chat server manually:
```bash
cd apps/chat && npm run dev
```

### Deployment
Production deployment is configured for Replit Autoscale:
- Build: `cd apps/web && npm run build`
- Start: `cd apps/web && npm run start`
- Port: 5000 (configured in package.json scripts)

### Key Security Principles
1. Never send plaintext messages or media to server
2. Private keys never leave the client
3. All sensitive operations rate-limited
4. File validation before upload
5. Webhook signature verification required

## User Preferences
- Democratic approach: Question plans but execute with faith
- Focus on production-ready, tested, integrated code
- Maintain serverless-friendly architecture (Vercel-compatible)
- Separate chat service deployment allowed for scalability
- Deterministic, verifiable output preferred

## Next Steps
1. ✅ Environment variables provided by user
2. Test that all database connections work
3. Verify authentication flow
4. Begin Phase 1: E2EE Chat implementation
5. Systematic feature rollout per roadmap phases
