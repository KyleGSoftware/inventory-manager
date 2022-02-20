async function findOneItemBySKU(client, productSKU) {
    const result = await client.db("pottery").collection("inventory").findOne({ProductSKU: productSKU});

    if (result) {
        console.log(`Item found with SKU: ${productSKU}`);
    } else {
        console.log(`No item found with SKU: ${productSKU}`);
    }
}

exports.findOneItemBySKU = findOneItemBySKU;