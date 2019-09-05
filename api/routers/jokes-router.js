const express = require('express');
const router = express.Router();
const Jokes = require('../jokes/jokes-model.js');

// GET api/jokes/
router.get('/', async (req, res) => {
  try {
    const jokes = await Jokes.all();

    if (jokes) {
      res.status(200).json(jokes);
    } else {
      res.status(400).json({message: "No jokes found"});
    } 
  } catch (err) {
    res.status(500).json({message: "Error getting jokes"});
  }
});

module.exports = router;

