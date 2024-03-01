// routes/foodRoutes.js
const express = require('express');
const router = express.Router();
const Food = require('../models/Food');

router.get('/', async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add more routes for filtering and searching if needed

module.exports = router;
