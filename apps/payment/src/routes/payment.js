const express = require('express')
const router = express.Router()
const Stripe = require('stripe')
const { Transaction, User } = require('@repo/database-mongo')
const { authenticateRequest, validateUserAccess } = require('../middleware/auth')

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

router.post('/create-checkout-session', authenticateRequest, validateUserAccess, async (req, res) => {
  try {
    const { amount, userId, type } = req.body

    if (!amount || !userId) {
      return res.status(400).json({ error: 'Amount and userId are required' })
    }

    if (amount <= 0 || amount > 10000) {
      return res.status(400).json({ error: 'Amount must be between $0.01 and $10,000' })
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: type === 'replenish' ? 'Purchase Credits' : 'Purchase',
              description: `Add ${amount} credits to your DreamDot balance`,
            },
            unit_amount: amount * 100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/settings?payment=success`,
      cancel_url: `${process.env.CLIENT_URL}/settings?payment=cancelled`,
      client_reference_id: userId,
      metadata: {
        userId: userId,
        type: type || 'replenish',
        amount: amount.toString(),
      },
    })

    const transaction = new Transaction({
      userId,
      sessionId: session.id,
      amount,
      type: type || 'replenish',
      status: 'pending',
    })
    await transaction.save()

    res.json({ sessionId: session.id, url: session.url })
  } catch (error) {
    console.error('Create checkout session error:', error)
    res.status(500).json({ error: 'Failed to create checkout session' })
  }
})

router.post('/spend-credits', authenticateRequest, validateUserAccess, async (req, res) => {
  try {
    const { userId, amount, metadata } = req.body;

    if (!userId || !amount) {
      return res.status(400).json({ error: 'UserId and amount are required' });
    }

    const user = await User.findOne({ _id: userId });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.credits < amount) {
      return res.status(400).json({ error: 'Insufficient credits' });
    }

    user.credits -= amount;
    await user.save();

    const transaction = new Transaction({
      userId,
      amount: -amount,
      type: 'purchase',
      status: 'completed',
      metadata
    });
    await transaction.save();

    res.json({ success: true, credits: user.credits });

  } catch (error) {
    console.error('Spend credits error:', error);
    res.status(500).json({ error: 'Failed to spend credits' });
  }
});

router.get('/transactions/:userId', authenticateRequest, async (req, res) => {
  try {
    const { userId } = req.params

    if (req.user.id !== userId && req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Forbidden: Cannot view another user\'s transactions' })
    }

    const transactions = await Transaction.find({ userId })
      .sort({ createdAt: -1 })
      .limit(100)

    res.json({ transactions })
  } catch (error) {
    console.error('Fetch transactions error:', error)
    res.status(500).json({ error: 'Failed to fetch transactions' })
  }
})

module.exports = router
