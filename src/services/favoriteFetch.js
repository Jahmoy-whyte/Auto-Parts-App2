import { BASE_URL } from "./helper/baseUrl";
import checkResponce from "./helper/checkResponce";

export const dbGetFavorites = async (accessToken) => {
  const responce = await fetch(`${BASE_URL}/favorites`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      //   "content-type": "application/json",
    },
  });
  return await checkResponce(responce);
};

export const dbAddFavorites = async (accessToken, productId) => {
  const responce = await fetch(`${BASE_URL}/favorites`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId }),
  });
  return await checkResponce(responce);
};

export const dbDeleteFavorites = async (accessToken, productId) => {
  const responce = await fetch(`${BASE_URL}/favorites`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId }),
  });
  return await checkResponce(responce);
};
