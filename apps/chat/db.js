const mongoose = require('mongoose');

let isConnected = false;

async function connectDb() {
  if (isConnected) {
    console.log('DB: Using existing database connection');
    return;
  }

  try {
    const mongoUri = process.env.MONGO_CLUSTER || 'mongodb://localhost:27017/chatapp';
    console.log('DB: Connecting to MongoDB...')

    await mongoose.connect(mongoUri, {
      // Modern connection options
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      maxPoolSize: 10,
      minPoolSize: 5
    });

    isConnected = true;
    console.log('SUCCESS: Connected to MongoDB successfully');
  } catch (error) {
    console.error('ERROR: Failed to connect to MongoDB:', error.message);
    console.log('INFO: Starting server in offline mode (some features will be disabled)');

    // Don't throw error, just log it and continue
    // This allows the server to start even without database
  }
}

async function disconnectDb() {
  if (isConnected) {
    await mongoose.disconnect();
    isConnected = false;
    console.log('DB: Disconnected from MongoDB');
  }
}

// Handle connection events
mongoose.connection.on('error', (error) => {
  console.error('ERROR: MongoDB connection error:', error);
});

mongoose.connection.on('disconnected', () => {
  console.log('DB: Disconnected from MongoDB');
  isConnected = false;
});

mongoose.connection.on('reconnected', () => {
  console.log('DB: Reconnected to MongoDB');
  isConnected = true;
});

module.exports = {
  connectDb,
  disconnectDb,
  isConnected: () => isConnected
};
