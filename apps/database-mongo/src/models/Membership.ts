import mongoose from 'mongoose';

const membershipSchema = new mongoose.Schema({
    conversation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Conversation',
        required: true
    },
    user: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['member', 'admin'],
        default: 'member'
    },
    joinedAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

membershipSchema.index({ conversation: 1, user: 1 });
export const Membership = mongoose.models.Membership || mongoose.model('Membership', membershipSchema);
