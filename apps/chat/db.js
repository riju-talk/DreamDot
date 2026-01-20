const { connectToDatabase } = require('@repo/database-mongo');

async function connectDb() {
  const mongoUri = process.env.MONGO_CLUSTER || 'mongodb://localhost:27017/chatapp';
  await connectToDatabase(mongoUri);
}

module.exports = {
  connectDb
};
