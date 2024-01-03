const fs = require("fs");
const pricelist = require("./pricelist.json");
const schema = require("./schema.json");
const SchemaManager = require("@tf2autobot/tf2-schema");
const SKU = require("@tf2autobot/tf2-sku");

const schemaManager = new SchemaManager({
    apiKey: null
});
schemaManager.setSchema(schema);

const item_list = {
    items: [
        
    ]
}

for (var i in pricelist) {
    item_list.items.push({
        name: schemaManager.schema.getName(SKU.fromString(i), true)
    });
}
fs.writeFileSync("./item_list.json", JSON.stringify(item_list, null, 2));