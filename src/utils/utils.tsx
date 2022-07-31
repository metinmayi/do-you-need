import { BOSSES, BOSSNAMES } from "../models/Bosses";

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
 * Checks if the word is of the type BOSSNAME
 */
export const isBossName = (word: string): word is BOSSNAMES => {
  return BOSSES.includes(word as BOSSNAMES);
};

export { hasVisitedBefore, capitalizeFirstLetter };
