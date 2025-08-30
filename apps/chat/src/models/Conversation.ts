import mongoose, { Document, Schema, Types } from 'mongoose';

export type ConversationType = 'direct' | 'group';

export interface IConversation extends Document {
  type: ConversationType;
  name?: string;
  description?: string;
  participants: string[]; // Array of user IDs
  createdBy: string; // User ID
  admins: string[]; // Array of admin user IDs
  avatar?: string;
  isPrivate: boolean;
  lastMessage?: Types.ObjectId; // Reference to the last message
  lastMessageAt?: Date;
  unreadBy: string[]; // Array of user IDs who haven't read the last message
  createdAt: Date;
  updatedAt: Date;
}

const ConversationSchema = new Schema<IConversation>(
  {
    type: {
      type: String,
      enum: ['direct', 'group'],
      required: true,
    },
    name: {
      type: String,
      required: function() {
        return this.type === 'group';
      },
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    participants: [
      {
        type: String, // User ID
        required: true,
      },
    ],
    createdBy: {
      type: String, // User ID
      required: true,
    },
    admins: [
      {
        type: String, // User ID
      },
    ],
    avatar: {
      type: String,
    },
    isPrivate: {
      type: Boolean,
      default: false,
    },
    lastMessage: {
      type: Schema.Types.ObjectId,
      ref: 'Message',
    },
    lastMessageAt: {
      type: Date,
    },
    unreadBy: [
      {
        type: String, // User ID
      },
    ],
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

// Index for faster querying of user conversations
ConversationSchema.index({ participants: 1, updatedAt: -1 });

// Index for searching conversations by name (for groups)
ConversationSchema.index({ name: 'text', description: 'text' });

// Compound index for direct message conversations
ConversationSchema.index(
  { participants: 1, type: 1 },
  {
    unique: true,
    partialFilterExpression: { type: 'direct' },
  }
);

// Pre-save hook to ensure admins are also participants
ConversationSchema.pre('save', function (next) {
  // Ensure the creator is an admin
  if (this.isNew && !this.admins.includes(this.createdBy)) {
    this.admins.push(this.createdBy);
  }

  // Ensure admins are participants
  this.admins = this.admins.filter(adminId => 
    this.participants.includes(adminId)
  );
  
  next();
});

// Static method to find or create direct conversation
ConversationSchema.statics.findOrCreateDirect = async function (
  userId1: string,
  userId2: string
) {
  const participants = [userId1, userId2].sort();
  
  let conversation = await this.findOne({
    type: 'direct',
    participants: { $all: participants, $size: participants.length },
  });

  if (!conversation) {
    conversation = await this.create({
      type: 'direct',
      participants,
      createdBy: userId1,
      isPrivate: true,
    });
  }

  return conversation;
};

export const Conversation = mongoose.model<IConversation>(
  'Conversation',
  ConversationSchema
);
