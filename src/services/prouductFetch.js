import { BASE_URL } from "./helper/baseUrl";
import checkResponce from "./helper/checkResponce";

export const dbGetNewArrival = async (accessToken) => {
  const responce = await fetch(`${BASE_URL}/products/get-new-arrival`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return await checkResponce(responce);
};

export const dbSearchForProducts = async (
  accessToken,
  makeId,
  modelId,
  yearId
) => {
  const responce = await fetch(
    `${BASE_URL}/products/${makeId}/${modelId}/${yearId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return await checkResponce(responce);
};

export const dbSearchForProductWithCategory = async (
  accessToken,
  makeId,
  modelId,
  yearId,
  subCategoryId
) => {
  const responce = await fetch(
    `${BASE_URL}/products/${makeId}/${modelId}/${yearId}/${subCategoryId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return await checkResponce(responce);
};

export const dbGetProductById = async (accessToken, productId) => {
  const responce = await fetch(
    `${BASE_URL}/products/get-product-by-id/${productId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return await checkResponce(responce);
};

export const dbProuductPagination = async (accessToken, start) => {
  const responce = await fetch(`${BASE_URL}/products/pagination/${start}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return await checkResponce(responce);
};

export const dbGetProductsByCategory = async (accessToken, subCategoryId) => {
  const responce = await fetch(
    `${BASE_URL}/products/get-product-by-category/${subCategoryId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return await checkResponce(responce);
};
