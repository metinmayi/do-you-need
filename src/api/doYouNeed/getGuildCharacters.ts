import { GET_CHARACTER_UPGRADES } from "../../config/config";
import { ICharacterUpgrade } from "../../models/ICharacterUpgrades";

/**
 * Gets all the characters upgrades for a guild from a particular boss.
 * @param guild Guild to retrieve character's upgrades from.
 * @param bossName The boss to pull upgrades from
 * @returns {ICharacterUpgrade[]} Array of characterupgrades
 */
export async function getGuildCharacters(guildId: string, bossName: string) {
  const body = {
    guildId,
    bossName,
  };
  const response = await fetch(GET_CHARACTER_UPGRADES, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(body),
  });

  const data: ICharacterUpgrade[] = await response.json();
  return data;
}
