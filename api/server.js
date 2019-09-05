const express = require('express');
const server = express();

const jokesRouter = require('./routers/jokes-router.js');

server.use(express.json());
server.use('/api/jokes', jokesRouter);

module.exports = server;
