const express = require('express');
const router = express.Router();
const Jokes = require('../helpers/jokes-model.js')
const Users = require('../helpers/users-model.js')
const cors = require('cors')
// const restricted = require('../helpers/restricted-middleware-jokes.js');

router.use(cors())

// GET /api/jokes/
router.get('/', async (req, res) => {
  const { id } = req.params
  try {
    const jokes = await Jokes.all();

    if (jokes) {
      res.status(200).json(jokes);
    } else {
      res.status(400).json({ message: "No jokes found" });
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

// specific joke comments
router.get('/:id/comments', async (req, res) => {
  const { id } = req.params
  try {
    const jokes = await Jokes.findComments(id)

    if (jokes.length) {
      res.json(jokes)
    } else {
      res.status(404).json({ message: 'Could not find jokes for given scheme' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to get jokes' })
  }
})


// GET by ID - /api/jokes/:id
router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const joke = await Jokes.findById(id)
    if (joke) {
      res.json(joke)
    } else {
      res.status(404).json({
        message: 'Could not find joke with given id 🤷‍'
      })
    }
  } catch (err) {
    res.status(500).json({
      message: 'Failed to get joke ☠️'
    })
  }
})

// POST /api/jokes/
router.post('/', async (req, res) => {
  const joke = req.body;
  console.log(joke);

  try {
    if (joke) {
      // const username = req.decodedJwt.username;
      const username = joke.username;

      const [ user ] = await Users.findBy({username});
      joke.user_id = user.id;

      const [ jokeId ] = await Jokes.create(joke);
      res.status(201).json(jokeId);
    } else {
      res.status(400).json({message: 'Joke required'});
    }
  } catch (err) {
    res.status(500).json({message: 'Error adding joke'});
  }
});

// DELETE /api/jokes/1
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Jokes.remove(id)
    if (deleted) {
      res.status(200).json(deleted);
    } else {
      res.status(404).json({message: 'Not found'});
    }
  } catch (err) {
    res.status(500).json({message: 'Error deleting a joke'});
  }
})

// PUT /api/jokes/1
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const jokeChanges = req.body;

  try {
    const joke = await Jokes.find(id);

    if (joke) {
      const updatedJoke = await Jokes.update(jokeChanges, id);
      res.status(200).json(updatedJoke);
    } else {
      res.status(404).json({message: 'Joke not found'});
    }
  } catch (err) {
    res.status(404).json({message: 'Error updating joke'});
  }
});


module.exports = router;
