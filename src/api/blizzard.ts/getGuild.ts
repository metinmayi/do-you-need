import { GET_GUILD_URL } from "../../config/config";
import { isIGuild } from "../../models/IGuild";

/**
 * Retrieves the players guild from the API
 * @param character Character name
 * @param realm Realm name
 * @returns {Promise<IGuild | undefined>} Guild object
 */
export const getGuild = async (character: string, realm: string) => {
  try {
    const response = await fetch(
      `${GET_GUILD_URL}?character=${character}&realm=${realm}`,
      { credentials: "include" }
    );
    const guild = await response.json();

    if (isIGuild(guild)) {
      return guild;
    }
  } catch (error) {
    console.log(error);
  }
};
