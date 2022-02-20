require('dotenv').config()
const { MongoClient } = require("mongodb");
const insert = require('./insert');

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
    insert.CreateMultipleProducts(client, items);
  } catch (e) {
    console.error(e);
  } finally {
    // await client.close();
  }
  
}




MongoConnect().catch(console.error);

