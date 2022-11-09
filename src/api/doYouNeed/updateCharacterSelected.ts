import { TOGGLE_CHARACTER_SELECTED } from "../../config/config";

export async function updateCharacterSelected(
  characterId: string,
  bossName: string
) {
  await fetch(TOGGLE_CHARACTER_SELECTED, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ characterId, bossName }),
  });
}
