const baseConfig = require("./config.json");
const StyleDictionary = require("style-dictionary").extend(baseConfig);

const { isBoxShadow, isSize, isTypography } = require("./matchers");

const { transformBoxShadow, transformSizeToPx, transformTypographyToFont } = require("./transformers");

// Transformer størrelsesverdier fra Figma Tokens til css-verdier med "px"-property.
StyleDictionary.registerTransform({
  name: "ds/sizeToPx",
  type: "value",
  transitive: false,
  matcher: isSize,
  transformer: transformSizeToPx,
});

// Transformer tokens med type "boxShadow" fra Figma Tokens til css.
StyleDictionary.registerTransform({
  name: "ds/boxShadow",
  type: "value",
  transitive: false,
  matcher: isBoxShadow,
  transformer: transformBoxShadow,
});

// Transformer tokens med type "typografi" fra Figma Tokens til css.
StyleDictionary.registerTransform({
  name: "ds/typography",
  type: "value",
  transitive: true,
  matcher: isTypography,
  transformer: transformTypographyToFont,
});

console.log(`\n[style-dictionary] generating tokens`)

StyleDictionary.buildAllPlatforms();