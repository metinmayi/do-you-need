export class IPlayer {
  constructor(
    public selected: boolean,
    public name: string,
    public role: "tank" | "healing" | "dps",
    public className:
      | "warrior"
      | "mage"
      | "paladin"
      | "hunter"
      | "rogue"
      | "priest"
      | "shaman"
      | "warlock"
      | "monk"
      | "druid"
      | "demonHunter"
      | "death knight",
    public playerUpgrades: IUPgradeItem[]
  ) {}
  upgradeCount?: number;
}

export interface IUPgradeItem {
  itemType: IItemType;
  percentageDps: number;
  rawDps: number;
}

export type IItemType =
  | "head"
  | "neck"
  | "shoulders"
  | "back"
  | "chest"
  | "wrist"
  | "gloves"
  | "waist"
  | "legs"
  | "feet"
  | "ring"
  | "trinket"
  | "main_hand"
  | "oneHand"
  | "twoHand"
  | "offHand"
  | "shield";
