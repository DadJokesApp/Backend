const express = require('express');
const server = express();

const jokesRouter = require('./routers/jokes-router.js');
const usersRouter = require('./routers/users-router.js');

server.use(express.json());
server.use('/api/jokes', jokesRouter);
server.use('/api/users', usersRouter);

module.exports = server;
