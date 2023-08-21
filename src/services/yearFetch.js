import { BASE_URL } from "./helper/baseUrl";
import checkResponce from "./helper/checkResponce";

export const dbGetYearsBasedOnModelId = async (accessToken, modelId) => {
  const responce = await fetch(`${BASE_URL}/year/${modelId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return await checkResponce(responce);
};
