// Enable tools 🔨
const router = require('express').Router()
const Users = require('../helpers/users-model.js')
const cors = require('cors')
const jwt = require('jsonwebtoken')
// const restricted = require('../restrictedMiddleware/users.js')

router.use(cors())

// Set up endpoints 💀
router.get('/', async (req, res) => {
  const { id } = req.params
  try {
    const users = await Users.find()
    if (users) {
      res.status(200).json(users)
    } else {
      res.status(404).json({ message: 'Could not find users 🤷‍' })
    }
  } catch (e) {
    res.status(500).json({ message: 'Failed to get users ☠️' })
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const user = await Users.findById(id)
    if (user) {
      res.json(user)
    } else {
      res.status(404).json({
        message: 'Could not find user with given id 🤷‍'
      })
    }
  } catch (err) {
    res.status(500).json({
      message: 'Failed to get user ☠️'
    })
  }
})

router.get('/:id/jokes', async (req, res) => {
  const { id } = req.params
  try {
    const jokes = await Users.findJokes(id)

    if (jokes.length) {
      res.json(jokes)
    } else {
      res.status(404).json({ message: 'Could not find jokes for given scheme' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to get jokes' })
  }
})

router.get('/:id/jokes/:id', async (req, res) => {
  const { id } = req.params
  console.log(req.params)
  try {
    const jokes = await Jokes.findById(id)
    // const jokes = await Users.findJokes(id)

    if (jokes.length) {
      res.json(jokes)
    } else {
      res.status(404).json({ message: 'Could not find jokes with given id' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to get jokes' })
  }
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const changes = {
    id: req.body.id,
    username: req.body.username,
    email: req.body.email,
    img_url: req.body.img_url,
    password: req.body.password,

  }
  const token = genToken(changes)
  try {
    const user = await Users.findById(id)
    console.log(`changes: ${changes}`)
    console.log(`Token: ${req.params.token}`)
    console.log(`id: ${id}`)
    if (user) {
      const updatedUser = await Users.update(changes, id)
      res.status(200).json({ updatedUser, token })
    } else {
      res.status(404).json({
        message: 'Could not find user with given id 🤷'
      })
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Failed to update user ☠️' })
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const deleted = await Users.remove(id)
    if (deleted) {
      res.json({ removed: deleted })
    } else {
      res.status(404).json({
        message: 'Could not find the user with given id 🤷‍'
      })
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete user ☠️' })
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

// Export router 🚀
module.exports = router
