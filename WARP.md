# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Commands

### Development
```powershell
# Start all services (Web + Chat)
npm run dev:all         # Concurrently runs web app and chat server

# Start services individually
npm run dev             # Web app only (Next.js on port 5000)
npm run chat:dev        # Chat server (Socket.IO on port 3001)
cd apps/payment && npm run dev  # Payment service (port 3002)

# For debugging
npm run chat:dev:debug  # Chat server with inspector on port 9229
```

### Database
```powershell
# Navigate to web app
cd apps/web

# Generate Prisma clients (required after schema changes)
npx prisma generate --schema=src/lib/prisma/schema.user.prisma
npx prisma generate --schema=src/lib/prisma/schema.social.prisma
npx prisma generate --schema=src/lib/prisma/schema.item.prisma
npx prisma generate --schema=src/lib/prisma/schema.community.prisma
npx prisma generate --schema=src/lib/prisma/schema.audit.prisma

# Push schema changes to databases
npx prisma db push --schema=src/lib/prisma/schema.user.prisma
npx prisma db push --schema=src/lib/prisma/schema.social.prisma
npx prisma db push --schema=src/lib/prisma/schema.item.prisma
npx prisma db push --schema=src/lib/prisma/schema.community.prisma
npx prisma db push --schema=src/lib/prisma/schema.audit.prisma

# Open Prisma Studio for a specific database
npx prisma studio --schema=src/lib/prisma/schema.user.prisma
```

### Build & Lint
```powershell
# Build all services (uses Turbo for caching)
npm run build

# Lint all services
npm run lint

# Type check all services
npm run type-check

# Build individual services
cd apps/web && npm run build      # Next.js production build
cd apps/chat && npm run start     # Chat server (no build step needed)
cd apps/payment && npm run start  # Payment service (no build step needed)
```

## Architecture

### Multi-Database Strategy
This project uses a **hybrid database architecture** that separates concerns across multiple databases:

#### PostgreSQL (5 Separate Schemas)
Each Prisma schema connects to a different PostgreSQL database via environment variables:
- **USER** (`POSTGRESS_DB_USER`): Authentication, profiles, sessions, certificates, security
- **SOCIAL** (`POSTGRESS_DB_SOCIAL`): Posts metadata, comments, likes, follows, blocks, notifications
- **ITEMS** (`POSTGRESS_DB_ITEMS`): Item metadata, transactions, reviews, favorites, monetization
- **COMMUNITY** (`POSTGRESS_DB_COMMUNITY`): Communities, memberships, community posts
- **AUDIT** (`POSTGRESS_DB_AUDIT`): Admin logs, system events, audit trails

Generated Prisma clients are located in `apps/web/src/generated/{user,social,item,community,audit}/` with custom output paths defined in each schema.

#### MongoDB
Used for large content storage via Mongoose:
- **Conversations & Messages**: E2EE chat data (encrypted content)
- **Items**: Full digital item content (writings, digital art, comics)
- **Posts**: Social post content
- **Transactions**: Payment transaction details

### Data Access Patterns
- **Import Prisma clients**: Use `apps/web/src/lib/db.ts` which exports all 5 Prisma clients
- **Import Mongoose models**: Use files in `apps/web/src/lib/mongoose/` (connection.ts, items.ts, posts.ts, conversations.ts)
- **Hybrid queries**: Many features combine PostgreSQL metadata with MongoDB content (see `fetchItems()` in `apps/web/src/lib/mongoose/items.ts` for reference pattern)

### Service Architecture
DreamDot runs as **three separate services**:

1. **Web App** (`apps/web`): Next.js 15 with App Router
   - Frontend UI and API routes
   - Connects to all 5 PostgreSQL databases
   - Connects to MongoDB for content
   - Port: 5000

2. **Chat Server** (`apps/chat`): Express + Socket.IO
   - Real-time messaging with E2EE
   - Connects to MongoDB only
   - JWT authentication via shared `JWT_SECRET`
   - Port: 3001

3. **Payment Service** (`apps/payment`): Express + Stripe
   - Payment processing and webhooks
   - Connects to MongoDB for transactions
   - Port: 3002

All services share the same root `.env` file with:
- `JWT_SECRET`: Shared for authentication across services
- `MONGO_CLUSTER`: Shared MongoDB connection string
- `CORS_ORIGIN`: Must include all service URLs

