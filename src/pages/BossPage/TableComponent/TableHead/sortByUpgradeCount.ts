import { ICharacterUpgrade } from "../../../../models/ICharacterUpgrades";

/**
 * Sorts according to upgrade count
 * @param roster The roster
 * @returns The roster sorted according to upgrade count
 */
export function sortByUpgradeCount(roster: ICharacterUpgrade[]) {
  const clonedRoster = structuredClone(roster);
  const unchangedClone = structuredClone(clonedRoster);

  const upgradeCountIndex = clonedRoster[0].upgrades.length - 1;
  clonedRoster.sort(
    (a, b) => +a.upgrades[upgradeCountIndex] - +b.upgrades[upgradeCountIndex]
  );

  let isIdentical = true;
  for (let i = 0; i < clonedRoster.length; i++) {
    if (clonedRoster[i].name !== unchangedClone[i].name) {
      isIdentical = false;
      break;
    }
  }

  if (!isIdentical) {
    return clonedRoster;
  }

  return clonedRoster.reverse();
}
