require('dotenv').config()
const { MongoClient } = require("mongodb");
const insert = require('./insert');

const connectionString = process.env.ATLAS_URI;

//initialize mongo client
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const item = {Name:"Test"};

// initialize connect to mongo db
async function MongoConnect() {
  try {
    await client.connect();
    insert.CreateProduct(client, item);
  } catch (e) {
    console.error(e);
  } finally {
    // await client.close();
  }
  
}



async function CreateProduct(client, newProduct) {
  const result = await client.db("pottery").collection("inventory").insertOne(newProduct);

  console.log(`${result.insertedId}`);
}



MongoConnect().catch(console.error);

