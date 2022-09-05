export interface IGuild {
  id: number;
  name: string;
  realm: string;
  status: boolean;
}

export const isIGuild = (response: any): response is IGuild => {
  const { id, name, realm, status } = response;
  return (
    typeof id === "number" &&
    typeof name === "string" &&
    typeof realm === "string" &&
    typeof status === "boolean"
  );
};
