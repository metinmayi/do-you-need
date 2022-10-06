import { capitalizeFirstLetter } from "./capitalizeFirstLetter";

/**
 * Takes a phrase and capitalizes the first letter of each word
 * @param phrase Word to be converted
 * @returns {string} The same phrase but every start word is capitalize
 */
export function convertToDYNName(phrase: string): string {
  return phrase
    .split("_")
    .map((word) => capitalizeFirstLetter(word))
    .join(" ");
}
