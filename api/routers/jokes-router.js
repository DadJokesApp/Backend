const express = require('express');
const router = express.Router();
const db = require('../../data/db-config.js');

// GET api/jokes/
router.get('/', async (req, res) => {
    const jokes = await db('jokes');
    res.status(200).json(jokes);
});

module.exports = router;

