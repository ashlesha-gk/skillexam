// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/', async (req, res) => {
  try {
    const { foodId, userId, address, paymentMode } = req.body;
    const order = new Order({ foodId, userId, address, paymentMode });
    await order.save();
    res.json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
