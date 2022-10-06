export const idToBoss = {
  2458: "vigilant_guardian",
  2465: "skolex_the_insatiable_ravener",
  2470: "artificer_xymox",
  2459: "dausegne_the_fallen_oracle",
  2460: "prototype_pantheon",
  2461: "lihuvim_principal_architect",
  2463: "halondrus_the_reclaimer",
  2469: "anduin_wrynn",
  2457: "lords_of_dread",
  2467: "rygelon",
  2464: "the_jailer",
} as const;

export const BOSSES = [
  "vigilant_guardian",
  "skolex_the_insatiable_ravener",
  "artificer_xymox",
  "dausegne_the_fallen_oracle",
  "prototype_pantheon",
  "lihuvim_principal_architect",
  "halondrus_the_reclaimer",
  "anduin_wrynn",
  "lords_of_dread",
  "rygelon",
  "the_jailer",
] as const;

export type BOSSNAMES = typeof BOSSES[number];

/**
 * Checks if the word is of the type BOSSNAME
 */
export const isBossName = (word: string): word is BOSSNAMES => {
  return BOSSES.includes(word as BOSSNAMES);
};
