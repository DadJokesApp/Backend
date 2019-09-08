// Set up express 🚀
const express = require('express')

// Set up routes 🏇
const authRouter = require('./routers/auth-router.js')
const usersRouter = require('./routers/users-router.js')
const jokesRouter = require('./routers/jokes-router.js')

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
server.use(helmet())
// server.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*")
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
//   next()
// })

// Root GET 🌳
server.get('/', (req, res) => {
  res.send('Welcome to the DadJokes database! 🔥')
})

// Export server 🚀
module.exports = server
