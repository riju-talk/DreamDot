const express = require('express')
const router = express.Router()
const Stripe = require('stripe')
const Transaction = require('../models/Transaction')
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
              name: type === 'replenish' ? 'Replenish Balance' : 'Purchase',
              description: `Add $${amount} to your DreamDot balance`,
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

router.post('/redeem-balance', authenticateRequest, validateUserAccess, async (req, res) => {
  try {
    const { userId, amount } = req.body

    if (!amount || !userId) {
      return res.status(400).json({ error: 'Amount and userId are required' })
    }

    if (amount <= 0) {
      return res.status(400).json({ error: 'Amount must be positive' })
    }

    const balanceResponse = await fetch(`${process.env.WEB_APP_URL}/api/balance/get`, {
      headers: {
        'X-User-Id': userId,
        'X-Service-Secret': process.env.SERVICE_SECRET
      }
    })

    if (!balanceResponse.ok) {
      return res.status(500).json({ error: 'Failed to fetch balance' })
    }

    const balanceData = await balanceResponse.json()

    if (amount > balanceData.redeemableBalance) {
      return res.status(400).json({ 
        error: `Insufficient redeemable balance. Available: $${balanceData.redeemableBalance.toFixed(2)}` 
      })
    }

    const transaction = new Transaction({
      userId,
      amount: -amount,
      type: 'redemption',
      status: 'pending',
      metadata: { 
        redeemableBalance: balanceData.redeemableBalance,
        currentBalance: balanceData.currentBalance
      }
    })
    await transaction.save()

    const updateResponse = await fetch(`${process.env.WEB_APP_URL}/api/balance/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Service-Secret': process.env.SERVICE_SECRET
      },
      body: JSON.stringify({
        userId,
        amount: -amount,
        transactionId: transaction._id.toString()
      })
    })

    if (!updateResponse.ok) {
      transaction.status = 'failed'
      await transaction.save()
      const errorData = await updateResponse.json()
      return res.status(500).json({ error: errorData.error || 'Failed to update balance' })
    }

    transaction.status = 'completed'
    await transaction.save()

    res.json({ success: true, transaction })
  } catch (error) {
    console.error('Redeem balance error:', error)
    res.status(500).json({ error: 'Failed to redeem balance' })
  }
})

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
