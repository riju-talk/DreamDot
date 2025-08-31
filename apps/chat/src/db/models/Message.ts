
import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IMessage extends Document {
  _id: Types.ObjectId;
  conversationId: string;
  conversation: Types.ObjectId;
  senderId: string;
  sender: string;
  content?: string;
  ciphertext?: string;
  nonce?: string;
  keyId?: string;
  type: 'text' | 'image' | 'file' | 'audio' | 'video' | 'system';
  attachments: Array<{
    url: string;
    type: string;
    name?: string;
    size?: number;
  }>;
  readBy: string[];
  editedAt?: Date;
  isDeleted: boolean;
  replyTo?: Types.ObjectId;
  timestamp: Date;
  createdAt: Date;
  updatedAt: Date;
}

const messageSchema = new Schema<IMessage>({
  conversationId: {
    type: String,
    required: true,
    index: true
  },
  conversation: {
    type: Schema.Types.ObjectId,
    ref: 'Conversation',
    required: true
  },
  senderId: {
    type: String,
    required: true,
    index: true
  },
  sender: {
    type: String,
    required: true
  },
  content: {
    type: String,
    trim: true,
    maxlength: 4000
  },
  // For encrypted messages
  ciphertext: {
    type: String
  },
  nonce: {
    type: String
  },
  keyId: {
    type: String
  },
  type: {
    type: String,
    enum: ['text', 'image', 'file', 'audio', 'video', 'system'],
    default: 'text'
  },
  attachments: [{
    url: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    name: {
      type: String
    },
    size: {
      type: Number
    }
  }],
  readBy: [{
    type: String
  }],
  editedAt: {
    type: Date
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  replyTo: {
    type: Schema.Types.ObjectId,
    ref: 'Message'
  },
  timestamp: {
    type: Date,
    default: Date.now,
    index: true
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for better performance
messageSchema.index({ conversation: 1, timestamp: -1 });
messageSchema.index({ senderId: 1, timestamp: -1 });
messageSchema.index({ readBy: 1 });

// Virtual for read status
messageSchema.virtual('isRead').get(function() {
  return this.readBy.length > 0;
});

export const Message = mongoose.model<IMessage>('Message', messageSchema);
