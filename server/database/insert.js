export async function CreateProduct(client, newProduct) {
    const result = await client.db("pottery").collection("inventory").insertOne(newProduct);

  }

export async function CreateMultipleProducts(client, newProducts) {
    const result = await client.db("pottery").collection("inventory").insertMany(newProducts);

    console.log(`Number of new products added: ${result.insertedCount}`)
}

