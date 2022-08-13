import { BASE_URL } from "../../config/config";
type loginResponseType = {
  loggedIn: boolean;
  blizzSync: 0 | 1;
  message: string;
};

/**
 * Attempts to login the user. Also checks if user has blizzSync or not.
 */
export const loginUser = async (username: string, password: string) => {
  const loginResponse: loginResponseType = {
    loggedIn: false,
    blizzSync: 0,
    message: "",
  };

  try {
    const response = await fetch(`${BASE_URL}authentication/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ username, password }),
    });

    const user = await response.json();
    console.log(user);
    if (response.status === 200) {
      loginResponse.loggedIn = true;
      loginResponse.blizzSync = user.blizz_sync;
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
