import { BASE_URL } from "../../config/config";
import { DYNResponse } from "../../models/DYNResponse";
import { INewGuild } from "../../models/INewGuild";

/**
 * Attemps to register the guild to DoYouNeeds database.
 * The server will check to make sure that the user is the guild's GM.
 * @param characterName Character name
 * @param realm Realm of guild
 * @param guildName Name of guild
 * @returns {Promise<DYNResponse>} DYNResponse
 */
export async function registerGuild(
  characterName: string,
  realm: string,
  newGuild: INewGuild
) {
  const user = {
    character: characterName,
    realm,
    guild: newGuild,
  };
  try {
    const response: DYNResponse = await fetch(
      `${BASE_URL}blizzard/registerGuild`,
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
