import { BASE_URL } from "../../config/config";

/**
 * Registers the user to DYN.
 * @param validMatch If the passwords match eachother
 * @param validName If the name is valid
 * @param username Username for DYN
 * @param email Email for DYN
 * @param password Password for DYN
 * @returns void
 */
export const registerUser = async (
  validMatch: boolean,
  validName: boolean,
  username: string,
  email: string,
  password: string
) => {
  if (!validMatch || !validName) return;

  const newUser = {
    username,
    password,
    email,
  };

  try {
    const response = await fetch(`${BASE_URL}authentication/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(newUser),
    });
    const responseMessage = await response.text();
    return {
      error: false,
      message: responseMessage,
      status: response.status,
    };
  } catch (error: any) {
    console.log(error);
    return {
      error: true,
      message: error.message || "Failed to contact server",
      status: 500,
    };
  }
};
