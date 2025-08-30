import mongoose, { Document, Schema, Types } from 'mongoose';

export interface IMessage extends Document {
  conversation: Types.ObjectId;
  sender: string; // User ID
  content: string;
  type: 'text' | 'image' | 'file' | 'audio';
  attachments?: Array<{
    url: string;
    type: string;
    name?: string;
    size?: number;
  }>;
  readBy: string[]; // Array of user IDs who have read the message
  reactions?: Array<{
    emoji: string;
    userId: string;
  }>;
  replyTo?: Types.ObjectId; // Reference to another message
  deleted: boolean;
  deletedAt?: Date;
  deletedBy?: string; // User ID who deleted the message
  createdAt: Date;
  updatedAt: Date;
}

const MessageSchema = new Schema<IMessage>(
  {
    conversation: {
      type: Schema.Types.ObjectId,
      ref: 'Conversation',
      required: true,
      index: true,
    },
    sender: {
      type: String, // Store as string to avoid population complexity
      required: true,
      index: true,
    },
    content: {
      type: String,
      required: function() {
        return this.type === 'text';
      },
    },
    type: {
      type: String,
      enum: ['text', 'image', 'file', 'audio'],
      default: 'text',
    },
    attachments: [
      {
        url: { type: String, required: true },
        type: { type: String, required: true }, // MIME type
        name: String,
        size: Number, // in bytes
      },
    ],
    readBy: [
      {
        type: String, // User ID
      },
    ],
    reactions: [
      {
        emoji: { type: String, required: true },
        userId: { type: String, required: true },
        _id: false,
      },
    ],
    replyTo: {
      type: Schema.Types.ObjectId,
      ref: 'Message',
    },
    deleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: Date,
    deletedBy: String, // User ID
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  }
);

// Index for faster querying of messages in a conversation
MessageSchema.index({ conversation: 1, createdAt: -1 });

// Index for unread messages
MessageSchema.index({ conversation: 1, readBy: 1 });

// Text index for search functionality
MessageSchema.index({ content: 'text' });

export const Message = mongoose.model<IMessage>('Message', MessageSchema);
