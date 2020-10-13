const { successResponse, serverError, unauthorizedError, badRequest } = require('../http/http-helper')

class GetUsersController {
    async handle (httpRequest) {
        return badRequest()
    }
}

module.exports = GetUsersController