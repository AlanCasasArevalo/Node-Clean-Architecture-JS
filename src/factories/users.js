const GetUsersController = require('../controllers/getUsersController')

const makeUsers = () => {
    return new GetUsersController()
}

module.exports = makeUsers