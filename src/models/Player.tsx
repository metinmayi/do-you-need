export interface Player {
  selected: boolean;
  name: string;
  role: "tank" | "healer" | "dps";
  head?: string;
  neck?: string;
  shoulders?: string;
  back?: string;
  chest?: string;
  wrist?: string;
  gloves?: string;
  waist?: string;
  legs?: string;
  feet?: string;
  ring?: string;
  trinket?: string;
  oneHand?: string;
  twoHand?: string;
  offHand?: string;
  shield?: string;
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
    | "deathKnight";
  id: string;
}
