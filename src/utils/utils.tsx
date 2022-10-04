import { BOSSES, BOSSNAMES } from "../models/bosses/bosses";

/**
 * remove later
 */
const hasVisitedBefore = () => {
  return localStorage.getItem("hasVisited") ? true : false;
};

/**
 *
 * @param word A word
 * @returns The word with uppercased first Letter
 */
const capitalizeFirstLetter = (word: string | boolean) => {
  if (typeof word === "boolean") return;
  return word.slice(0, 1).toUpperCase() + word.slice(1);
};

/**
 * Takes a phrase and capitalizes the first letter of each word
 * @param phrase Word to be converted
 * @returns {string} The same phrase but every start word is capitalize
 */
export function convertToDYNName(phrase: string) {
  return phrase
    .split("_")
    .map((word) => capitalizeFirstLetter(word))
    .join(" ");
}

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

/**
 * Checks if the word is of the type BOSSNAME
 */
export const isBossName = (word: string): word is BOSSNAMES => {
  return BOSSES.includes(word as BOSSNAMES);
};

export { hasVisitedBefore, capitalizeFirstLetter };
