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
   # Edit .env with your configuration
   ```

3. **Start MongoDB:**
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

The server will start on `http://localhost:3001` with Socket.IO on `/socket.io`.

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

## Project Structure

```
apps/chat/
├── server.js          # Main server file (all-in-one)
├── models.js          # Database models
├── auth.js           # Authentication utilities
├── db.js             # Database connection
├── package.json      # Dependencies and scripts
├── .env.example      # Environment configuration
└── README.md         # This file
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

### Adding New Features

1. **Add to server.js** - All routes and socket handlers are in one place
2. **Update models.js** - Add new schemas as needed
3. **Test thoroughly** - Use the debug logs to trace execution

### Debugging

The server includes comprehensive logging:

- Connection events
- Authentication attempts
- Message sending/receiving
- Database operations
- Error handling

All logs include timestamps and relevant data for easy debugging.

## Deployment

1. Set `NODE_ENV=production` in your environment
2. Use a strong `JWT_SECRET`
3. Configure `MONGODB_URI` for your production database
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
