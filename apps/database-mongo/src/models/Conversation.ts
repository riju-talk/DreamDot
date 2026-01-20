import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['direct', 'group'],
        required: true,
        default: 'direct'
    },
    participants: [{
        type: String,
        required: true
    }],
    admins: [{
        type: String,
        required: true
    }],
    name: {
        type: String,
        trim: true,
        maxlength: 100
    },
    description: {
        type: String,
        trim: true,
        maxlength: 500
    },
    avatar: {
        type: String,
        trim: true
    },
    lastMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    },
    lastMessageAt: {
        type: Date,
        default: Date.now
    },
    unreadBy: [{
        type: String
    }],
    createdBy: {
        type: String,
        required: true
    },
    isArchived: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

conversationSchema.index({ participants: 1 });
conversationSchema.index({ lastMessageAt: -1 });
conversationSchema.index({ type: 1, participants: 1 });

conversationSchema.virtual('participantCount').get(function () {
    return this.participants.length;
});

export const Conversation = mongoose.models.Conversation || mongoose.model('Conversation', conversationSchema);
