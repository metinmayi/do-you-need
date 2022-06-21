import { Player } from "../models/Player";

/**
 * Mock getting list of players
 * @params bossId - Used in the future to get correct player stats from specified boss
 */
const getPlayers = async () => {
  const mockFetch: Player[] = await new Promise((res, rej) => {
    setTimeout(() => {
      res([
        {
          selected: true,
          name: "Maestro",
          role: "tank",
          back: "1.5% (200)",
          neck: "5% (900)",
          ring: "3.6% (400)",
          chest: "10% (2150)",
          feet: "",
          gloves: "",
          legs: "",
          shoulders: "3% (372)",
          waist: "0.4% (76)",
          upgradeCount: "5/9",
          class: "warrior",
          id: "maestro001",
        },
        {
          selected: true,
          name: "Niklas",
          role: "healer",
          back: "0.4% (76)",
          neck: "3% (372)",
          ring: "",
          chest: "8% (1950)",
          feet: "",
          gloves: "",
          legs: "",
          shoulders: "",
          waist: "",
          upgradeCount: "3/9",
          class: "paladin",
          id: "niklas001",
        },
        {
          selected: true,
          name: "Jakob",
          role: "dps",
          back: "",
          neck: "1% (132)",
          ring: "",
          chest: "",
          feet: "5.3% (637)",
          gloves: "",
          legs: "",
          shoulders: "",
          waist: "",
          upgradeCount: "2/9",
          class: "rogue",
          id: "jakob001",
        },
        {
          selected: false,
          name: "Dennis",
          role: "dps",
          back: "3.3% (490)",
          neck: "",
          ring: "1.4% (149)",
          chest: "10% (2195)",
          feet: "",
          gloves: "13% (2900)",
          legs: "",
          shoulders: "",
          waist: "20% (3853)",
          upgradeCount: "5/9",
          class: "rogue",
          id: "jakob001",
        },
      ]);
    }, 3000);
  });
  return mockFetch;
};

export { getPlayers };
