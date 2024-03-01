// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  provider: String, // 'gmail' or 'facebook'
  role: { type: String, enum: ['admin', 'superuser', 'user'], default: 'user' }
});

module.exports = mongoose.model('User', userSchema);
