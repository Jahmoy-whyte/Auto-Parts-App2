import { useState } from "react";
import {
  getRefreshTokenFromStorage,
  saveAccessTokenToStorage,
  useAuthContext,
} from "../context/UserAuthContextWarpper";
import { getNewAccessToken } from "../services/refreshTokenFetch";
import { useNavigation } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";

const useRefreshToken123 = () => {
  const [w, w2] = useState("dwdwdwdwd");
  return { w, w2 };
};
export default useRefreshToken123;
