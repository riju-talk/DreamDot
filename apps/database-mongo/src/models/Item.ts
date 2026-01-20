import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({}, { strict: false, timestamps: true });
export const Item = mongoose.models.Item || mongoose.model('Item', ItemSchema);
