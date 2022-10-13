import { LOGIN_URL } from "../../config/config";

/**
 * Attemps to log the user in.
 * @param username User's name.
 * @param password User's password.
 * @returns {Promise<string | IUserGuild[]}
 */
export async function loginUser(username: string, password: string) {
  const body = {
    username: username.toLowerCase(),
    password,
  };

  try {
    const response = await fetch(LOGIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return { status: response.status, data };
  } catch (error: any) {
    return { status: 500, data: "" };
  }
}
