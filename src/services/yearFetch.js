import { BASE_URL } from "./helper/baseUrl";
import checkResponce from "./helper/checkResponce";

export const dbGetYearsBasedOnModelId = async (modelId) => {
  const responce = await fetch(`${BASE_URL}/year/${modelId}`);
  return await checkResponce(responce);
};
