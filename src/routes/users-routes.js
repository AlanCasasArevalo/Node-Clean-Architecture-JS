const adapterRoute = require('../adapter/express-route-adapter')
const makeUsers = require('../factories/users')

module.exports = (router) => {
    router.get(
        '/',
        adapterRoute(makeUsers())
    )
}