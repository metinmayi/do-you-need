import { GET_CHARS_URL } from "../../config/config";
import { isRetrievedCharacter } from "../../models/RetrievedCharacter";

/**
 * This function uses the blizzard authentication to retrieve an accounts max-level characters
 * @returns {RetrievedCharacter[]} A list of max-level characters that belongs to the account
 */
export const getCharacters = async () => {
  try {
    const result = await fetch(GET_CHARS_URL, { credentials: "include" });
    const characters = await result.json();
    if (isRetrievedCharacter(characters)) {
      return characters;
    }
    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
};
