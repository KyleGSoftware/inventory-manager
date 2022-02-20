// imports
import { MongoClient } from 'mongodb'
import express from 'express';



// import connection.js exports
const connection = require("./database/connection");


// init express
const app = express()
const port = process.env.PORT || 4000;



// init mongodb module
const connectionString = process.env.ATLAS_URI;
const mongoClient = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const result = connection.connectToServer();


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
