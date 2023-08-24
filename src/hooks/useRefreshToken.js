import {
  getRefreshTokenFromStorage,
  saveAccessTokenToStorage,
  useAuthContext,
} from "../context/UserAuthContextWarpper";
import { getNewAccessToken } from "../services/refreshTokenFetch";
import { useNavigation } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";

const useRefreshToken = () => {
  const { accessToken, setAuthData } = useAuthContext();
  const nav = useNavigation();
  const tokenAwareFetchWrapper = async (fetchFunction, ...params) => {
    try {
      const responce = await fetchFunction(accessToken, ...params);
      return responce;
    } catch (error) {
      if (error.message !== "jwt expired") throw error;
      return await getAccessToken(fetchFunction, ...params);
    }
  };

  const getAccessToken = async (fetchFunction, ...params) => {
    try {
      // alert("jwt expired");
      const refreshToken = await getRefreshTokenFromStorage();
      const newAccessToken = await getNewAccessToken(refreshToken);
      setAuthData((prev) => ({
        ...prev,
        accessToken: newAccessToken,
      }));
      const responce = await fetchFunction(newAccessToken, ...params);
      return responce;
    } catch (error) {
      if (
        error.message !== "forbidden(R101)" &&
        error.message !== "forbidden(R102)"
      )
        throw error;
      setAuthData((prev) => ({
        ...prev,
        isAuth: false,
      }));

      throw new Error("Sign Up To Continue");
    }
  };

  return tokenAwareFetchWrapper;
};
export default useRefreshToken;
