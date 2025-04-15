const express = require('express');
const router = express.Router();
const { calculateMatch } = require('../services/matchService');

router.post('/', (req, res) => {
  const { cv, job } = req.body;
  const score = calculateMatch(cv, job);
  res.json({ score });
});

module.exports = router;
