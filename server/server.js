// imports
import { MongoClient } from 'mongodb'
import express from 'express';
import * as search from './database/search.js';


// import connection.js exports
import * as connection from './database/connection.js'

// init mongodb module
const connectionString = process.env.ATLAS_URI;
const client = await new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const res = await connection.MongoConnect();


// init express
const app = express()
const port = process.env.PORT || 4000;




app.get('/item/:sku', async (req, res) => {
  const result = await search.findOneItemBySKU(client, req.params.sku)
  res.send(result)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
