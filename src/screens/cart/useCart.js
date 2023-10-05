import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import ShowToast from "../../helper/ShowToast";
import { ACTIONS } from "./helper/reducerActions";
import { dbDeleteCartItem, dbGetUserCart } from "../../services/cartFetch";
import { useNavigation } from "@react-navigation/native";
import useModifyCartState from "../../hooks/useModifyUserInfoState";
import { useAuthContext } from "../../context/UserAuthContextWarpper";

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
  const { tokenAwareFetchWrapper } = useAuthContext();
  const { setUserInfo, userInfo, deleteItemInCartState, setItemInCartState } =
    useModifyCartState();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getCartItems = async () => {
      try {
        const items = await tokenAwareFetchWrapper(dbGetUserCart);

        setItemInCartState(items);
        dispatch({ type: ACTIONS.IS_LOADING, payload: false });
      } catch (error) {
        ShowToast("customErrorToast", "Cart", error.message);
      }
    };

    getCartItems();
  }, []);

  const updateItem = useCallback((productId, quantity, cartId) => {
    nav.navigate("product", {
      navProductId: productId,
      navActionType: "UPDATE",
      navQuantity: quantity,
      navCartId: cartId,
    });
  }, []);

  const deleteCartItem = useCallback(async (id) => {
    const item1 = { ...userInfo.cart.find((item) => item.id == id) };
    try {
      deleteItemInCartState(id);
      await tokenAwareFetchWrapper(dbDeleteCartItem, id);
    } catch (error) {
      setUserInfo((prev) => ({ ...prev, cart: [...prev.cart, item1] }));
      ShowToast("customErrorToast", "Cart", error.message);
    }
  }, []);

  const subTotal = useMemo(() => {
    const total = userInfo?.cart?.reduce(
      (prev, item) => prev + item.price * item.quantity,
      0
    );
    return total ? total : 0;
  }, [userInfo]);

  const checkOut = () => {
    if (userInfo?.cart?.length < 1)
      return ShowToast("customWarnToast", "Cart", "please add item to cart");
    if (userInfo?.userStatus !== "user") {
      nav.navigate("guestToUserSignUp");
      return;
    }

    nav.navigate("checkout");
  };

  /*
  const dwd = []
dwd.reduce((prev , item)=> prev +item )
  */

  return [
    state,
    dispatch,
    updateItem,
    deleteCartItem,
    userInfo,
    subTotal,
    checkOut,
  ];
};

export default useCart;
