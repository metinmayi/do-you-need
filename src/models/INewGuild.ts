import { IGuild } from "./IGuild";

export interface INewGuild extends IGuild {
  isNew: true;
}

export const IsNewGuild = (response: any): response is INewGuild => {
  if (typeof response !== "object") {
    return false;
  }
  return response.isNew === true;
};
