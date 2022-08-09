export const BASE_URL = "http://localhost:8000/" as const;

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
    const suitableResponseMessage = getResponseMessage(responseMessage);
    return {
      error: false,
      message: suitableResponseMessage,
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

const getResponseMessage = (responseMessage: string) => {
  if (responseMessage.includes("@")) return "That email is already in use.";
  return "That username is already in use.";
};
