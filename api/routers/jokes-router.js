const express = require('express');
const router = express.Router();
const Jokes = require('../jokes/jokes-model.js');
const Users = require('../helpers/helper-model.js')
const restricted = require('../helpers/restricted-middleware-jokes.js');


// GET /api/jokes/
router.get('/', restricted, async (req, res) => {
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

// POST /api/jokes/
router.post('/', restricted, async (req, res) => {
  const joke = req.body;

  try {
    if (joke) {
      const username = req.decodedJwt.username;
      const [ user ] = await Users.findBy({username});
      joke.user_id = user.id;

      const [ jokeId ] = await Jokes.create(joke);
      res.status(201).json(jokeId);
    } else {
      res.status(400).json({message: 'Joke required'});
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({message: 'Error adding joke'});
  }
});

// DELETE /api/jokes/1
router.delete('/:id', restricted, async (req, res) => {
  const { id } = req.params;
  console.log('id:', id);

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

