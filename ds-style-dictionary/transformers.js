/**
 * Transformerer verdien fra "boxShadow" fra Figma Tokens til css verdi.
 * @param token Et token med type "boxShadow" fra våre design-tokens.
 * @returns En ferdig streng til bruk med css-property "box-shadow".
 */
function transformBoxShadow(token) {
    // TODO: Skriv en box shadow transformer.
  return;
};

/**
 * Konverterer en token til css verdi med "px" bak.
 * @param token Et token fra våre design-tokens.
 * @returns Tokenets verdi med pixel bak. 
 */
function transformSizeToPx(token) {
  // TODO: Skriv en size transformer.
  return;
}

/**
 * Konverterer en design token med type "typography" til en font-shorthand verdi.
 * @param {*} token Et token med type "typography" fra våre design-tokens.
 * @returns Tokenet konvertert til en verdi for bruk med font-shorthand.
 */
function transformTypographyToFont(token) {
  // TODO: Skriv en typography transformer.
  return;
}

module.exports = {
  transformBoxShadow,
  transformSizeToPx,
  transformTypographyToFont,
}
