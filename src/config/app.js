const express = require('express');
const app = express();

const setupMiddlewares = require('./middlewares')
const setupRoutes = require('./routes')

setupMiddlewares(app)
setupRoutes(app)

module.exports = app;
