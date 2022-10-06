/**
 * Takes a word and returns it with the first letter capitalized
 * @param word A word
 * @returns The word with uppercased first Letter
 */
export function capitalizeFirstLetter(word: string | boolean) {
  if (typeof word === "boolean") return "";
  return word.slice(0, 1).toUpperCase() + word.slice(1);
}
