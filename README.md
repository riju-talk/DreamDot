# DreamDot - Creative Content Platform

> A full-stack social media platform for creators to share, collaborate, and monetize their digital content with end-to-end encrypted chat and integrated payments.

**DreamDot** empowers creators to publish and monetize their art, writings, and thoughts in one unified platform. Whether you're a digital artist, indie author, blogger, or creative thinker — DreamDot offers the tools to connect, share, and earn from your creativity.

---

## 🌟 Features

### Social Platform
- **Posts & Feeds**: Share updates, images, and content with followers
- **Comments & Likes**: Engage with community content
- **Following System**: Follow creators you love
- **Blocking**: Control who can interact with you
- **User Profiles**: Customizable profiles with avatars, banners, and bios
- **Communities**: Create and join groups

### Marketplace
- **Digital Items**: Upload and sell digital downloads
- **Writings**: Publish articles, blogs, and stories with rich text editor
- **Digital Art**: Share and sell illustrations, photography, and designs
- **Comics**: Create and publish webcomics, manga, and graphic novels
- **Monetization Options**:
  - Free content
  - One-time purchase
  - Subscription-based access

### End-to-End Encrypted Chat
- **Private Messages**: 1-on-1 encrypted conversations
- **Community Chats**: Group conversations with E2EE
- **Media Sharing**: Send encrypted images, videos, and audio
- **Real-time**: Instant delivery with typing indicators
- **Zero Knowledge**: Server never sees message content
- **Socket.IO**: WebSocket-based real-time communication

### Payment System
- **Stripe Integration**: Secure payment processing
- **Balance Management**:
  - Initial balance: $50,000 for all new users (non-redeemable)
  - Replenish balance: Add funds via Stripe checkout
  - Redeem balance: Withdraw earned funds only
- **Transaction History**: Track all payments
- **Credit System**: Use credits for marketplace purchases

### Creator Analytics
- Engagement insights
- Earnings dashboard
- Follower growth metrics

---

## 🛠️ Tech Stack

| Layer          | Technologies                                                                        |
|----------------|-------------------------------------------------------------------------------------|
| **Frontend**   | Next.js 15 (App Router), TypeScript, Tailwind CSS 4, shadcn/ui, Quill.js          |
| **Backend**    | Next.js API Routes, Express.js, Socket.IO, Prisma ORM, NextAuth.js                |
| **Databases**  | PostgreSQL (5 schemas), MongoDB (chat & content)                                   |
| **Auth**       | NextAuth.js with JWT                                                               |
| **Encryption** | Web Crypto API, TweetNaCl (E2EE chat)                                             |
| **Payments**   | Stripe                                                                             |
| **Media**      | ImageKit                                                                           |
| **Real-time**  | Socket.IO                                                                          |

---

## 🗃️ Database Architecture

### PostgreSQL (5 Separate Schemas)
1. **Users Database** (`POSTGRESS_DB_USER`)
   - Authentication, profiles, user analytics
   - Security, sessions, certificates

2. **Social Database** (`POSTGRESS_DB_SOCIAL`)
   - Posts, comments, likes
   - Following/blocking relationships
   - Notifications

3. **Items Database** (`POSTGRESS_DB_ITEMS`)
   - Item metadata, transactions, reviews
   - Favorites, collections, monetization

4. **Community Database** (`POSTGRESS_DB_COMMUNITY`)
   - Communities, memberships
   - Community posts and discussions

5. **Audit Database** (`POSTGRESS_DB_AUDIT`)
   - Admin logs, system events
   - Audit trails

### MongoDB
- **Chat**: Conversations, encrypted messages
- **Content**: Full item content (writings, art, comics)
- **Transactions**: Payment transaction details

---

## 🚀 Quick Start

### Prerequisites
- Node.js 20.0.0 or higher
- npm 10.0.0 or higher
- MongoDB (Atlas recommended)
- PostgreSQL (Neon recommended)
- Stripe account (for payments)
- ImageKit account (for media)

### Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/dreamdot.git
cd dreamdot

# Install dependencies
npm install

