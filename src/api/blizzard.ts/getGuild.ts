import { GET_GUILD_URL } from "../../config/config";
import { isIGuild } from "../../models/IGuild";

/**
 * Retrieves the players guild from the API
 * @param character Character name
 * @param realm Realm name
 * @returns {Promise<IGuild>} Guild object
 */
export const getGuild = async (character: string, realm: string) => {
  try {
    const response = await fetch(
      `${GET_GUILD_URL}?character=${character}&realm=${realm}`,
      { credentials: "include" }
    );
    const data = await response.json();
    if (isIGuild(data)) {
      return data;
    }
    return [];
  } catch (error) {
    console.log(error);
    return [];
  }
};
