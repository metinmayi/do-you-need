import { GET_GUILD_URL } from "../../config/config";
import { DYNResponse } from "../../models/DYNResponse";

/**
 * Retrieves the players guild from the API
 * @param character Character name
 * @param realm Realm name
 * @returns {Promise<IGuild | undefined>} Guild object
 */
export const getPlayersGuild = async (character: string, realm: string) => {
  try {
    const result = await fetch(
      `${GET_GUILD_URL}?character=${character}&realm=${realm}`,
      { credentials: "include" }
    );
    const response: DYNResponse = await result.json();
    return response;
  } catch (error) {
    console.log(error);
  }
};
