import { BASE_URL } from "../../config/config";

export const syncWithBlizzard = async (code: string) => {
  const requestOptions: RequestInit = {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({ code: code }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(
    `${BASE_URL}blizzard/authenticate`,
    requestOptions
  );
};
