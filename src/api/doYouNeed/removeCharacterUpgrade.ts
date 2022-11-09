import { DELETE_CHARACTER_UPGRADE } from "../../config/config";

export async function removeCharacterUpgrade(id: string) {
  const response = await fetch(DELETE_CHARACTER_UPGRADE, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
}
