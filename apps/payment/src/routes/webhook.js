const express = require('express')
const router = express.Router()
const Stripe = require('stripe')
const { Transaction, User } = require('@repo/database-mongo')

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
          // Update User credits directly using shared model
          await User.updateOne(
            { _id: transaction.userId },
            { $inc: { credits: transaction.amount } }
          );
          console.log('Payment completed and credits updated:', session.id)
        } catch (error) {
          console.error('Error updating credits:', error)
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
