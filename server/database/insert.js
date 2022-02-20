// import connection.js exports
const connection = require("./connection");

// load mongodb module


//const connectionString = process.env.ATLAS_URI;
//const { MongoClient } = require('mongodb');

async function CreateProduct(client, newProduct) {
    const result = await client.db("pottery").collection("inventory").insertOne(newProduct);

  }

async function CreateMultipleProducts(client, newProducts) {
    const result = await client.db("pottery").collection("inventory").insertMany(newProducts);

    console.log(`Number of new products added: ${result.insertedCount}`)
}



exports.CreateProduct = CreateProduct;
exports.CreateMultipleProducts = CreateMultipleProducts;
