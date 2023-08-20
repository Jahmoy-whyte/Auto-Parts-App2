import {
  getRefreshTokenFromStorage,
  saveAccessTokenToStorage,
} from "../context/UserAuthContextWarpper";
import { getNewAccessToken } from "../services/refreshTokenFetch";

const tokenAwareFetchWrapper = async (
  fetchFunction,
  accessToken,
  setAuthData,
  params
) => {
  try {
    const responce = await fetchFunction(accessToken, ...params);
    return responce;
  } catch (error) {
    if (error.message !== "jwt expired") throw error;
    alert("jwt expired");
    const refreshToken = await getRefreshTokenFromStorage();
    const newAccessToken = await getNewAccessToken(refreshToken);
    //saveAccessTokenToStorage(newAccessToken);
    setAuthData((prev) => ({
      ...prev,
      accessToken: newAccessToken,
    }));
    const responce = await fetchFunction(newAccessToken, ...params);
    return responce;
  }
};

export default tokenAwareFetchWrapper;
