# DreamDot - Integration Guide

This guide provides step-by-step instructions for integrating and setting up the DreamDot platform.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Environment Setup](#environment-setup)
3. [Database Configuration](#database-configuration)
4. [Service Integration](#service-integration)
5. [Running the Application](#running-the-application)
6. [Testing](#testing)
7. [Deployment](#deployment)

## Prerequisites

### Required Software
- **Node.js**: v20.0.0 or higher
- **npm**: v10.0.0 or higher
- **Git**: Latest version
- **MongoDB**: v6.0 or higher (or MongoDB Atlas account)
- **PostgreSQL**: v14 or higher (or Neon account)

### Required Accounts
- **MongoDB Atlas**: For MongoDB hosting
- **Neon** (or similar): For PostgreSQL hosting
- **Stripe**: For payment processing
- **ImageKit**: For media hosting
- **Replit/Vercel**: For deployment

## Environment Setup

### 1. Clone and Install Dependencies

```bash
# Clone the repository
git clone <repository-url>
cd dreamdot

# Install dependencies for all workspaces
npm install

# Install payment service dependencies
cd apps/payment
npm install
cd ../..
```

### 2. Environment Variables

Copy the environment template and configure it:

```bash
# From root directory
cp .env.example .env

# Edit the .env file with your credentials
# See .env.example for all required variables for all services
```

## Database Configuration

### MongoDB Setup

#### 1. Create MongoDB Atlas Cluster
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Set up database user with read/write permissions
4. Whitelist your IP address (or use 0.0.0.0/0 for development)
5. Get connection string

#### 2. Database Structure
MongoDB will automatically create these collections:
- `conversations` - Chat conversations
- `messages` - Encrypted chat messages
- `items` - Digital items
- `writings` - Blog posts and articles
- `digitalarts` - Digital art pieces
- `comics` - Comic strips and manga
- `transactions` - Payment transactions

### PostgreSQL Setup

#### 1. Create Neon Databases
1. Go to [Neon](https://neon.tech) or your PostgreSQL provider
2. Create 5 separate databases:
   - `dreamdot_user`
   - `dreamdot_social`
   - `dreamdot_items`
   - `dreamdot_community`
   - `dreamdot_audit`

#### 2. Run Prisma Migrations
```bash
cd apps/web

# Generate Prisma clients
npx prisma generate --schema=src/lib/prisma/schema.user.prisma
npx prisma generate --schema=src/lib/prisma/schema.social.prisma
npx prisma generate --schema=src/lib/prisma/schema.item.prisma
npx prisma generate --schema=src/lib/prisma/schema.community.prisma
npx prisma generate --schema=src/lib/prisma/schema.audit.prisma

# Push schema to databases
npx prisma db push --schema=src/lib/prisma/schema.user.prisma
npx prisma db push --schema=src/lib/prisma/schema.social.prisma
npx prisma db push --schema=src/lib/prisma/schema.item.prisma
npx prisma db push --schema=src/lib/prisma/schema.community.prisma
npx prisma db push --schema=src/lib/prisma/schema.audit.prisma
```

## Service Integration

### ImageKit Setup

1. Sign up at [ImageKit](https://imagekit.io)
2. Create a new account
3. Get your credentials:
   - Public Key
   - Private Key
   - URL Endpoint
4. Add to `.env` files

### Stripe Setup

1. Sign up at [Stripe](https://stripe.com)
2. Get your test API keys from Dashboard
3. Set up webhook endpoint:
   - URL: `https://your-payment-service.com/webhook/stripe`
   - Events to listen: `checkout.session.completed`, `checkout.session.expired`
4. Get webhook secret
5. Add all credentials to `.env`

### Stripe Webhook Testing (Local Development)

```bash
# Install Stripe CLI
brew install stripe/stripe-cli/stripe
# or download from https://stripe.com/docs/stripe-cli

# Login to Stripe
stripe login

# Forward webhooks to local payment service
stripe listen --forward-to localhost:3002/webhook/stripe
```

## Running the Application

### Development Mode

#### Option 1: Run All Services Together
```bash
# From root directory
npm run dev
```

#### Option 2: Run Services Separately

Terminal 1 - Next.js App:
```bash
cd apps/web
npm run dev
```

Terminal 2 - Chat Server:
```bash
cd apps/chat
npm run dev
```

Terminal 3 - Payment Service:
```bash
cd apps/payment
npm run dev
```

### Access Points
- **Web App**: http://localhost:5000
- **Chat Server**: http://localhost:3001
- **Payment Service**: http://localhost:3002

## Testing

### Manual Testing Checklist

#### Authentication
- [ ] User can sign up
- [ ] User can sign in
- [ ] User can sign out
- [ ] Session persists on reload

#### Social Features
- [ ] Create a post
- [ ] Comment on a post
- [ ] Like a post
- [ ] Follow a user
- [ ] Unfollow a user
- [ ] Block a user
- [ ] Unblock a user

#### Marketplace
- [ ] Create a digital item
- [ ] Create a writing/blog
- [ ] Create digital art
- [ ] View items in marketplace
- [ ] Search for items

#### Chat
- [ ] Start a conversation
- [ ] Send text messages
- [ ] Messages are encrypted
- [ ] Typing indicators work
- [ ] Messages persist

#### Payment
- [ ] Replenish balance (test mode)
- [ ] View transaction history
- [ ] Initial balance is correct
- [ ] Redeemable balance calculated correctly

### API Testing

Use tools like Postman or curl:

```bash
# Test user registration
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'

# Test follow user
curl -X POST http://localhost:5000/api/social/follow \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{"targetUserId":"user-uuid"}'
```

## Deployment

### Vercel Deployment (Next.js App)

1. Connect repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy command: `cd apps/web && npm run build`
4. Start command: `cd apps/web && npm start`

### Railway/Render Deployment (Chat Server)

1. Create new service
2. Connect repository
3. Set root directory to `apps/chat`
4. Set environment variables
5. Build command: `npm install`
6. Start command: `npm start`

### Railway/Render Deployment (Payment Service)

1. Create new service
2. Connect repository
3. Set root directory to `apps/payment`
4. Set environment variables
5. Build command: `npm install`
6. Start command: `npm start`

### Environment Variables for Production

Update all service URLs in production `.env`:
```env
NEXT_PUBLIC_CHAT_SERVER_URL=https://chat-production-url.com
NEXT_PUBLIC_PAYMENT_SERVER_URL=https://payment-production-url.com
CORS_ORIGIN=https://your-production-domain.com
CLIENT_URL=https://your-production-domain.com
NEXTAUTH_URL=https://your-production-domain.com
```

## Troubleshooting

### Common Issues

#### Database Connection Errors
- Verify connection strings are correct
- Check IP whitelist in MongoDB Atlas
- Ensure databases exist in PostgreSQL

#### Chat Not Connecting
- Check CORS_ORIGIN includes your frontend URL
- Verify Socket.IO path is correct
- Check firewall allows WebSocket connections

#### Payments Not Working
- Verify Stripe keys are for correct environment (test/live)
- Check webhook secret matches Stripe dashboard
- Ensure webhook URL is publicly accessible

#### Image Upload Fails
- Verify ImageKit credentials
- Check file size limits
- Ensure CORS is configured in ImageKit

### Debug Mode

Enable debug logging:
```env
# Add to .env files
DEBUG=*
NODE_ENV=development
```

## Support

For issues and questions:
1. Check existing documentation
2. Review error logs
3. Consult ARCHITECTURE.md
4. Check environment variables

## Next Steps

After successful integration:
1. Customize branding and theme
2. Set up monitoring and logging
3. Configure backup strategies
4. Plan scaling strategy
5. Review security settings
6. Set up CI/CD pipeline
