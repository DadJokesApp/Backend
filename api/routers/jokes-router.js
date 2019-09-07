const express = require('express');
const router = express.Router();
const Jokes = require('../jokes/jokes-model.js');
const restricted = require('../helpers/restricted-middleware-jokes.js');
const jwt = require('jsonwebtoken')
const cors = require('cors')

router.use(cors())

// GET /api/jokes/
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


// GET /api/jokes/public
router.get('/public', async (req, res) => {
  try {
    const publicJokes = await Jokes.public();
    console.log(publicJokes);

    if (publicJokes) {
      res.status(200).json(publicJokes);
    } else {
      res.status(400).json({message: "No public jokes found"});
    }
  } catch (err) {
  }
})

// Generate a JSON web token 🌹
function genToken(user) {
  const payload = {
    id: user.id,
    username: user.username,
    email: user.email,
    img_url: user.img_url,
    password: user.password
  }

  const secret = process.env.SECRET

  const options = {
    expiresIn: '1h'
  }

  return jwt.sign(payload, secret, options)
}


module.exports = router;

