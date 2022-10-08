import { ICharacterUpgrade } from "../../models/ICharacterUpgrades";
import { IGuild } from "../../models/IGuild";

export async function updateCharacterSelected(
  character: ICharacterUpgrade,
  guild: IGuild,
  bossName: string
) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1);
  });

  // Send data to the server to update this character's selected status in the DB.
}