# Set up environment variables
cp .env.example apps/web/.env
cp apps/payment/.env.example apps/payment/.env
cp apps/chat/.env.example apps/chat/.env

# Edit the .env files with your credentials
# See .env.example for all required variables

# Generate Prisma clients
cd apps/web
npx prisma generate --schema=src/lib/prisma/schema.user.prisma
npx prisma generate --schema=src/lib/prisma/schema.social.prisma
npx prisma generate --schema=src/lib/prisma/schema.item.prisma
npx prisma generate --schema=src/lib/prisma/schema.community.prisma
npx prisma generate --schema=src/lib/prisma/schema.audit.prisma

# Push database schemas
npx prisma db push --schema=src/lib/prisma/schema.user.prisma
npx prisma db push --schema=src/lib/prisma/schema.social.prisma
npx prisma db push --schema=src/lib/prisma/schema.item.prisma
npx prisma db push --schema=src/lib/prisma/schema.community.prisma
npx prisma db push --schema=src/lib/prisma/schema.audit.prisma

# Return to root and start all services
cd ../..
npm run dev
```

The application will be available at:
- **Web App**: http://localhost:5000
- **Chat Server**: http://localhost:3001
- **Payment Service**: http://localhost:3002

---

## 📚 Documentation

- **[Architecture Guide](ARCHITECTURE.md)** - Detailed system architecture and design decisions
- **[Integration Guide](INTEGRATION_GUIDE.md)** - Step-by-step setup and integration instructions
- **[Environment Variables](.env.example)** - Configuration reference

---

## 🏗️ Project Structure

```
dreamdot/
├── apps/
│   ├── web/              # Next.js frontend application
│   │   ├── src/
│   │   │   ├── app/      # Next.js App Router pages & API routes
│   │   │   │   ├── api/  # Backend API routes
│   │   │   │   │   ├── auth/       - Authentication
│   │   │   │   │   ├── social/     - Follow, block, comments
│   │   │   │   │   ├── items/      - Marketplace items
│   │   │   │   │   └── posts/      - Social posts
│   │   │   │   └── (pages)/        - Frontend pages
│   │   │   └── lib/      # Utilities and database clients
│   │   │       ├── mongoose/       - MongoDB models
│   │   │       │   └── models/
│   │   │       │       ├── Writing.js
│   │   │       │       ├── DigitalArt.js
│   │   │       │       ├── Comic.js
│   │   │       │       └── Item.js
│   │   │       └── prisma/         - PostgreSQL schemas
│   │   └── components/   # React components
│   │       ├── ui/                 - shadcn/ui components
│   │       ├── rich-text-editor.tsx
│   │       ├── balance-management.tsx
│   │       └── create-content.tsx
│   ├── chat/             # Socket.IO chat server
│   │   └── src/
│   │       ├── controllers/
│   │       ├── models/
│   │       ├── services/
│   │       └── socket.ts
│   └── payment/          # Stripe payment service
│       └── src/
│           ├── routes/
│           │   ├── payment.js      - Payment endpoints
│           │   └── webhook.js      - Stripe webhooks
│           ├── models/
│           │   └── Transaction.js  - Transaction model
│           └── server.js
├── packages/
│   ├── ui/               # Shared UI components
│   ├── typescript-config/# TypeScript configurations
│   └── eslint-config/    # ESLint configurations
├── ARCHITECTURE.md       # Architecture documentation
├── INTEGRATION_GUIDE.md  # Setup guide
└── .env.example          # Environment variables template
```

---

## 🔧 Development

### Run Services Individually

```bash
# Terminal 1: Next.js App
cd apps/web
npm run dev

# Terminal 2: Chat Server
cd apps/chat
npm run dev

# Terminal 3: Payment Service
cd apps/payment
npm run dev
```

### Build for Production

```bash
# Build all apps
npm run build

