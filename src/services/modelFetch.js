import { BASE_URL } from "./helper/baseUrl";
import checkResponce from "./helper/checkResponce";

export const dbGetModelBasedOnMakeId = async (accessToken, makeId) => {
  const responce = await fetch(`${BASE_URL}/model/${makeId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return await checkResponce(responce);
};
