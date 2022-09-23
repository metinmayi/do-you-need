import { IGuild } from "./IGuild";

export interface IUserGuild extends IGuild {
  playerRank: string;
}

export function isIUserGuild(object: any): object is IUserGuild {
  if (typeof object !== "object") {
    return false;
  }

  return typeof object.playerRank === "string";
}
