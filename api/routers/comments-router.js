const express = require('express')
const router = express.Router()
const Comments = require('../helpers/comments-model.js')
const cors = require('cors')

router.use(cors())

// GET all comments for specific joke 🚀
router.get('/', async (req, res) => {
  try {
    const comments= await Comments.find()
    if (comments === 0) {
      res.status(200).json({ message: 'no comments on this joke' })
    }
    res.status(200).json(comments)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Could not retrieve the comments 💩'
    })
  }
})

// GET a specific comment for the chosen joke 🍒
router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const comment = await Comments.findById(id)
    if (comment) {
      res.status(200).json(comment)
    } else {
      res.status(404).json({
        message: 'The comment you are looking for could not be found 🤷‍'
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Could not retrieve the comment 💩'
    })
  }
})

// POST a new comment to your chosen joke 🚼
router.post('/', async (req, res) => {
  try {
    const comment = await Comments.insert(req.body)
    res.status(201).json(comment)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Could not add the comment 💩'
    })
  }
})

// DELETE an existing comment for your chosen joke ☠️
router.delete('/:id', async (req, res) => {
  try {
    const count = await Comments.remove(req.params.id)
    if (count > 0) {
      res.status(200).json({
        message: 'This comment has been deleted ☠️'
      })
    } else {
      rex.status(404).json({
        message: 'The comment you are looking for could not be found 🤷‍'
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Could not delete the comment 💩'
    })
  }
})

// PUT to update an existing comment in your chosen joke 👨‍💻
router.put('/:id', async (req, res) => {
  try {
    const comment = await Comments.update(req.params.id, req.body)
    if (comment) {
      res.status(200).json(comment)
    } else {
      res.status(404).json({
        message: 'The comment you are trying to update could not be found 🤷'
      })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Could not update the comment 💩'
    })
  }
})

module.exports = router