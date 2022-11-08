export interface IGuild {
  blizzard_guild_id: string;
  name: string;
  realm: string;
  license: string;
  faction: string;
}

export const isIGuild = (response: any): response is IGuild => {
  const { faction, blizzard_guild_id, license, name, realm } = response;
  if (typeof response !== "object") {
    return false;
  }
  return (
    typeof blizzard_guild_id === "string" &&
    typeof faction === "string" &&
    typeof name === "string" &&
    typeof realm === "string" &&
    typeof license === "string"
  );
};
