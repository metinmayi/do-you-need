export interface RetrievedCharacter {
  name: string;
  realm: string;
  faction: string;
  class: string;
  color: string;
}

export function isRetrievedCharacter(
  response: any
): response is RetrievedCharacter[] {
  return (
    typeof response[0].name === "string" &&
    typeof response[0].realm === "string" &&
    typeof response[0].faction === "string" &&
    typeof response[0].class === "string" &&
    typeof response[0].color === "string"
  );
}
