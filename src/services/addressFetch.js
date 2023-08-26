import { BASE_URL } from "./helper/baseUrl";
import checkResponce from "./helper/checkResponce";

export const dbGetAddress = async (accessToken) => {
  const responce = await fetch(`${BASE_URL}/address`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return await checkResponce(responce);
};

export const dbAddAddress = async (
  accessToken,
  addesss,
  additionalInfo,
  placeType
) => {
  const responce = await fetch(`${BASE_URL}/cart`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ addesss, additionalInfo, placeType }),
  });
  return await checkResponce(responce);
};

export const dbDeleteAddress = async (accessToken, addressId) => {
  const responce = await fetch(`${BASE_URL}/cart`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ addressId }),
  });
  return await checkResponce(responce);
};
