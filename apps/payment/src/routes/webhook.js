const express = require('express')
const router = express.Router()
const Stripe = require('stripe')
const Transaction = require('../models/Transaction')

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

router.post('/stripe', async (req, res) => {
  const sig = req.headers['stripe-signature']

  let event

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret)
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message)
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }

  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object
      
      const transaction = await Transaction.findOneAndUpdate(
        { sessionId: session.id },
        {
          status: 'completed',
          stripePaymentIntentId: session.payment_intent,
        },
        { new: true }
      )

      if (transaction) {
        try {
          const updateResponse = await fetch(`${process.env.WEB_APP_URL}/api/balance/update`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Service-Secret': process.env.SERVICE_SECRET
            },
            body: JSON.stringify({
              userId: transaction.userId,
              amount: transaction.amount,
              transactionId: transaction._id.toString()
            })
          })

          if (!updateResponse.ok) {
            console.error('Failed to update balance for completed payment:', session.id)
          } else {
            console.log('Payment completed and balance updated:', session.id)
          }
        } catch (error) {
          console.error('Error updating balance:', error)
        }
      }

      break

    case 'checkout.session.expired':
      const expiredSession = event.data.object
      
      await Transaction.findOneAndUpdate(
        { sessionId: expiredSession.id },
        { status: 'expired' }
      )

      console.log('Session expired:', expiredSession.id)
      break

    default:
      console.log(`Unhandled event type ${event.type}`)
  }

  res.json({ received: true })
})

module.exports = router
