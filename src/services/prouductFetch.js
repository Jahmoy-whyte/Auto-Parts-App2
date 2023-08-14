import { BASE_URL } from "./helper/baseUrl";
import checkResponce from "./helper/checkResponce";
export const dbGetProducts = async () => {
  const responce = await fetch(`${BASE_URL}/products`);
  return await checkResponce(responce);
};
