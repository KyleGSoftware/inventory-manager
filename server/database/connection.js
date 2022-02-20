require('dotenv').config()
const { MongoClient } = require("mongodb");

const connectionString = process.env.ATLAS_URI;

//initialize mongo client
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

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

const item = {Name:"Test"};

async function CreateProduct(client, newProduct) {
  const result = await client.db("pottery").collection("inventory").insertOne(newProduct);

  console.log(`${result.insertedId}`);
}



MongoConnect().catch(console.error);

