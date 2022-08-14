import { BASE_URL } from "../../config/config";

export const syncWithBlizzard = async (code: string) => {
  const requestOptions: RequestInit = {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({ code: code }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(
    `${BASE_URL}blizzard/authenticate`,
    requestOptions
  );
  console.log(response);
  //   console.log(code);
  //   const URL = 'https://eu.battle.net/oauth/token';

  // const BasicAuth = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);

  //   const headers = {
  //     Authorization: `Basic ${CLIENT_ID}:${CLIENT_SECRET}`,
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   }

  //   const params = new URLSearchParams();
  //   params.append('region', REGION);
  //   params.append('grant_type', 'authorization_code');
  //   params.append('code', code);
  //   params.append('redirect_uri', REDIRECT_URI);
  //   params.append('client_id', CLIENT_ID);

  //   const requestOptions = {
  //     method: 'POST',
  //     body: params,
  //     headers
  //   }

  //   const fetchRes = await fetch(URL, requestOptions);
  //   console.log(fetchRes);
};
