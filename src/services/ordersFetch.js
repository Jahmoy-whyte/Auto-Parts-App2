import { BASE_URL } from "./helper/baseUrl";
import checkResponce from "./helper/checkResponce";

export const dbInsertOrders = async (
  accessToken,
  address,
  productsArray,
  total
) => {
  const responce = await fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ address, productsArray, total }),
  });
  return await checkResponce(responce);
};