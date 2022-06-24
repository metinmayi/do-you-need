export class Player {
  selected: boolean = false;
  name: string = "";
  role: "tank" | "healing" | "dps" = "tank";
  head?: PlayerItem;
  neck?: PlayerItem;
  shoulders?: PlayerItem;
  back?: PlayerItem;
  chest?: PlayerItem;
  wrist?: PlayerItem;
  gloves?: PlayerItem;
  waist?: PlayerItem;
  legs?: PlayerItem;
  feet?: PlayerItem;
  ring?: PlayerItem;
  trinket?: PlayerItem;
  main_hand?: PlayerItem;
  oneHand?: PlayerItem;
  twoHand?: PlayerItem;
  offHand?: PlayerItem;
  shield?: PlayerItem;
  upgradeCount?: string;
  class:
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
    | "deathKnight" = "warrior";
  id?: string;
}

interface PlayerItem {
  percentageDps: string;
  rawDps: string;
}
