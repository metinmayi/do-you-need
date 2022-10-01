import { ICharacter } from "./ICharacter";

export interface IGuild {
  id: string;
  name: string;
  realm: string;
  license: string;
  faction: string;
  characters: ICharacter[];
}

export const isIGuild = (response: any): response is IGuild => {
  const { faction, id, license, name, realm, characters } = response;
  if (typeof response !== "object") {
    return false;
  }
  return (
    typeof id === "string" &&
    typeof faction === "string" &&
    typeof name === "string" &&
    typeof realm === "string" &&
    typeof license === "string" &&
    typeof characters === "object"
  );
};