# Build specific app
npm run build --workspace=apps/web
```

---

## 🚢 Deployment

### Recommended Setup
- **Next.js App**: Vercel or Replit Autoscale
- **Chat Server**: Railway, Render, or VPS
- **Payment Service**: Railway, Render, or VPS
- **MongoDB**: MongoDB Atlas
- **PostgreSQL**: Neon, Supabase, or managed PostgreSQL

See [INTEGRATION_GUIDE.md](INTEGRATION_GUIDE.md) for detailed deployment instructions.

---

## 🔐 Security Features

- **End-to-End Encryption**: Chat messages encrypted with Web Crypto API
- **Password Hashing**: bcrypt with salts
- **JWT Authentication**: Secure session management
- **CORS Protection**: Configured allowed origins
- **Input Validation**: All user inputs sanitized
- **Stripe Integration**: PCI-compliant payment processing
- **Balance Separation**: Initial vs. redeemable balance

---

## 📝 API Endpoints

### Authentication
```
POST   /api/auth/signup       - Register new user
POST   /api/auth/signin       - Login
GET    /api/auth/me           - Get current user
```

### Social Features
```
POST   /api/social/follow     - Follow user
DELETE /api/social/follow     - Unfollow user
POST   /api/social/block      - Block user
DELETE /api/social/block      - Unblock user
POST   /api/social/comments   - Create comment
GET    /api/social/comments   - Get comments
DELETE /api/social/comments   - Delete comment
POST   /api/posts/create      - Create post
```

### Marketplace
```
POST   /api/items/create      - Create item (writing/art/comic/digital)
GET    /api/items/[id]        - Get item details
PUT    /api/items/[id]        - Update item
DELETE /api/items/[id]        - Delete item
```

### Payments
```
POST   /api/payment/create-checkout-session  - Start Stripe checkout
POST   /api/payment/redeem-balance           - Redeem earned funds
GET    /api/payment/transactions/:userId     - Get transaction history
POST   /webhook/stripe                       - Stripe webhook handler
```

### Chat (Socket.IO Events)
```
send_message          - Send encrypted message
message               - Receive encrypted message
typing                - User is typing
presence              - User online/offline status
message_ack           - Message acknowledgment
```

---

## 🌐 Environment Variables

Required environment variables (see [.env.example](.env.example)):

### Web App
- `NEXTAUTH_SECRET` - NextAuth secret key
- `JWT_SECRET` - JWT token secret
- `MONGO_CLUSTER` - MongoDB connection string
- `POSTGRESS_DB_*` - PostgreSQL database URLs (5 databases)
- `IMAGEKIT_*` - ImageKit credentials
- `NEXT_PUBLIC_CHAT_SERVER_URL` - Chat server URL
- `NEXT_PUBLIC_PAYMENT_SERVER_URL` - Payment server URL

### Chat Server
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - JWT token secret (must match web app)
- `CORS_ORIGIN` - Allowed origins
- `PORT` - Server port (default: 3001)

### Payment Service
- `STRIPE_SECRET_KEY` - Stripe API key
- `STRIPE_WEBHOOK_SECRET` - Stripe webhook secret
- `MONGO_CLUSTER` - MongoDB connection string
- `CLIENT_URL` - Frontend URL
- `PORT` - Server port (default: 3002)

---

## ✨ Vision

> DreamDot is more than a platform — it's a canvas for the dreamers. We believe in building a creative economy where expression meets ownership, and where your passion can power your livelihood.

---

## 🎯 Roadmap

- [x] Social media features (posts, comments, likes)
- [x] Follow/unfollow system
- [x] Block/unblock functionality
- [x] Marketplace with multiple item types
- [x] Rich text editor for writings
- [x] End-to-end encrypted chat
- [x] Payment system with Stripe
- [x] Balance management (replenish/redeem)
- [ ] Mobile applications
- [ ] Video streaming
- [ ] AI-powered recommendations
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] Subscription tiers for creators
- [ ] Advanced moderation tools

---

## 🤝 Contributing

This is a private project. For questions or issues, contact the development team.

---

## 📄 License

All rights reserved.

---

## 🆘 Support

For support and questions:
1. Check the [Integration Guide](INTEGRATION_GUIDE.md)
2. Review the [Architecture Documentation](ARCHITECTURE.md)
3. Consult the [Environment Variables](.env.example)
4. Contact the development team

---

**Built with ❤️ using Next.js, Socket.IO, and Stripe**
