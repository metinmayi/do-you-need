import { ICharacterUpgrade } from "../../../../models/ICharacterUpgrades";

/**
 * Sorts according to selected value
 * @param roster The roster
 * @returns The roster sorted according to selected
 */
export function sortBySelected(roster: ICharacterUpgrade[]) {
  const clonedRoster = structuredClone(roster);
  const unchangedClone = structuredClone(clonedRoster);

  clonedRoster.sort((a, b) => +b.selected - +a.selected);

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
