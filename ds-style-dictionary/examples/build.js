const baseConfig = require("./config.json");
const StyleDictionary = require("style-dictionary").extend(baseConfig);

console.log(`\n[style-dictionary] generating example tokens`)

StyleDictionary.buildAllPlatforms();