import { BASE_URL } from "./helper/baseUrl";
import checkResponce from "./helper/checkResponce";

export const dbGetNewArrival = async () => {
  const responce = await fetch(`${BASE_URL}/products`);
  return await checkResponce(responce);
};

export const dbSearchForProducts = async (makeId, modelId, yearId) => {
  const responce = await fetch(
    `${BASE_URL}/products/${makeId}/${modelId}/${yearId}`
  );
  return await checkResponce(responce);
};

export const dbSearchForProductWithCategory = async (
  makeId,
  modelId,
  yearId,
  subCategoryId
) => {
  const responce = await fetch(
    `${BASE_URL}/products/${makeId}/${modelId}/${yearId}/${subCategoryId}`
  );
  return await checkResponce(responce);
};

export const dbGetProductById = async (productId) => {
  const responce = await fetch(`${BASE_URL}/products/${productId}`);
  return await checkResponce(responce);
};
