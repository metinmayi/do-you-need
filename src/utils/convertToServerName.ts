/**
 * Takes a phrase, lowercases it and joins it with an underscore.
 * @param phrase Word to be converted
 * @returns {string} The same phrase but lowercased and joined by an underscore
 */
export function convertToServerName(phrase: string) {
  return phrase
    .split(" ")
    .map((word) => word.toLowerCase())
    .join("_");
}
