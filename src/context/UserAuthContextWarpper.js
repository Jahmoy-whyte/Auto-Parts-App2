import { createContext, useContext, useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import { dbUserLogin, dbUserSignUp } from "../services/usersFetch";
import ShowToast from "../helper/ShowToast";
export const UserAuthContext = createContext();
const UserAuthContextWarpper = ({ children }) => {
  const [authData, setAuthData] = useState({
    isLoading: true,
    isAuth: false,
    authToken: null,
  });

  //      const wd = await dbGetUserCart();

  const login = async (email, password) => {
    // get auth Token
    const authToken = await dbUserLogin(email, password);
    // get store auth Token
    await SecureStore.setItemAsync("AuthToken", authToken);
    // set is Auth to true
    setData((prev) => ({ ...prev, isAuth: true, authToken: authToken }));
  };

  const signUp = async (email, password) => {
    const msg = await dbUserSignUp(email, password);
    return msg;
  };

  useEffect(() => {
    const getUserAuthToken = async () => {
      const authToken = await SecureStore.getItemAsync("AuthToken");
      if (authToken) {
        setAuthData((prev) => ({
          ...prev,
          isAuth: true,
          isLoading: false,
          authToken: authToken,
        }));
      } else {
        setAuthData((prev) => ({ ...prev, isLoading: false }));
      }
    };
    getUserAuthToken();
  }, []);
  return (
    <UserAuthContext.Provider value={{ login, signUp }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthContextWarpper;
