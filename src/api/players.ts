import { Player } from "../models/Player";

/**
 * Mock getting list of players
 * @params bossId - Used in the future to get correct player stats from specified boss
 */
const getPlayers = async (bossId: number) => {
  const mockFetch: Player[] = await new Promise((res, rej) => {
    setTimeout(() => {
      res([
        {
          selected: true,
          name: "Maestro",
          role: "tank",
          back: "1.5%, 200",
          neck: "1.5%, 200",
          twoHand: "3.6%,200",
          gloves: "0",
          legs: "1%,100",
          shield: "0",
          trinket: "8%, 340",
          feet: "0",
          upgradeCount: "3/6",
          class: "warrior",
          id: "rando2323",
        },
        {
          selected: true,
          name: "Maestro",
          role: "dps",
          back: "1.5%, 200",
          neck: "1.5%, 200",
          twoHand: "3.6%,200",
          gloves: "0",
          legs: "1%,100",
          shield: "0",
          trinket: "8%, 340",
          feet: "0",
          upgradeCount: "3/6",
          class: "demonHunter",
          id: "ranz",
        },
        {
          selected: false,
          name: "Maestro",
          role: "healer",
          back: "1.5%, 200",
          neck: "1.5%, 200",
          twoHand: "3.6%,200",
          gloves: "0",
          legs: "1%,100",
          shield: "0",
          trinket: "8%, 340",
          feet: "0",
          upgradeCount: "3/6",
          class: "druid",
          id: "randasad",
        },
        {
          selected: false,
          name: "Dennis",
          role: "dps",
          back: "1.5%, 200",
          neck: "1.5%, 200",
          twoHand: "3.6%,200",
          gloves: "0",
          legs: "1%,100",
          shield: "0",
          trinket: "8%, 340",
          feet: "0",
          upgradeCount: "3/6",
          class: "hunter",
          id: "adasdads",
        },
      ]);
    }, 3000);
  });
  return mockFetch;
};

export { getPlayers };
