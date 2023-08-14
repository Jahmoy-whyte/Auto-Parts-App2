import { BASE_URL } from "./helper/baseUrl";
import checkResponce from "./helper/checkResponce";

export const dbGetSubCategory = async () => {
  const responce = await fetch(`${BASE_URL}/categories`);
  return await checkResponce(responce);
};
