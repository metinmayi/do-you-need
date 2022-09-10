import { BASE_URL } from "../../config/config";
import { DYNResponse } from "../../models/DYNResponse";

export async function activateGuild(
  name: string,
  realm: string,
  guild: string
) {
  const user = {
    character: name,
    realm,
    guild,
  };
  try {
    const response: DYNResponse = await fetch(
      `${BASE_URL}blizzard/activateGuild`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(user),
      }
    ).then((res) => res.json());

    return response;
  } catch (error) {
    console.log(error);
    return { error: true, errorMessage: "An unexpected error occured" };
  }
}
