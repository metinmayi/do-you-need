import { LOGIN_URL } from "../../config/config";
import { DYNResponse } from "../../models/DYNResponse";
import { isIUserGuildArray } from "../../models/IUserGuild";

/**
 * Attemps to log the user in.
 * @param username User's name.
 * @param password User's password.
 * @returns {Promise<string | IUserGuild[]}
 */
export async function loginUser(username: string, password: string) {
  debugger;
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

    const data: DYNResponse = await response.json();

    // if (isIUserGuildArray(data.data)) {
    //   return data.data;
    // }
    return data.data;
    return data.errorMessage;
  } catch (error: any) {
    return "There was an issue connecting to the servers. Try again later";
  }
}
