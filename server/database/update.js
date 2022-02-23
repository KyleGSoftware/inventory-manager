export async function updateItemBySKU(client, productSKU, updatedDocument) {
    const result = await client.db("pottery").collection("inventory").updateOne({ProductSKU: productSKU}, {$set: updatedDocument });

    if (result) {
        console.log(`Item found with SKU: ${productSKU}, updated with new attributes:`);
        for (const attribute in updatedDocument) {
            console.log(`updatedDocument.${attribute}: ${updatedDocument[attribute]}`);
        }
    } else {
        console.log(`No item found with SKU: ${productSKU}`);
    }
}

export async function updateAllProducts(client, updatedAttribute) {
    const result = await client.db("pottery").collection("inventory").updateMany({}, {$set: updatedAttribute });

    if (result) {
        console.log(`${result.matchedCount} documents matched the query`);
        console.log(`${result.modifiedCount} were updated as a result.`)

    } else {
        console.error("An error occurred with updateAllProducts.");
    }
}

export async function deleteBySKU(client, productSKU) {
    const result = await client.db("pottery").collection("inventory").deleteOne({ProductSKU: productSKU});


    if (result) {
        console.log(`${result.deletedCount} documents(s) found with SKU ${productSKU} and deleted`);
    } 
}