import { BASE_URL } from "../../config/config";
type loginResponseType = {
  success: boolean;
  message: string;
};

export const loginUser = async (username: string, password: string) => {
  const loginResponse: loginResponseType = {
    success: false,
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

    if (response.status === 200) {
      loginResponse.success = true;
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
