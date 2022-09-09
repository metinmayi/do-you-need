export interface INewGuild {
  id: number;
  name: string;
  realm: string;
}

export const IsNewGuild = (response: any): response is INewGuild => {
  if (typeof response !== "object") {
    return false;
  }
  return (
    typeof response.id === "number" &&
    typeof response.name === "string" &&
    typeof response.realm === "string"
  );
};
