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

export { hasVisitedBefore, capitalizeFirstLetter };
