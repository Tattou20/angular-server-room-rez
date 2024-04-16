require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}`; 
const client = new MongoClient(uri);
async function connect() {
    try {
        await client.connect();
        return client;
    } catch (e) {
        console.error(e);
        throw e; 
    }
}
module.exports = { connect };