### Turborepo Monorepo Structure
This project uses **Turborepo** for efficient monorepo management:
- **Workspaces**: Defined in root `package.json` (`apps/*`, `packages/*`)
- **Build Pipeline**: Configured in `turbo.json` with dependency graphs and caching
- **Shared Packages**: 
  - `packages/eslint-config`: Shared ESLint configuration
  - `packages/typescript-config`: Shared TypeScript configurations
  - `packages/ui`: Shared UI components (shadcn/ui setup)
- **Commands**: All `turbo` commands run from root and execute across relevant workspaces

### Key Design Patterns

#### Authentication Flow
- NextAuth.js for web app sessions
- JWT tokens shared across all services via `JWT_SECRET`
- Chat and payment services validate JWTs independently using the same secret

#### Item Creation Flow
1. Upload media to ImageKit
2. Save metadata to PostgreSQL (`prismaItem.items`)
3. Save full content to MongoDB (`ItemModel`)
4. Both records use the same `item_id` / `_id` for correlation

#### Chat Encryption
- Messages encrypted client-side before transmission
- Server stores only encrypted content in MongoDB
- Keys never leave client devices
- Socket.IO events: `send_message`, `message`, `typing`, `presence`

## Development Notes

### Working with Prisma
- **Never import Prisma clients directly** from `@prisma/client` - always use the generated clients via `@/generated/{database}` or import from `@/lib/db`
- After modifying any `.prisma` file, regenerate clients and push changes
- Each schema has a unique `output` path in its generator config

### Environment Variables
- All services read from the root `.env` file
- Payment and chat services load `.env` relative to their location (see `dotenv.config()` calls)
- Required for all services: `JWT_SECRET`, `MONGO_CLUSTER`
- Web app needs: All 5 `POSTGRESS_DB_*` variables, ImageKit credentials, `NEXTAUTH_SECRET`
- Payment service needs: `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`

### Testing
```powershell
# Test database connection (chat service)
cd apps/chat && npm run test-db

# No automated tests are currently configured
# Testing is done manually through the web interface
```

### Testing Payment Webhooks Locally
Use Stripe CLI to forward webhooks:
```powershell
stripe listen --forward-to localhost:3002/webhook/stripe
```

### MongoDB Collections
MongoDB auto-creates collections. Key collections:
- `conversations`, `messages` (chat)
- `items`, `writings`, `digitalarts`, `comics` (marketplace)
- `transactions` (payments)

### Initial User Balance
New users receive $50,000 initial balance (non-redeemable). Only earned funds from sales can be redeemed via Stripe.

## Common Workflows

### Adding a New Feature with Database Changes
1. Determine if data belongs in PostgreSQL (metadata) or MongoDB (content)
2. For PostgreSQL: Edit relevant `schema.*.prisma` file, generate, and push
3. For MongoDB: Create/modify Mongoose model in `apps/web/src/lib/mongoose/types/`
4. Update API routes in `apps/web/src/app/api/`
5. Update frontend components

### Debugging Database Issues
- Check PostgreSQL: Use Prisma Studio with the appropriate schema
- Check MongoDB: Use MongoDB Compass or Atlas dashboard with connection string from `MONGO_CLUSTER`
- Verify all 5 `POSTGRESS_DB_*` environment variables are set correctly
- Ensure MongoDB connection in `.env` includes database name parameter
- Test MongoDB connection: `cd apps/chat && npm run test-db`

### Common Development Issues
- **Port conflicts**: Ensure ports 5000, 3001, 3002 are available
- **Prisma client errors**: Always regenerate after schema changes
- **Turborepo cache issues**: Clear with `npx turbo clean` if builds are inconsistent
- **Node.js version**: Requires Node.js >=18 (specified in package.json engines)

### Deploying Services
Each service deploys independently:
- **Web**: Vercel or Replit (use `apps/web` as root)
- **Chat**: Railway/Render (use `apps/chat` as root, build: `npm install`, start: `npm start`)
- **Payment**: Railway/Render (use `apps/payment` as root, build: `npm install`, start: `npm start`)

Update production `.env` with service URLs:
- `NEXT_PUBLIC_CHAT_SERVER_URL`
- `NEXT_PUBLIC_PAYMENT_SERVER_URL`
- `CORS_ORIGIN` (comma-separated list including all service URLs)
