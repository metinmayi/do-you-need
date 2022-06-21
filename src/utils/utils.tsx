import { Player } from "../models/Player";

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
 * Takes in a player object and returns an array of keyValue that is ready to be iterated in the table.
 * @param {Player} player Player Object
 * @returns iterablePlayer
 */
const getIterablePlayer = (player: Player) => {
  const playerArray = Object.entries(player);
  const unwantedKeyValues = ['selected', 'class', 'id', 'name', 'role'];
  const iterablePlayer = playerArray.filter(([key, value]) => {
    if (!unwantedKeyValues.includes(key)) {
      return true;
    }
    return false;
  })
  return iterablePlayer;
}

export { hasVisitedBefore, capitalizeFirstLetter, getIterablePlayer };
