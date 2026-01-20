import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    text: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
});

const MediaSchema = new mongoose.Schema({
    type: { type: String },
    url: { type: String },
    alt: { type: String },
});

const PostSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    sqlId: { type: String, index: true }, // PostgreSQL UUID for direct lookup
    content: { type: String, required: true },
    media: [MediaSchema],
    visibility: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    likes: [{ type: String }],
    comments: [CommentSchema],
});

export const Post = mongoose.models.Post || mongoose.model('Post', PostSchema);
