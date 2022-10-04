const idToBoss = {
  2458: "Vigilant Guardian",
  2465: "Skolex The Insatiable Ravener",
  2470: "Artificer Xymox",
  2459: "Dausegne The Fallen Oracle",
  2460: "Prototype Pantheon",
  2461: "Lihuvim Principal Architect",
  2463: "Halondrus The Reclaimer",
  2469: "Anduin Wrynn",
  2457: "Lords Of Dread",
  2467: "Rygelon",
  2464: "The Jailer",
} as const;

const VigilantGuardian = [
  "back",
  "neck",
  "ring",
  "chest",
  "feet",
  "gloves",
  "legs",
  "shoulders",
  "waist",
] as const;

export const BOSSES = [
  "Vigilant Guardian",
  "Skolex The Insatiable Ravener",
  "Artificer Xymox",
  "Dausegne The Fallen Oracle",
  "Prototype Pantheon",
  "Lihuvim Principal Architect",
  "Halondrus The Reclaimer",
  "Anduin Wrynn",
  "Lords Of Dread",
  "Rygelon",
  "The Jailer",
] as const;

export type BOSSNAMES = typeof BOSSES[number];

export { VigilantGuardian, idToBoss };
