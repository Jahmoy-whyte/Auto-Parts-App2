import { createContext, useContext, useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import {
  dbUserLogin,
  dbUserSignUp,
  dbUserGuestLogin,
} from "../services/usersFetch";
import ShowToast from "../helper/ShowToast";
import { Text, View } from "react-native";
export const UserAuthContext = createContext();
const UserAuthContextWarpper = ({ children }) => {
  const [authData, setAuthData] = useState({
    isLoading: true,
    isAuth: false,
    accessToken: null,
  });

  const login = async (email, password) => {
    // get auth Token
    const Token = await dbUserLogin(email, password);
    // get store auth Token
    return;
    await SecureStore.setItemAsync("AccessToken", authToken);
    await SecureStore.setItemAsync("AccessToken", authToken);
    // set is Auth to true
    setData((prev) => ({ ...prev, isAuth: true, authToken: authToken }));
  };

  const signUp = async (email, password) => {
    const msg = await dbUserSignUp(email, password);
    return msg;
  };

  useEffect(() => {
    const getUserAuthToken = async () => {
      try {
        // check if token already exist if exist user is loging in
        const accessToken = await SecureStore.getItemAsync("AccessToken");
        if (accessToken) {
          console.log("yes");
          console.log(accessToken);
          setAuthData((prev) => ({
            ...prev,
            isAuth: true,
            isLoading: false,
            accessToken: accessToken,
          }));
        } else {
          //  if token does not exist get refresh and access token from guest login
          const tokens = await dbUserGuestLogin();
          //  then store both locally
          await SecureStore.setItemAsync("AccessToken", tokens.accessToken);
          await SecureStore.setItemAsync("RefreshToken", tokens.refreshToken);
          //  after store stop loading and set isAuth true and store auth token
          setAuthData((prev) => ({
            ...prev,
            isLoading: false,
            isAuth: true,
            accessToken: tokens.accessToken,
          }));
        }
      } catch (error) {
        setAuthData((prev) => ({
          ...prev,
          isLoading: false,
          isAuth: false,
          accessToken: "",
        }));
        ShowToast("customErrorToast", "ERROR", error.message);
      }
    };
    getUserAuthToken();
  }, []);

  if (authData.isLoading) {
    return (
      <View>
        <Text>LOADING</Text>
      </View>
    );
  }

  return (
    <UserAuthContext.Provider
      value={{ ...authData, setAuthData, login, signUp }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const auth = useContext(UserAuthContext);
  return { ...auth };
};

export const saveAccessTokenToStorage = async (accessToken) => {
  await SecureStore.setItemAsync("AccessToken", accessToken);
};

export const getRefreshTokenFromStorage = async () => {
  const refreshToken = await SecureStore.getItemAsync("RefreshToken");
  return refreshToken;
};

export default UserAuthContextWarpper;
