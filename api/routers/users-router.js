const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const Users = require('../users/users-model.js');
const secrets = require('../../config/secrets.js');

// POST /api/users/register
router.post('/register', async (req, res) => {
  let user = req.body;

  try {
    if (user) {
      const newUser = await Users.add(user);
      res.status(201).json(newUser);
    } else {
      res.status(400).json({message: "Need credentials"});
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({message: "Error saving user"});
  }
});

// POST /api/users/login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Users.findBy({username});

    if (user) {
      const token = generateToken(user);
      res.status(200).json(token);
    } else {
      res.status(401).json({ message: 'Invalid Credentials' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({message: "Error"});
  }
});

function generateToken(user) {
  const payload = {
    subject: "user",
    username: user.username
  };

  const secret = process.env.JWT_SECRET;

  const options = {
    expiresIn: '1h'
  };

  return jwt.sign(payload, secret, options);
}


module.exports = router;
