import { GET_RANK_URL } from "../../config/config";
import { DYNResponse } from "../../models/DYNResponse";

/**
 * Gets the rank for the player within the given guild
 * @param guildName Name of the guild
 * @param guildRealm Name of the realm
 * @param characterName Name of the character
 * @returns {string} Rank of the player. Defaults to 3
 */
export async function getPlayerRank(
  guildName: string,
  guildRealm: string,
  characterName: string
) {
  const request = {
    guildName,
    guildRealm,
    characterName,
  };
  try {
    const response = await fetch(GET_RANK_URL, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(request),
      headers: { "Content-Type": "application/json" },
    });
    const result: DYNResponse = await response.json();
    return typeof result.data === "number" ? result.data : "3";
  } catch (error) {
    console.log(error);
    return "3";
  }
}
