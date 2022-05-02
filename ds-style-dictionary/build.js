const baseConfig = require("./config.json");
const StyleDictionary = require("style-dictionary").extend(baseConfig);

// TODO: Registrer transforms for våre custom tokens.
StyleDictionary.registerTransform({
  name: "",
  type: "value",
  transitive: false,
  matcher: () => {},
  transformer: () => {},
});

StyleDictionary.buildAllPlatforms();