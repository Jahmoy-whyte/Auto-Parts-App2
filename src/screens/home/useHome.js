import { useCallback, useEffect, useReducer } from "react";
import {
  dbGetNewArrival,
  dbGetProductsByCategory,
} from "../../services/prouductFetch";
import ShowToast from "../../helper/ShowToast";
import { ACTIONS } from "./helper/reducerActions";
import { useUserInfoContext } from "../../context/UserInfoContextWarpper";
import { dbGetUserInfo } from "../../services/usersFetch";
import { useAuthContext } from "../../context/UserAuthContextWarpper";
import { useNavigation } from "@react-navigation/native";
const useHome = () => {
  const initialState = {
    isLoading: true,
    userInfo: [],
    cart: [],
    newArrival: [],
    products: [],
    onerror: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "productCards":
        const data = action.payload;
        return {
          ...state,
          newArrival: data.newArrival,
          products: data.products,
          isLoading: false,
        };

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
  const { tokenAwareFetchWrapper } = useAuthContext();
  const nav = useNavigation();
  // const userInfo = {};
  //efef
  useEffect(() => {
    const onStart = async () => {
      try {
        const data = await Promise.all([
          await tokenAwareFetchWrapper(dbGetUserInfo),
          await tokenAwareFetchWrapper(dbGetNewArrival),
          await tokenAwareFetchWrapper(dbGetProductsByCategory, 8),
        ]);

        setUserInfo(data[0]);

        dispatch({
          type: ACTIONS.productCards,
          payload: { newArrival: data[1], products: data[2] },
        });
      } catch (error) {
        dispatch({ type: ACTIONS.ON_ERROR });
        ShowToast("customErrorToast", "Error", error.message);
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

  const navToShowAll = useCallback(() => {
    nav.navigate("showall");
  }, []);

  const navToGetProductsByCategory = useCallback((category, id) => {
    nav.navigate("getProductsByCategory", {
      category: category,
      id: id,
    });
  }, []);

  const place =
    userInfo?.placeType && userInfo?.placeType != ""
      ? userInfo?.placeType
      : "Location";
  const address =
    userInfo?.address && userInfo?.address != ""
      ? userInfo?.address
      : "Please add a your location for delivery";

  return [
    state,
    userInfo,

    navigateToProduct,
    place,
    address,
    navToShowAll,
    navToGetProductsByCategory,
  ];
};

export default useHome;
