import { ICharacterUpgrade } from "../../models/ICharacterUpgrades";
import { IGuild } from "../../models/IGuild";
import vigilant from "../../mock/vigilant_guardian.json";
import lords from "../../mock/lords_of_dread.json";

/**
 *
 * @param guild
 * @param bossName
 * @returns
 */
export function getGuildCharacters(guild: IGuild, bossName: string) {
  if (bossName === "vigilant_guardian") {
    const characters: ICharacterUpgrade[] = vigilant;
    return characters;
  }
  const chars: ICharacterUpgrade[] = lords;
  return chars;
}
