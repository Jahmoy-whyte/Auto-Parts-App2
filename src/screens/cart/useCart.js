import { useEffect, useReducer, useState } from "react";
import { useUserInfoContext } from "../../context/UserInfoContextWarpper";

import ShowToast from "../../helper/ShowToast";
import { ACTIONS } from "./helper/reducerActions";
import useRefreshToken from "../../hooks/useRefreshToken";
import { dbGetUserCart } from "../../services/cartFetch";
import { useNavigation } from "@react-navigation/native";

const useCart = () => {
  // const [] = useState();
  const nav = useNavigation();
  const initialState = {
    isLoading: true,
    cartItems: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "is_loading":
        return { ...state, isLoading: action.payload };
      case "cart_items":
        return { ...state, cartItems: action.payload, isLoading: false };
      default:
        return { ...state };
    }
  };
  const tokenAwareFetchWrapper = useRefreshToken();
  const { userInfo, setUserInfo } = useUserInfoContext;

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getCartItems = async () => {
      try {
        const items = await tokenAwareFetchWrapper(dbGetUserCart);

        console.log(items);
        dispatch({ type: ACTIONS.CART_ITEMS, payload: items });
      } catch (error) {
        ShowToast("customErrorToast", "Cart", error.message);
      }
    };

    getCartItems();
  }, []);

  const updateItem = (productId, quantity, cartId) => {
    nav.navigate("product", {
      navProductId: productId,
      navActionType: "UPDATE",
      navQuantity: quantity,
      navCartId: cartId,
    });
  };

  const deleteCartItem = (productId, quantity, cartId) => {
    nav.navigate("product", {
      navProductId: productId,
      navActionType: "UPDATE",
      navQuantity: quantity,
      navCartId: cartId,
    });
  };

  return [state, dispatch, userInfo, updateItem, deleteCartItem];
};

export default useCart;
