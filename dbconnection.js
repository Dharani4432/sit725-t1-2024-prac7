const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://s224092776:Dharani12345@cluster0.1j45q5k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

client.connect(err => {
    if (!err) {
        console.log('Mongo DB connected');
    } else {
        console.log('Error: ', err);
        process.exit(1);
    }
});

module.exports = client;