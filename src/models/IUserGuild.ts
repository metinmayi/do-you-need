import { IGuild } from "./IGuild";

export interface IUserGuild extends IGuild {
  playerRank: string;
}

export function isIUserGuildArray(object: any): object is IUserGuild[] {
  if (typeof object !== "object") {
    return false;
  }
  if (object.length === 0) {
    return true;
  }

  return typeof object[0].playerRank === "string";
}
