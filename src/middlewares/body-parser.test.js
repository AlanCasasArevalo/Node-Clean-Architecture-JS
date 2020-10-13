const request = require('supertest')
const app = require('../config/app')

describe('BODY PARSER MIDDLEWARE',  () => {
    test('Should parser body as json', async () => {
        app.post('/test_body_parser', (req, res) => {
            res.send(req.body)
        })
        await request(app)
            .post('/test_body_parser')
            .send({ name: 'Alan' })
            .expect({ name: 'Alan' })
    })
})