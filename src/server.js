const mongoHelper = require('./mongo-helper')
const { port, mongoUrl} = require('./config/env')

mongoHelper.connect(mongoUrl)
    .then(async () => {
        console.log('Conectando')
        const app = (await require('./config/app'))
        app.listen(port, () => {
            console.log(`Conectado servidor corriendo en la siguiente direccion http://localchost:${port}`)
        })
    })
    .catch((error) => {
        console.log('Error al conectarse a Mongo ==> ', error)
    })