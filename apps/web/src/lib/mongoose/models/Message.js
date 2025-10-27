import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  conversationId: {
    type: String,
    required: true,
    index: true
  },
  senderId: {
    type: String,
    required: true
  },
  senderName: String,
  senderAvatar: String,
  content: {
    type: String,
    trim: true
  },
  type: {
    type: String,
    enum: ['text', 'image', 'file', 'audio'],
    default: 'text'
  },
  fileName: String,
  timestamp: {
    type: Date,
    default: Date.now,
    index: true
  },
  readBy: [{
    type: String
  }]
}, {
  timestamps: true
});

messageSchema.index({ conversationId: 1, timestamp: -1 });
messageSchema.index({ senderId: 1 });

const Message = mongoose.models.Message || mongoose.model('Message', messageSchema);

export default Message;
