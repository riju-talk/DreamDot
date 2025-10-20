# DreamDot - Application Architecture

## Overview
DreamDot is a full-stack social media platform with marketplace functionality, end-to-end encrypted chat, and integrated payment system. Built as a Turborepo monorepo with Next.js, it provides a unified platform for creators to share and monetize their digital content.

## Monorepo Structure

```
dreamdot/
├── apps/
│   ├── web/              # Next.js 15 frontend (main application)
│   ├── chat/             # Socket.IO server (E2EE chat)
│   └── payment/          # Payment service with Stripe
├── packages/
│   ├── ui/               # Shared UI components
│   ├── typescript-config/# Shared TypeScript configurations
│   └── eslint-config/    # Shared ESLint configurations
└── [config files]
```

## Technology Stack

### Frontend (apps/web)
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (Radix UI primitives)
- **State Management**: React hooks
- **Authentication**: NextAuth.js
- **Rich Text**: Quill.js
- **Media Upload**: ImageKit
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Notifications**: Sonner

### Backend Services

#### Chat Server (apps/chat)
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Real-time**: Socket.IO
- **Database**: MongoDB (messages, conversations)
- **Authentication**: JWT tokens
- **Encryption**: Web Crypto API, TweetNaCl (E2EE)

#### Payment Server (apps/payment)
- **Runtime**: Node.js
- **Framework**: Express.js
- **Payment Gateway**: Stripe
- **Database**: MongoDB (transactions)
- **Authentication**: JWT tokens

## Database Architecture

### Multi-Database Approach
DreamDot uses a hybrid database architecture with PostgreSQL and MongoDB:

#### PostgreSQL Databases (5 separate schemas)
1. **USER Database** (`POSTGRESS_DB_USER`)
   - User accounts, profiles, sessions
   - Authentication and security
   - User analytics and certificates
   - Password reset tokens

2. **SOCIAL Database** (`POSTGRESS_DB_SOCIAL`)
   - Posts metadata
   - Comments and likes
   - Following relationships
   - Blocking functionality
   - Notifications
   - Reported content

3. **ITEMS Database** (`POSTGRESS_DB_ITEMS`)
   - Item metadata
   - Favorites
   - Reviews
   - Transactions
   - Monetization settings
   - Collections

4. **COMMUNITY Database** (`POSTGRESS_DB_COMMUNITY`)
   - Community information
   - Members and roles
   - Community posts
   - Join requests

5. **AUDIT Database** (`POSTGRESS_DB_AUDIT`)
   - Admin actions
   - System notifications
   - Audit trails

#### MongoDB Collections
- **Conversations**: Chat conversation metadata
- **Messages**: E2EE chat messages (encrypted content)
- **Items**: Full item content (digital files)
- **Writings**: Blog posts, articles, stories
- **DigitalArt**: Images, illustrations
- **Comics**: Webcomics, manga, graphic novels
- **Transactions**: Payment transaction details

## Core Features

### 1. Social Media Platform
- **Posts**: Create, edit, delete posts with media
- **Comments**: Threaded comments on posts
- **Likes**: Like posts and comments
- **Following**: Follow/unfollow other users
- **Blocking**: Block unwanted users
- **Feeds**: Personalized content feeds
- **Profiles**: User profiles with customization
- **Search**: Search for users, posts, and items

### 2. Marketplace
- **Digital Items**: Upload and sell digital content
- **Writings**: Publish articles, blogs, stories
- **Digital Art**: Sell illustrations, photography
- **Comics**: Publish webcomics and manga
- **Monetization**: Free, one-time purchase, or subscription
- **Categories**: Organize items by type and tags
- **Reviews**: Rate and review purchased items

### 3. End-to-End Encrypted Chat
- **Direct Messages**: 1-on-1 encrypted conversations
- **Community Chats**: Group conversations
- **Media Sharing**: Send encrypted images, videos, audio
- **Typing Indicators**: Real-time typing status
- **Message Status**: Delivery and read receipts
- **E2EE**: Client-side encryption using Web Crypto API

### 4. Payment System
- **Stripe Integration**: Secure payment processing
- **Balance Management**:
  - Initial balance: $50,000 (non-redeemable)
  - Replenish balance: Add funds via Stripe
  - Redeem balance: Withdraw earned funds
- **Transactions**: Track all payment history
- **Credits System**: Use credits for purchases

## API Routes

### Authentication & User Management
```
POST /api/auth/signup              - User registration
POST /api/auth/signin              - User login
GET  /api/auth/me                  - Get current user
GET  /api/account/[user_id]        - Get user account
```

### Social Features
```
POST   /api/social/follow          - Follow a user
DELETE /api/social/follow          - Unfollow a user
POST   /api/social/block           - Block a user
DELETE /api/social/block           - Unblock a user
GET    /api/social/comments        - Get comments for a post
POST   /api/social/comments        - Create a comment
DELETE /api/social/comments        - Delete a comment
POST   /api/posts/create           - Create a new post
```

### Items & Marketplace
```
POST   /api/items/create           - Create a new item
GET    /api/items/[id]             - Get item details
PUT    /api/items/[id]             - Update item
DELETE /api/items/[id]             - Delete item
POST   /api/Item/create            - Alternative item creation
```

### Chat (Socket.IO Events)
```
send_message          - Send encrypted message
message               - Receive encrypted message
typing                - User is typing
presence              - User online/offline status
message_ack           - Message acknowledgment
```

