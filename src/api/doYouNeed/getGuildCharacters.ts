import { ICharacterUpgrade } from "../../models/ICharacterUpgrades";
import { IGuild } from "../../models/IGuild";
import vigilant from "../../mock/vigilant_guardian.json";
import lords from "../../mock/lords_of_dread.json";

/**
 * Gets all the characters upgrades for a guild from a particular boss.
 * @param guild Guild to retrieve character's upgrades from.
 * @param bossName The boss to pull upgrades from
 * @returns {ICharacterUpgrade[]} Array of characterupgrades
 */
export function getGuildCharacters(guild: IGuild, bossName: string) {
  if (bossName === "vigilant_guardian") {
    const characters: ICharacterUpgrade[] = vigilant;
    return characters;
  }
  const chars: ICharacterUpgrade[] = lords;
  return chars;
}
