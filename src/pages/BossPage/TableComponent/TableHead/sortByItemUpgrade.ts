import { ICharacterUpgrade } from "../../../../models/ICharacterUpgrades";

/**
 * Sorts according to specific item upgrades
 * @param roster The roster
 * @returns The roster sorted according to specific item upgrades
 */
export function sortByItemUpgrade(roster: ICharacterUpgrade[], index: number) {
  const clonedRoster = structuredClone(roster);
  const unchangedClone = structuredClone(clonedRoster);

  clonedRoster.sort((a, b) => {
    const valueA =
      a.upgrades[index] === "-" ? 0 : +a.upgrades[index].split("%")[0];

    const valueB =
      b.upgrades[index] === "-" ? 0 : +b.upgrades[index].split("%")[0];

    return valueA - valueB;
  });

  let isIdentical = true;
  for (let i = 0; i < clonedRoster.length; i++) {
    if (+clonedRoster[i].selected !== +unchangedClone[i].selected) {
      isIdentical = false;
      break;
    }
  }

  if (!isIdentical) {
    return clonedRoster;
  }

  return clonedRoster.reverse();
}
