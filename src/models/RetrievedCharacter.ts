export interface RetrievedCharacter {
  name: string;
  realm: string;
  classId: number;
}

export function isRetrievedCharacter(
  response: any
): response is RetrievedCharacter[] {
  return true;
}
