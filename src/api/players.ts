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
          selected: false,
          name: "Maestro",
          role: "tank",
          back: { percentageDps: "1%", rawDps: "100" },
          neck: { percentageDps: "5%", rawDps: "900" },
          ring: { percentageDps: "3.6%", rawDps: "400" },
          chest: { percentageDps: "10%", rawDps: "2150" },
          feet: { percentageDps: "", rawDps: "" },
          gloves: { percentageDps: "", rawDps: "" },
          legs: { percentageDps: "", rawDps: "" },
          shoulders: { percentageDps: "3%", rawDps: "372" },
          waist: { percentageDps: "0.4%", rawDps: "76" },
          upgradeCount: "6/9",
          class: "warrior",
          id: "maestro001",
        },
      ]);
    }, 3000);
  });
  return mockFetch;
};

/**
 * Takes the url to the report and forwards it to the server.
 * The server breaks it down into a player object.
 */
const addPlayerData = async (url: string | undefined) => {
  if (!url) return;

  const body = {
    url: url,
  };
  try {
    const response = await fetch("http://localhost:8000/player/addBossData", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export { getPlayers, addPlayerData };
