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