import { IPlayer } from "../models/Player";

/**
 * Mock getting list of players
 * @params bossId - Used in the future to get correct player stats from specified boss
 */
const getPlayers = async () => {
  const mockFetch: IPlayer[] = await new Promise((res, rej) => {
    setTimeout(() => {
      res([
        {
          selected: false,
          name: "Maestro",
          role: "tank",
          playerUpgrades: [
            { itemType: "back", percentageDps: 5, rawDps: 200 },
            { itemType: "neck", percentageDps: 2, rawDps: 100 },
            { itemType: "ring", percentageDps: 10, rawDps: 1001 },
            { itemType: "chest", percentageDps: 0.2, rawDps: 50 },
            { itemType: "feet", percentageDps: 0, rawDps: 0 },
            { itemType: "gloves", percentageDps: 0, rawDps: 0 },
            { itemType: "legs", percentageDps: 2, rawDps: 100 },
            { itemType: "shoulders", percentageDps: 9.4, rawDps: 4520 },
            { itemType: "waist", percentageDps: 2, rawDps: 100 },
          ],
          upgradeCount: 7,
          className: "warrior",
        },
      ]);
    }, 3000);
  });
  return mockFetch;
};

export { getPlayers };
