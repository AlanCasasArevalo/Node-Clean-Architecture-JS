const express = require('express');
const path = require('path');
const { bodyParser, cookieParser, logger, stylus, contentType, cors } = require('../middlewares/index')

module.exports = (app) => {
    app.use(cookieParser())
    app.use(contentType)
    app.use(bodyParser)
    app.use(cors)
    app.use(express.urlencoded({extended: false}));
    app.use(stylus.middleware(path.join(__dirname, 'public')));
    app.use(logger('dev'));
    app.use(express.static(path.join(__dirname, 'public')));
}

