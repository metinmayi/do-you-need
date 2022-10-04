import { ICharacter } from "../../models/ICharacter";
import { IGuild } from "../../models/IGuild";

export async function getGuildCharacters(guild: IGuild) {
  const request = {
    guildID: guild.id,
  };
  const response = await fetch(
    "http://localhost:8000/doyouneed/getGuildCharacters",
    {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(request),
      headers: { "Content-Type": "application/json" },
    }
  );
  const data: ICharacter[] = await response.json();
  console.log({ data });
  return data;
}
