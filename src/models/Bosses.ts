const idToBoss = {
  2458: "Vigilant Guardian",
  2465: "Skolex, the Insatiable Ravener",
  2470: "Artificer Xy'mox",
  2459: "Dausegne, the Fallen Oracle",
  2460: "Prototype Pantheon",
  2461: "Lihuvim, Principal Architect",
  2463: "Halondrus the Reclaimer",
  2469: "Anduin Wrynn",
  2457: "Lords of Dread",
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

export const BOSSNAMES = [
  "Vigilant Guardian",
  "Skolex, the Insatiable Ravener",
  "Artificer Xy'mox",
  "Dausegne, the Fallen Oracle",
  "Prototype Pantheon",
  "Lihuvim, Principal Architect",
  "Halondrus the Reclaimer",
  "Anduin Wrynn",
  "Lords of Dread",
  "Rygelon",
  "The Jailer",
] as const;

export { VigilantGuardian, idToBoss };
