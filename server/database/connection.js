import { MongoClient } from 'mongodb'
require('dotenv').config()
const insert = require('./insert');
const search = require('./search');

const connectionString = process.env.ATLAS_URI;

//initialize mongo client
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const items = [{Name:"Test"}, {Name:"Test2"}];

// initialize connect to mongo db
async function MongoConnect() {
  try {
    await client.connect();
  } catch (e) {
    console.error(e);
  } finally {
    // await client.close();
  }
  
}




MongoConnect().catch(console.error);

