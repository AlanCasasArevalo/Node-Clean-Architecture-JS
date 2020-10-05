const express = require('express');
const fg = require('fast-glob')

module.exports = (app) => {
    const router = express.Router();
    app.use('/', router)
    const routesArray = fg.sync('**/src/routes/**routes.js')
    console.log('', routesArray)

    routesArray.map(async file => {
        (await require(`../../${file}`))(router)
    })
}
