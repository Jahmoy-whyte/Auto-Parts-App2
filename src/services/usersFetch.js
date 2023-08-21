import { BASE_URL } from "./helper/baseUrl";
import checkResponce from "./helper/checkResponce";

export const dbGetUserInfo = async (accessToken) => {
  const responce = await fetch(`${BASE_URL}/users`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });
  return await checkResponce(responce);
};

export const dbUserLogin = async (email, password) => {
  const responce = await fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return await checkResponce(responce);
};

export const dbUserSignUp = async (email, password) => {
  const responce = await fetch(`${BASE_URL}/users/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return await checkResponce(responce);
};

export const dbUserGuestLogin = async () => {
  const responce = await fetch(`${BASE_URL}/users/login/guest`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await checkResponce(responce);
};
