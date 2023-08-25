import { useCallback, useEffect, useReducer } from "react";
import { dbGetNewArrival } from "../../services/prouductFetch";
import ShowToast from "../../helper/ShowToast";
import { ACTIONS } from "./helper/reducerActions";
import { useUserInfoContext } from "../../context/UserInfoContextWarpper";
import { dbGetUserInfo } from "../../services/usersFetch";
import { useAuthContext } from "../../context/UserAuthContextWarpper";
import { useNavigation } from "@react-navigation/native";
const useHome = () => {
  // console.log(authData);ww
  const initialState = {
    isLoading: true,
    userInfo: [],
    cart: [],
    newArrival: [],
    onerror: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "new_arrival":
        const data = action.payload;
        return { ...state, newArrival: data, isLoading: false };

      case "user_info":
        return { ...state };

      case "on_error":
        return { ...state, isLoading: true };
      default:
        return state;
    }
  };

  // const tokenAwareFetchWrapper = useRefreshToken();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { setUserInfo, userInfo } = useUserInfoContext();
  const { tokenAwareFetchWrapper, logout } = useAuthContext();
  const nav = useNavigation();
  // const userInfo = {};
  //efef
  useEffect(() => {
    const onStart = async () => {
      try {
        const responce = await tokenAwareFetchWrapper(dbGetNewArrival);
        const userInfo = await tokenAwareFetchWrapper(dbGetUserInfo);
        console.log(userInfo);
        setUserInfo(userInfo);
        console.log("this is my info ================================");
        dispatch({ type: ACTIONS.NEW_ARRIVAL, payload: responce });
      } catch (error) {
        dispatch({ type: ACTIONS.ON_ERROR });
        ShowToast("customErrorToast", "Error", error.message);
        console.log(error);
      }
    };
    onStart();
  }, []);

  const navigateToProduct = useCallback((productId) => {
    nav.navigate("product", {
      navProductId: productId,
      navActionType: "ADD",
      navQuantity: 1,
      navCartId: null,
    });
  }, []);

  const getProducts = async () => {
    try {
      const responce = await tokenAwareFetchWrapper(dbGetNewArrival);
      const userInfo = await tokenAwareFetchWrapper(dbGetUserInfo);
      console.log(userInfo);
      setUserInfo((prev) => ({ ...prev, userInfo: userInfo }));
      dispatch({ type: ACTIONS.NEW_ARRIVAL, payload: responce });
    } catch (error) {
      dispatch({ type: ACTIONS.ON_ERROR });
      ShowToast("customErrorToast", "Error", error.message);
      console.log(error);
    }
  };

  return [state, dispatch, userInfo, getProducts, logout, navigateToProduct];
};

export default useHome;
