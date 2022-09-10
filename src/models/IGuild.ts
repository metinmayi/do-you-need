export interface IGuild {
  id: number;
  name: string;
  realm: string;
  status: boolean;
}

export const isIGuild = (response: any): response is IGuild => {
  const { faction, id, license, name, realm } = response;
  if (typeof response !== "object") {
    return false;
  }
  return (
    typeof id === "number" &&
    typeof faction === "string" &&
    typeof name === "string" &&
    typeof realm === "string" &&
    typeof license === "string"
  );
};
