const AppError = require('../http/app-error');

const badRequest = () => {
    const error = new AppError('Bad request', 400)
    return error
}

const unauthorizedError = () => {
    const error = new AppError('Unauthorized error', 401)
    return error
}

const serverError = () => {
    const error = new AppError('Server error', 500)
    return error
}

const successResponse = (data) => {
    return  {
        statusCode: 200,
        body: data
    }
}

module.exports = {
    badRequest,
    unauthorizedError,
    serverError,
    successResponse
}