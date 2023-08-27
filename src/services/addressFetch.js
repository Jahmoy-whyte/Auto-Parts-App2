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
  address,
  additionalInfo,
  placeType
) => {
  const responce = await fetch(`${BASE_URL}/address`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ address, additionalInfo, placeType }),
  });
  return await checkResponce(responce);
};

export const dbDeleteAddress = async (accessToken, addressId) => {
  const responce = await fetch(`${BASE_URL}/address`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ addressId }),
  });
  return await checkResponce(responce);
};

export const dbSearchForLocation = async (accessToken, name) => {
  const responce = await fetch(
    `${BASE_URL}/address/search-for-location/${name}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return await checkResponce(responce);
};
