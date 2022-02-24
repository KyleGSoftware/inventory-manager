// imports
import { MongoClient } from 'mongodb'
import express from 'express';
import * as search from './database/search.js';
import 'dotenv/config'
import { updateAllProducts, updateItemBySKU } from './database/update.js';
import bodyParser from 'body-parser';


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

// init express json parser
app.use(express.json())


app.get('/name/:name', async (req, res) => {
  const result = await search.findOneItemByName(client, req.params.name);
  res.json(result);
})

app.get('/sku/:sku', async (req, res) => {
  //HTTP queries and path variables are sent as a string - we need to cast req.params.sku into an int
  req.params.sku = parseInt(req.params.sku);
  const result = await search.findOneItemBySKU(client, req.params.sku);
  res.json(result);
})

//TODO: test this route
app.post('/sku/:sku', async (req, res) => {
  const result = await updateItemBySKU(client, req.params.sku, req.body);
  console.log(req.body);
  res.json(result);
})

app.get('/search/all', async (req, res) => {
  const result = await search.findAllItems(client);
  res.json(result);
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