import {
  getRefreshTokenFromStorage,
  saveAccessTokenToStorage,
  useAuthContext,
} from "../context/UserAuthContextWarpper";
import { getNewAccessToken } from "../services/refreshTokenFetch";

const useRefreshToken = () => {
  const { accessToken, setAuthData } = useAuthContext();

  const tokenAwareFetchWrapper = async (fetchFunction, ...params) => {
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

  return tokenAwareFetchWrapper;
};
export default useRefreshToken;
