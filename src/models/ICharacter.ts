import { ICharacterUpgrade } from "./ICharacterUpgrades";

export interface ICharacter {
  playerName: string;
  selected: boolean;
  role: string;
  className: string;
  characterUpgrades: ICharacterUpgrade;
  upgradeCount?: number;
}
