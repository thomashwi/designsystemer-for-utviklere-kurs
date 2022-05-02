/**
 * Sjekk om token er av type "boxShadow".
 * @param {*} token 
 * @returns true eller false.
 */
 function isBoxShadow(token) {
  return token.type === "boxShadow";
};

/**
 * Sjekk om token er en av typene som beskriver størrelse.
 * @param {*} token 
 * @returns true eller false.
 */
function isSize(token) {
  return token.type === "fontSizes"
  || token.type === "fontSize"
  || token.type === "dimension"
  || token.type === "borderRadius"
  || token.type === "spacing";
}

/**
 * Sjekk om token er av type "typography".
 * @param {*} token 
 * @returns true eller false.
 */
function isTypography(token) {
    return token.type === "typography";
}

module.exports = {
    isBoxShadow,
    isSize,
    isTypography,
}
