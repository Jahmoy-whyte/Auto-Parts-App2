import { BASE_URL } from "./helper/baseUrl";
import checkResponce from "./helper/checkResponce";

export const dbGetMake = async () => {
  const responce = await fetch(`${BASE_URL}/make`);
  return await checkResponce(responce);
};
