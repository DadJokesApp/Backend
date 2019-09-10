// Set up express 🚀
const express = require('express')

// Set up routes 🏇
const authRouter = require('./routers/auth-router.js')
const usersRouter = require('./routers/users-router.js')
const jokesRouter = require('./routers/jokes-router.js')
const commentsRouter = require('./routers/comments-router.js')

// Set up middleware 🔗
const helmet = require('helmet')
const morgan = require('morgan')

// Enable express on server 🚀
const server = express()

// Enable routes and middleware 🐎
server.use(morgan('dev'))
server.use(express.json())
server.use('/api/auth', authRouter)
server.use('/api/users', usersRouter)
server.use('/api/jokes', jokesRouter)
server.use('/api/comments', commentsRouter)
server.use(helmet())

// Root GET 🌳
server.get('/', (req, res) => {
  res.send('Welcome to the DadJokes database! 🔥')
})

// Export server 🚀
module.exports = server
