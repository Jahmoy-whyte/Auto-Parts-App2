import { BASE_URL } from "./helper/baseUrl";
import checkResponce from "./helper/checkResponce";

export const dbGetUserCart = async (accessToken) => {
  const responce = await fetch(`${BASE_URL}/cart`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return await checkResponce(responce);
};

export const dbAddToCart = async (accessToken, productId, quantity) => {
  const responce = await fetch(`${BASE_URL}/cart`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId, quantity }),
  });
  return await checkResponce(responce);
};
