// Quick script to test MongoDB connection and query posts
import { connectToDatabase } from './apps/database-mongo/src/client.js';
import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    userId: String,
    content: String,
    media: Array,
    visibility: Boolean,
    createdAt: Date,
    likes: Array,
    comments: Array,
});

const Post = mongoose.models.Post || mongoose.model('Post', PostSchema);

async function testMongoDB() {
    try {
        console.log('🔌 Connecting to MongoDB...');
        const uri = process.env.MONGODB_URI || process.env.MONGO_CLUSTER || 'mongodb://localhost:27017/dreamdot';
        console.log('URI:', uri.replace(/\/\/[^:]+:[^@]+@/, '//***:***@')); // Hide credentials

        await connectToDatabase(uri);
        console.log('✅ Connected!');

        console.log('\n📊 Querying all posts...');
        const allPosts = await Post.find({}).limit(10).lean();

        console.log(`\nFound ${allPosts.length} posts`);
        allPosts.forEach((post, idx) => {
            console.log(`\n📝 Post ${idx + 1}:`, {
                _id: post._id,
                userId: post.userId,
                content: post.content?.substring(0, 100) || '(no content)',
                contentLength: post.content?.length || 0,
                createdAt: post.createdAt,
                hasMedia: !!post.media?.length,
                likes: post.likes?.length || 0,
                comments: post.comments?.length || 0
            });
        });

        console.log('\n✅ Test complete');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
}

testMongoDB();
