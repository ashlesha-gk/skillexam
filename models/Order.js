// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  foodId: { type: mongoose.Schema.Types.ObjectId, ref: 'Food' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  orderId: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending', 'completed', 'cancelled'], default: 'pending' },
  address: String,
  paymentMode: { type: String, enum: ['cash', 'card', 'upi'] }
});

module.exports = mongoose.model('Order', orderSchema);
