const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') })
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const paymentRoutes = require('./routes/payment')
const webhookRoutes = require('./routes/webhook')

const app = express()
const PORT = 3002  // FORCE payment service to use port 3002
const HOST = '0.0.0.0'

app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  credentials: true
}))

app.use('/webhook', bodyParser.raw({ type: 'application/json' }))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGO_CLUSTER || 'mongodb://localhost:27017/dreamdot')
  .then(() => console.log('MongoDB connected for payment service'))
  .catch(err => console.error('MongoDB connection error:', err))

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: 'payment' })
})

app.use('/api/payment', paymentRoutes)
app.use('/webhook', webhookRoutes)

app.use((err, req, res, next) => {
  console.error('Error:', err)
  res.status(500).json({ error: err.message || 'Internal server error' })
})

app.listen(PORT, HOST, () => {
  console.log(`Payment service running on port ${PORT}`)
})

module.exports = app
