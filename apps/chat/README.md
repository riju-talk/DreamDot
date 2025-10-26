# Simple Chat Server

A lightweight, real-time chat server built with Node.js, Express, Socket.IO, and MongoDB. This is a refactored version of the original complex TypeScript implementation, simplified for easy debugging and maintenance.

## Features

- **Real-time messaging** via Socket.IO
- **JWT Authentication** for both REST API and WebSocket connections
- **Encrypted messages** support (ciphertext, nonce, keyId)
- **File attachments** support
- **Read receipts** and message status
- **Group and direct conversations**
- **Typing indicators**
- **Message reactions** (schema support)
- **User presence** tracking
- **Message search** (database indexes)

## Quick Start

### Prerequisites

- Node.js 18+
- MongoDB 4.4+
- npm or yarn

### Installation

1. **Clone and install dependencies:**
   ```bash
   cd apps/chat
   npm install
   ```

2. **Environment setup:**
   ```bash
   cp .env.example .env
   # Edit .env with your MongoDB connection string
   ```

3. **MongoDB Setup (Choose one option):**

   **Option A: MongoDB Atlas (Cloud) - Recommended**
   ```bash
   # 1. Go to https://cloud.mongodb.com
   # 2. Create a new cluster (free tier available)
   # 3. Create a database user
   # 4. Add your current IP address to Network Access
   # 5. Get your connection string and update MONGO_CLUSTER in .env
   ```

   **Option B: Local MongoDB**
   ```bash
   # Using Docker
   docker run -d -p 27017:27017 --name mongodb mongo:latest

   # Or using local installation
   mongod
   ```

4. **Start the server:**
   ```bash
   npm run dev
   ```

The server will start on `http://localhost:3001` with Socket.IO on `/socket.io` and **automatically restart** when you make changes to the code!

## API Endpoints

### Authentication Required

All API endpoints require JWT authentication via `Authorization: Bearer <token>` header.

#### Conversations

- `GET /api/v1/conversations` - Get user's conversations
- `POST /api/v1/conversations` - Create new conversation
- `GET /api/v1/conversations/:id/messages` - Get messages for a conversation
- `POST /api/v1/conversations/:id/messages` - Send message (REST fallback)

#### Health Check

- `GET /health` - Health check (no auth required)

## Socket.IO Events

### Client to Server

- `room:join` - Join a conversation room
  ```js
  socket.emit('room:join', { conversationId: 'conversation-id' });
  ```

- `room:leave` - Leave a conversation room
  ```js
  socket.emit('room:leave', { conversationId: 'conversation-id' });
  ```

- `message:typing` - Send typing indicator
  ```js
  socket.emit('message:typing', {
    conversationId: 'conversation-id',
    isTyping: true
  });
  ```

- `message:send` - Send a message
  ```js
  socket.emit('message:send', {
    conversationId: 'conversation-id',
    ciphertext: 'encrypted-message',
    nonce: 'encryption-nonce',
    keyId: 'key-id',
    attachments: []
  }, (response) => {
    if (response.ok) {
      console.log('Message sent:', response.id);
    }
  });
  ```

### Server to Client

- `presence:join` - User joined conversation
- `presence:leave` - User left conversation
- `message:typing` - Typing indicator
- `message:new` - New message received
- `error` - Error occurred

## Socket.IO Authentication

Include JWT token in socket connection:

```js
const socket = io('http://localhost:3001', {
  auth: {
    token: 'your-jwt-token'
  }
});

// Or via query parameter
const socket = io('http://localhost:3001?token=your-jwt-token');
```

## MongoDB Atlas Configuration

### Getting Your Connection String

