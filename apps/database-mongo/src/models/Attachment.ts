import mongoose from 'mongoose';

const attachmentSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true
    },
    originalName: {
        type: String,
        required: true
    },
    mimeType: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    uploadedBy: {
        type: String,
        required: true
    },
    message: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    }
}, {
    timestamps: true
});

export const Attachment = mongoose.models.Attachment || mongoose.model('Attachment', attachmentSchema);
