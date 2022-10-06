import { BASE_URL } from "../../config/config";

/**
 * Checks towards the server if the user has a valid cookie
 * @returns {boolean} Indicating if the user is authenticated or not
 */
export const checkIsAuthenticated = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}authentication/checkIsAuthenticated`,
      {
        credentials: "include",
      }
    );
    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};
