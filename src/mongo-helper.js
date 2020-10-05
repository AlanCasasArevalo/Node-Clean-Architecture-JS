const { MongoClient, Collection } = require('mongodb')

const connect = async (url) => {
    await MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

const disconnect = async () => {
    await MongoClient.disconnect()
}

const getCollection = async (collectionName, url) => {
    if (MongoClient.isConnected()) {
        await connect(url)
    } else {
        return MongoClient.db().collection(collectionName)
    }
}

module.exports = {
    connect,
    disconnect,
    getCollection,
}