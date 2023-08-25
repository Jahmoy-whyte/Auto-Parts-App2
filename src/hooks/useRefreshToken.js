import {
  getRefreshTokenFromStorage,
  saveAccessTokenToStorage,
  useAuthContext,
} from "../context/UserAuthContextWarpper";
import { getNewAccessToken } from "../services/refreshTokenFetch";
import { useNavigation } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";

const useRefreshToken123 = () => {
  const { accessToken, setAuthData } = useAuthContext();
  const nav = useNavigation();

  return "tokenAwareFetchWrapper";
};
export default useRefreshToken123;
