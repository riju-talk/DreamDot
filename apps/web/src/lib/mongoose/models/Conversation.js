import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['dm', 'group'],
    required: true,
    default: 'dm'
  },
  name: {
    type: String,
    trim: true
  },
  avatar: String,
  isPrivate: {
    type: Boolean,
    default: false
  },
  participants: [{
    userId: String,
    role: {
      type: String,
      enum: ['member', 'admin'],
      default: 'member'
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

conversationSchema.index({ 'participants.userId': 1 });
conversationSchema.index({ updatedAt: -1 });

const Conversation = mongoose.models.Conversation || mongoose.model('Conversation', conversationSchema);

export default Conversation;
