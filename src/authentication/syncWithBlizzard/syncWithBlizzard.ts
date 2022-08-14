import { getAccessToken } from "./getAccessToken";

export const syncWithBlizzard = async (code: string) => {
  const accessToken = await getAccessToken(code);
};
