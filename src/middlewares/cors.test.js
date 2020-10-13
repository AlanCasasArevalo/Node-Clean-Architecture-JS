const request = require('supertest')
const app = require('../config/app')

describe('CORS MIDDLEWARE', () => {
    test('Should enable CORS', async () => {
        app.get('/test_cors', (req, res) => {
            res.send()
        })
        await request(app)
            .get('/test_cors')
            .expect('access-control-allow-origin', '*')
            .expect('access-control-allow-methods', '*')
            .expect('access-control-allow-headers', '*')
    })
})
