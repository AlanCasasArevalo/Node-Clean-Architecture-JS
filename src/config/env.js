module.exports = {
    mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/node-test',
    port: process.env.PORT || 3000
}