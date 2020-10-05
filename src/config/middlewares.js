const express = require('express');
const path = require('path');
const { bodyParser, cookieParser, logger, stylus } = require('../middlewares/index')

module.exports = (app) => {
    app.use(cookieParser())
    app.use(bodyParser.json())
    app.use(stylus.middleware(path.join(__dirname, 'public')));
    app.use(logger('dev'));
    app.use(express.urlencoded({extended: false}));
    app.use(express.static(path.join(__dirname, 'public')));
}

