const express = require('express');
const router = express.Router();
const fg = require('fast-glob')

module.exports = (app) => {
  app.use('/', router)
  fg.sync('**/src/routes/**routes.js').map(async file => {
    (await require(`../routes/${file}`)).default(router)
  })
}
