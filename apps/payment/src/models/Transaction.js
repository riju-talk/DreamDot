const mongoose = require('mongoose')
const { Schema } = mongoose

const TransactionSchema = new Schema({
  userId: { type: String, required: true, index: true },
  sessionId: { type: String, sparse: true },
  stripePaymentIntentId: String,
  amount: { type: Number, required: true },
  type: { type: String, enum: ['replenish', 'redemption', 'purchase'], required: true },
  status: { type: String, enum: ['pending', 'completed', 'failed', 'expired'], default: 'pending' },
  metadata: Schema.Types.Mixed,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

module.exports = mongoose.models.Transaction || mongoose.model('Transaction', TransactionSchema)
