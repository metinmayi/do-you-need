import { GET_GUILD_URL } from "../../config/config";

/**
 * Retrieves the character's guild from the API
 * @param character Character name
 * @param realm Realm name
 * @returns {Promise<IGuild | undefined>} Guild object
 */
export const getCharactersGuild = async (character: string, realm: string) => {
  try {
    const result = await fetch(
      `${GET_GUILD_URL}?character=${character}&realm=${realm}`,
      { credentials: "include" }
    );
    const data = await result.json();
    return { status: result.status, data };
  } catch (error) {
    console.log(error);
  }
};