1. **Go to MongoDB Atlas**: Visit [https://cloud.mongodb.com](https://cloud.mongodb.com)
2. **Create Account/Cluster**: Sign up and create a new cluster (free tier available)
3. **Create Database User**: Go to Database Access → Add New Database User
4. **Whitelist Your IP**: Go to Network Access → Add IP Address (use `0.0.0.0/0` for development)
5. **Get Connection String**: Go to Clusters → Connect → Connect your application
6. **Copy the connection string** and replace `<password>` with your database password

### Connection String Format

Your `.env` file should look like this:
```env
MONGO_CLUSTER=mongodb+srv://username:password@cluster0.abcde.mongodb.net/chatapp?retryWrites=true&w=majority
```

**Replace:**
- `username` with your database username
- `password` with your database password
- `cluster0.abcde.mongodb.net` with your actual cluster URL
- `chatapp` with your preferred database name

### Testing the Connection

After updating your `.env` file, restart the server:
```bash
npm run dev
```

You should see:
```
DB: Connecting to MongoDB...
SUCCESS: Connected to MongoDB successfully
SERVER: Chat server running on 0.0.0.0:3001
```

### Testing Database Connection

You can test your MongoDB connection separately:
```bash
npm run test-db
```

This will verify your connection string works without starting the full server.

## Project Structure

```
apps/chat/
├── server.js          # Main server file (all-in-one)
├── models.js          # Database models
├── auth.js           # Authentication utilities
├── db.js             # Database connection
├── test-db.js        # Database connection test
├── package.json      # Dependencies and scripts
├── nodemon.json      # Nodemon configuration
├── .env.example      # Environment configuration
└── README.md         # This file
```

## Available Scripts

```bash
npm run dev        # Start development server with auto-restart (recommended)
npm run dev:debug  # Start with Node.js debugger
npm run start      # Start production server (no auto-restart)
npm run test-db    # Test MongoDB connection only
```

## Key Simplifications

This refactored version eliminates the complex TypeScript architecture in favor of:

1. **Single file architecture** - Everything in one server.js file
2. **Plain JavaScript** - No TypeScript compilation needed
3. **Consolidated models** - All models in one file
4. **Simple authentication** - JWT middleware only
5. **Debug-friendly logging** - Clear console.log statements throughout
6. **Reduced dependencies** - Only essential packages

## Development

### Hot Reload with Nodemon

This project uses **Nodemon** for development, which provides:

- **🔄 Automatic server restart** when code changes
- **⚡ Fast feedback** during development
- **🎯 Smart file watching** (ignores node_modules, logs, etc.)
- **🐛 Debug support** with `npm run dev:debug`

### Adding New Features

1. **Add to server.js** - All routes and socket handlers are in one place
2. **Update models.js** - Add new schemas as needed
3. **Test thoroughly** - Use the debug logs to trace execution
4. **Save files** - Server auto-restarts with your changes!

### Debugging

The server includes comprehensive logging:

- Connection events
- Authentication attempts
- Message sending/receiving
- Database operations
- Error handling

All logs include timestamps and relevant data for easy debugging.

**For advanced debugging:**
```bash
npm run dev:debug
```
This starts the server with Node.js inspector enabled for breakpoints and step-through debugging.

### Nodemon Configuration

The `nodemon.json` file configures:

- **Watched files**: `server.js`, `models.js`, `auth.js`, `db.js`, and `routes/` directory
- **Ignored files**: `node_modules/`, `.git/`, `*.log`, `.env`, `test-db.js`
- **File extensions**: `.js`, `.json`
- **Restart delay**: 500ms (prevents rapid restarts)
- **Verbose output**: Shows which files triggered restarts

You can customize the nodemon behavior by editing `nodemon.json`.

## Deployment

1. Set `NODE_ENV=production` in your environment
2. Use a strong `JWT_SECRET`
3. Configure `MONGO_CLUSTER` for your production database
4. Set appropriate `CORS_ORIGIN` values
5. Use a process manager like PM2:

```bash
npm install -g pm2
pm2 start server.js --name "chat-server"
pm2 save
pm2 startup
```

## Security Notes

- Change the default JWT_SECRET in production
- Validate file uploads and implement rate limiting
- Use HTTPS in production
- Implement proper input validation
- Consider message retention policies

## License

MIT