### Payment Service
```
POST /api/payment/create-checkout-session  - Create Stripe checkout
POST /api/payment/redeem-balance           - Redeem balance
GET  /api/payment/transactions/:userId     - Get transaction history
POST /webhook/stripe                       - Stripe webhook handler
```

## Data Flow

### User Registration Flow
1. User submits registration form
2. Frontend validates input
3. POST to `/api/auth/signup`
4. Password hashed with bcrypt
5. User created in PostgreSQL (USER database)
6. Profile created in related tables
7. Session token generated
8. User redirected to dashboard

### Item Creation Flow
1. User fills item creation form
2. Media uploaded to ImageKit
3. Rich text content processed
4. Metadata saved to PostgreSQL (ITEMS database)
5. Full content saved to MongoDB
6. Item appears in marketplace

### Payment Flow
1. User initiates replenish balance
2. Frontend calls payment service
3. Stripe checkout session created
4. User completes payment on Stripe
5. Webhook receives payment confirmation
6. Transaction status updated
7. User balance updated in PostgreSQL
8. User notified of successful payment

### Chat Message Flow
1. User types message
2. Message encrypted client-side
3. Encrypted data sent via Socket.IO
4. Server stores encrypted message in MongoDB
5. Message delivered to recipient(s)
6. Recipient decrypts message client-side
7. Message displayed in chat UI

## Security Architecture

### Authentication
- **Session-based**: NextAuth.js with JWT
- **Password hashing**: bcrypt with salts
- **Token expiration**: Configurable session timeout
- **Refresh tokens**: Automatic token renewal

### End-to-End Encryption (E2EE)
- **Key Exchange**: ECDH for session keys
- **Encryption**: AES-GCM for message content
- **Media**: Files encrypted before upload
- **Server-side**: Never sees plaintext messages

### API Security
- **CORS**: Configured allowed origins
- **Rate Limiting**: Prevents abuse
- **Input Validation**: All inputs sanitized
- **SQL Injection**: Prevented by Prisma ORM
- **XSS Protection**: Content sanitized

### Payment Security
- **Stripe**: PCI-compliant payment processing
- **Webhook Verification**: Signature validation
- **HTTPS Only**: All payment traffic encrypted
- **Balance Separation**: Initial vs. redeemable balance

## Deployment Architecture

### Recommended Setup

#### Production Deployment
```
┌─────────────────────────────────────┐
│         CDN / Load Balancer         │
└─────────────────────────────────────┘
                  │
        ┌─────────┴─────────┐
        │                   │
   ┌────▼────┐         ┌────▼────┐
   │ Next.js │         │ Next.js │
   │  App    │         │  App    │
   │ (Vercel)│         │(Replica)│
   └────┬────┘         └────┬────┘
        │                   │
        └─────────┬─────────┘
                  │
        ┌─────────┴─────────────────┐
        │                           │
   ┌────▼────┐              ┌───────▼──────┐
   │ Chat    │              │   Payment    │
   │ Server  │              │   Service    │
   │(VPS/    │              │(VPS/Railway) │
   │Railway) │              └───────┬──────┘
   └────┬────┘                      │
        │                           │
   ┌────▼────────────────────────┬──▼────┐
   │                             │       │
┌──▼──────┐              ┌───────▼───┐  │
│MongoDB  │              │PostgreSQL │  │
│(Atlas)  │              │ (Neon)    │  │
└─────────┘              └───────────┘  │
                                        │
                               ┌────────▼──────┐
                               │    Stripe     │
                               │   (Payments)  │
                               └───────────────┘
```

### Environment-Specific Configuration

#### Development
- Next.js: localhost:5000
- Chat Server: localhost:3001
- Payment Service: localhost:3002
- Databases: Development instances

#### Production
- Next.js: Vercel/Replit Autoscale
- Chat Server: Separate VPS/Railway
- Payment Service: Separate VPS/Railway
- Databases: Production instances

## Performance Optimization

### Frontend
- **Code Splitting**: Automatic with Next.js
- **Image Optimization**: Next.js Image component
- **Lazy Loading**: Components loaded on demand
- **Caching**: Static assets cached
- **SSR**: Server-side rendering for SEO

### Backend
- **Database Indexing**: Optimized queries
- **Connection Pooling**: Reuse database connections
- **Compression**: Gzip/Brotli compression
- **CDN**: Static assets served from CDN

### Real-time
- **WebSocket**: Persistent connections
- **Binary Protocol**: Efficient data transfer
- **Message Batching**: Reduce network calls
- **Presence Optimization**: Debounced updates

## Monitoring & Logging

### Application Logs
- Request/response logging
- Error tracking
- Performance metrics
- User activity logs

### Infrastructure Monitoring
- Server health checks
- Database performance
- API response times
- Error rates

## Scalability Considerations

### Horizontal Scaling
- Multiple Next.js instances
- Load-balanced chat servers
- Database read replicas
- Distributed caching

### Vertical Scaling
- Optimized database queries
- Efficient data structures
- Memory management
- Connection pooling

## Future Enhancements
1. Video streaming support
2. AI-powered content recommendations
3. Advanced analytics dashboard
4. Mobile native applications
5. Multi-language support
6. Advanced moderation tools
7. Creator analytics
8. Subscription tiers
