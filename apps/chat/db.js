const mongoose = require('mongoose');

let isConnected = false;

async function connectDb() {
  if (isConnected) {
    return;
  }

  try {
  const mongoUri = process.env.MONGO_CLUSTER || 'mongodb://localhost:27017/chatapp';

    await mongoose.connect(mongoUri, {
      // Modern connection options
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      maxPoolSize: 10,
      minPoolSize: 5
    });

  isConnected = true;
  } catch (error) {
  console.error('ERROR: Failed to connect to MongoDB:', error.message);

    // Don't throw error, just log it and continue
    // This allows the server to start even without database
  }
}

async function disconnectDb() {
  if (isConnected) {
    await mongoose.disconnect();
  isConnected = false;
  }
}

// Handle connection events
mongoose.connection.on('error', (error) => {
  console.error('ERROR: MongoDB connection error:', error);
});

mongoose.connection.on('disconnected', () => {
  isConnected = false;
});

mongoose.connection.on('reconnected', () => {
  isConnected = true;
});

module.exports = {
  connectDb,
  disconnectDb,
  isConnected: () => isConnected
};
