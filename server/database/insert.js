// import connection.js exports
const connection = require("./connection");

// load mongodb module


//const connectionString = process.env.ATLAS_URI;
//const { MongoClient } = require('mongodb');

async function CreateProduct(client, newProduct) {
    const result = await client.db("pottery").collection("inventory").insertOne(newProduct);
  
    console.log(`${result.insertedId}`);
  }

exports.CreateProduct = CreateProduct;