import { BASE_URL } from "./helper/baseUrl";
import checkResponce from "./helper/checkResponce";

export const dbGetModelBasedOnMakeId = async (makeId) => {
  const responce = await fetch(`${BASE_URL}/model/${makeId}`);
  return await checkResponce(responce);
};
