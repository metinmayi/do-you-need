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
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(newUser),
    });
    console.log(await response.text());
  } catch (error) {
    console.log(error);
  }
};
