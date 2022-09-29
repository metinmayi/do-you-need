import { ADD_GUILD_TO_USER } from "../../config/config";
import { IGuild } from "../../models/IGuild";

/**
 * Adds a guild to the user's array of guilds in the DB.
 * @param guild The guild to be added to the user.
 * @return {string | undefined} Status code
 */
export async function addGuildToUser(guild: IGuild) {
  try {
    const response = await fetch(ADD_GUILD_TO_USER, {
      method: "POST",
      body: JSON.stringify(guild),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (response.status !== 200) {
      return "An unexpected error has occured. Try again later or contact support";
    }
  } catch (error: any) {
    return "An unexpected error has occured. Try again later or contact support";
  }
}
