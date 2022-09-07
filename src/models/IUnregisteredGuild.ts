export interface IUnregisteredGuild {
  id: number;
  name: string;
  realm: string;
}

export const isIUnregisteredGuild = (
  response: any
): response is IUnregisteredGuild => {
  if (typeof response !== "object") {
    return false;
  }
  return (
    typeof response.id === "number" &&
    typeof response.name === "string" &&
    typeof response.realm === "string"
  );
};
