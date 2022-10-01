import { ADD_CHARACTER_UPGRADES } from "../../config/config";
import { IUserGuild } from "../../models/IUserGuild";

/**
 * Takes a raidbots URL and breaks it down to upgrades.
 * Adds those upgrades to the roster.
 * @param {string} url URL to the raidbots sim.
 * @param {IUserGuild} guild The user's guild
 * @returns {IPlayer}
 */
export async function addCharacterUpgrades(url: string, guild: IUserGuild) {
  const body = {
    raidbotsURL: url,
    guild,
  };
  try {
    const response = await fetch(ADD_CHARACTER_UPGRADES, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
