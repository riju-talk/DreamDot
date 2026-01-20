import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
    _id: string; // We use string IDs (often from Auth provider or UUID)
    email?: string;
    name?: string;
    avatar?: string;
    credits: number;
}

const userSchema = new mongoose.Schema({
    _id: String,
    email: String,
    name: String,
    avatar: String,
    credits: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

export const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);
