const mongoose = require('mongoose');

let isConnected = false;

async function connectDb() {
  if (isConnected) {
    console.log('🔄 Using existing database connection');
    return;
  }

  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/chatapp';
    console.log('🔌 Connecting to MongoDB...');

    await mongoose.connect(mongoUri, {
      // Modern connection options
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      maxPoolSize: 10,
      minPoolSize: 5
    });

    isConnected = true;
    console.log('✅ Connected to MongoDB successfully');
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error.message);
    console.log('💡 Starting server in offline mode (some features will be disabled)');

    // Don't throw error, just log it and continue
    // This allows the server to start even without database
  }
}

async function disconnectDb() {
  if (isConnected) {
    await mongoose.disconnect();
    isConnected = false;
    console.log('🔌 Disconnected from MongoDB');
  }
}

// Handle connection events
mongoose.connection.on('error', (error) => {
  console.error('❌ MongoDB connection error:', error);
});

mongoose.connection.on('disconnected', () => {
  console.log('🔌 Disconnected from MongoDB');
  isConnected = false;
});

mongoose.connection.on('reconnected', () => {
  console.log('🔄 Reconnected to MongoDB');
  isConnected = true;
});

module.exports = {
  connectDb,
  disconnectDb,
  isConnected: () => isConnected
};
