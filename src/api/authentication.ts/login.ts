import { BASE_URL } from "../../config/config";
type loginResponseType = {
  loggedIn: boolean;
  guilds: PlayerGuilds[];
  message: string;
};

interface PlayerGuilds {
  guildID: string;
  rank: string;
}
/**
 * Attempts to login the user. Also checks if user has blizzSync or not.
 */
export const loginUser = async (username: string, password: string) => {
  const loginResponse: loginResponseType = {
    loggedIn: false,
    guilds: [],
    message: "",
  };

  try {
    const body = {
      username: username.toLowerCase(),
      password,
    };

    const response = await fetch(`${BASE_URL}authentication/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(body),
    });

    const user = await response.json();
    if (response.status === 200) {
      loginResponse.loggedIn = true;
      loginResponse.guilds = user.guilds;
    } else {
      loginResponse.message = "Invalid username/password";
    }

    return loginResponse;
  } catch (error: any) {
    console.log(error);
    loginResponse.message =
      "There was an issue connecting to the servers. Try again later";
    return loginResponse;
  }
};
