import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import * as SecureStore from "expo-secure-store";
import {
  dbUserLogin,
  dbUserSignUp,
  dbUserGuestLogin,
  dbLogoutUser,
} from "../services/usersFetch";
import ShowToast from "../helper/ShowToast";
import { Text, View } from "react-native";
import { getNewAccessToken } from "../services/refreshTokenFetch";
export const UserAuthContext = createContext(null);
const UserAuthContextWarpper = ({ children }) => {
  const [authData, setAuthData] = useState({
    isLoading: true,
    isAuth: false,
    accessToken: null,
  });

  const login = async (email, password) => {
    // get auth Token
    const { accessToken, refreshToken } = await dbUserLogin(email, password);
    // get store auth Token
    await SecureStore.setItemAsync("AccessToken", accessToken);
    await SecureStore.setItemAsync("RefreshToken", refreshToken);
    // set is Auth to true
    setAuthData((prev) => ({
      ...prev,
      isAuth: true,
      accessToken: accessToken,
    }));
  };

  const signUp = async (email, password) => {
    const msg = await dbUserSignUp(email, password);
    return msg;
  };

  const logout = async () => {
    try {
      await tokenAwareFetchWrapper(dbLogoutUser);
      setAuthData((prev) => ({
        ...prev,
        isAuth: false,
      }));
    } catch (error) {
      console.log("logout error");
    }
  };

  const loginAsGuest = async () => {
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
  };

  const tokenAwareFetchWrapper = async (fetchFunction, ...params) => {
    const accessToken = authData.accessToken;
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
      //  alert("jwt expired");
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

      throw new Error("Login To Continue");
    }
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
          //  await loginAsGuest();
          setAuthData((prev) => ({
            ...prev,

            isLoading: false,
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
      value={{
        ...authData,
        setAuthData,
        login,
        signUp,
        loginAsGuest,
        logout,
        tokenAwareFetchWrapper,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const {
    isLoading,
    isAuth,
    accessToken,
    setAuthData,
    login,
    signUp,
    loginAsGuest,
    logout,
    tokenAwareFetchWrapper,
  } = useContext(UserAuthContext);
  return {
    tokenAwareFetchWrapper,
    logout,
    isLoading,
    isAuth,
    accessToken,
    setAuthData,
    login,
    signUp,
    loginAsGuest,
  };
};

export const saveAccessTokenToStorage = async (accessToken) => {
  await SecureStore.setItemAsync("AccessToken", accessToken);
};

export const getRefreshTokenFromStorage = async () => {
  const refreshToken = await SecureStore.getItemAsync("RefreshToken");
  return refreshToken;
};

export const deleteTokensFromStorage = async () => {
  await SecureStore.deleteItemAsync("AccessToken");
  await SecureStore.deleteItemAsync("RefreshToken");
};

export default UserAuthContextWarpper;
