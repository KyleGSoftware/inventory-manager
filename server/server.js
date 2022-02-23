// imports
import { MongoClient } from 'mongodb'
import express from 'express';
import * as search from './database/search.js';
import 'dotenv/config'


// init mongodb module
const connectionString = process.env.ATLAS_URI;
console.log(`connectionString = ${process.env.ATLAS_URI}`);
const client = await new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function main() {
  MongoConnect()
}


// init express
const app = express()
const port = process.env.PORT || 4000;




app.get('/item/:sku', async (req, res) => {
  //HTTP queries and path variables are sent as a string - we need to cast req.params.sku into an int
  req.params.sku = parseInt(req.params.sku);
  const result = await search.findOneItemBySKU(client, req.params.sku)
  res.json(result)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




async function MongoConnect() {
  try {
    await client.connect();
  } catch (e) {
    console.error(e);
  } finally {
    //await client.close();
  }
  
}

main();