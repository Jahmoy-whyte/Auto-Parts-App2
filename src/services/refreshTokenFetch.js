import { BASE_URL } from "./helper/baseUrl";
import checkResponce from "./helper/checkResponce";
//sd
export const getNewAccessToken = async (refreshToken) => {
  const responce = await fetch(`${BASE_URL}/refreshtoken`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ refreshToken }),
  });
  return await checkResponce(responce);
};
