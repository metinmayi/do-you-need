import { BASE_URL } from "../../config/config";

export const isAuthenticated = async () => {
  try {
    const response = await fetch(`${BASE_URL}authentication/isAuthenticated`, {
      credentials: "include",
    });
    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};
