export interface Player {
  tableData: {
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
  };
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
    | "demon hunter"
    | "death knight";
  classColor:
    | "#C41E3A"
    | "#A330C9"
    | "#FF7C0A"
    | "#33937F"
    | "#AAD372"
    | "#3FC7EB"
    | "#00FF98"
    | "#F48CBA"
    | "#FFFFFF"
    | "#FFF468"
    | "#0070DD"
    | "#8788EE"
    | "#C69B6D";
  selected: boolean;
}
