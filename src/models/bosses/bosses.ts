export const IdToBoss: Record<number, string> = {
  2480: "eranog",
  2482: "sennarth",
  2486: "the_primal_council",
  2491: "kurog_grimtotem",
  2493: "broodkeeper_diurna",
  2499: "raszageth",
  2500: "terros",
  2502: "dathea",
} as const;

export const BOSSES = [
  "terros",
  "kurog_grimtotem",
  "sennarth",
  "eranog",
  "broodkeeper_diurna",
  "raszageth",
  "the_primal_council",
  "dathea",
] as const;

export type BOSSNAMES = typeof BOSSES[number];

/**
 * Checks if the word is of the type BOSSNAME
 */
export const isBossName = (word: string): word is BOSSNAMES => {
  return BOSSES.includes(word as BOSSNAMES);
};
