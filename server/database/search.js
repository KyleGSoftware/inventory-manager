export async function findOneItemBySKU(client, productSKU) {
    const result = await client.db("pottery").collection("inventory").findOne({ProductSKU: productSKU});

    if (result) {
        console.log(`Item found with SKU: ${productSKU}`);
    } else {
        console.log(`No item found with SKU: ${productSKU}`);
    }
}

export async function findOneItemByName(client, name) {
    const result = await client.db("pottery").collection("inventory").findOne({Name: name});

    if (result) {
        console.log(`Item found with name: ${name}`);
    } else {
        console.log(`No item found with name: ${name}`);
    }
}

export async function findAllItems(client) {
    const cursor = await client.db("pottery").collection("inventory").find()
    .sort({ ProductSKU: 1})
        .limit(Number.MAX_SAFE_INTEGER);

    const results = await cursor.toArray();

    if (results.length > 0) {
        console.log("Results of searching whole inventory, sorted by ProducSKU: ");
        results.forEach((result) => {
            console.log(`Product SKU: ${result.ProductSKU}`);
        })
    }
}