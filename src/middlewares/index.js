const cookieParser = require('cookie-parser');
const logger = require('morgan');
const stylus = require('stylus');
const bodyParser = require('./body-parser')
const contentType = require('./content-type')
const cors = require('./cors')

module.exports = {
    cookieParser,
    logger,
    stylus,
    bodyParser,
    contentType,
    cors
}