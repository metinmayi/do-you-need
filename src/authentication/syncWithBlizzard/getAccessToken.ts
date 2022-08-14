export const getAccessToken = async (code: string) => {
  const URL = `https://eu.battle.net/oauth/token?region=eu&grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/synchronize&client_id=182681dbb88f41a28f5abe8e2782ab16`;

  const fetchRes = await fetch(URL, { method: "POST" });
  console.log(fetchRes);
};
