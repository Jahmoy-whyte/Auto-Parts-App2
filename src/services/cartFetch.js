import { BASE_URL } from "./helper/baseUrl";
import checkResponce from "./helper/checkResponce";

export const dbGetUserCart = async () => {
  const responce = await fetch(`${BASE_URL}/cart`);
  return await checkResponce(responce);
};
