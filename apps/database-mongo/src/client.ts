import mongoose from 'mongoose';

let isConnected = false;

export const connectToDatabase = async (uri: string) => {
    if (isConnected) {
        console.log('=> using existing database connection');
        return;
    }

    console.log('=> using new database connection');

    try {
        const db = await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
            maxPoolSize: 10,
            minPoolSize: 5
        });
        isConnected = db.connections[0].readyState === 1;
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        // Don't throw, let the app decide how to handle
    }
};

export const disconnectDatabase = async () => {
    if (isConnected) {
        await mongoose.disconnect();
        isConnected = false;
        console.log('MongoDB disconnected');
    }
}
