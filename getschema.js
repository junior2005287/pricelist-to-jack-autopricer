const SKU = require('@tf2autobot/tf2-sku');
const Schema = require("@tf2autobot/tf2-schema");
const fs = require("fs");

// API KEY: steamcommunity.com/dev/apikey
const schemaManager = new Schema({
    apiKey: ""
});
schemaManager.init(() => {});
schemaManager.on("ready", () => {
    fs.writeFileSync("schema.json", JSON.stringify(schemaManager.schema, null, 2));
    process.exit(1);
});