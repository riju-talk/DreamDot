const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });

console.log('=== Payment Service Environment Test ===');
console.log('MONGO_CLUSTER:', process.env.MONGO_CLUSTER ? 'LOADED' : 'NOT FOUND');
console.log('STRIPE_SECRET_KEY:', process.env.STRIPE_SECRET_KEY ? 'LOADED' : 'NOT FOUND');
console.log('CORS_ORIGIN:', process.env.CORS_ORIGIN || 'NOT SET');
console.log('====================================');
