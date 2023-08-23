import { useEffect, useState, useReducer } from "react";
import { dbGetProductById } from "../../services/prouductFetch";
import { ACTIONS } from "./helper/reducerActions";
import ShowToast from "../../helper/ShowToast";
import { useNavigation } from "@react-navigation/native";
import useRefreshToken from "../../hooks/useRefreshToken";
import { dbAddToCart, dbUpdateCartItem } from "../../services/cartFetch";
import useModifyUserInfoState from "../../hooks/useModifyUserInfoState";
const useProducts = (navProductId, navActionType, navQuantity, navCartId) => {
  const intitalState = {
    isLoading: true,
    productData: null,
    buttonIsLoading: false,
    quantity: navQuantity,
    quantityPrice: "",
    btnIsLoading: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "get_product_data":
        const productData = action.payload;
        return {
          ...state,
          isLoading: false,
          productData: productData,
          quantityPrice: productData.price * navQuantity,
        };
      case "quantity":
        const actionType = action.payload;
        const newQuantity = state.quantity + 1;
        if (actionType === "plus")
          return {
            ...state,
            quantity: newQuantity,
            quantityPrice: state.productData.price * newQuantity,
          };

        if (state.quantity > 1)
          return {
            ...state,
            quantity: state.quantity - 1,
            quantityPrice: state.productData.price * (state.quantity - 1),
          };

        return {
          ...state,
        };

      case "btn_is_loading":
        return {
          ...state,
          btnIsLoading: action.payload,
        };
      case "added":
        return {
          ...state,
          quantity: 1,
          quantityPrice: state.productData.price,
          btnIsLoading: false,
        };
    }
  };
  const tokenAwareFetchWrapper = useRefreshToken();

  const [state, dispatch] = useReducer(reducer, intitalState);
  const nav = useNavigation();
  const { addItemInCartState, updateItemInCartState } =
    useModifyUserInfoState();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const responce = await tokenAwareFetchWrapper(
          dbGetProductById,
          navProductId
        );
        if (responce.length == 0) {
          return;
        }
        dispatch({ type: ACTIONS.GET_PRODUCT_DATA, payload: responce[0] });
      } catch (error) {
        console.log(error);
        ShowToast("customErrorToast", error.message);
      }
    };

    getProduct();
  }, []);

  const addToCart = async () => {
    try {
      dispatch({ type: ACTIONS.BTN_IS_LOADING, payload: true });
      const insertId = await tokenAwareFetchWrapper(
        dbAddToCart,
        navProductId,
        state.quantity
      );
      addItemInCartState(insertId, navProductId, state.quantity);
      dispatch({ type: ACTIONS.ADDED });
      ShowToast("customSuccessToast", "Cart", "Item is now in cart");
    } catch (error) {
      console.log(error);
      ShowToast("customErrorToast", "Cart Error", error.message);
      dispatch({ type: ACTIONS.BTN_IS_LOADING, payload: false });
    }
  };

  const updateCartItem = async () => {
    try {
      dispatch({ type: ACTIONS.BTN_IS_LOADING, payload: true });
      const responce = await tokenAwareFetchWrapper(
        dbUpdateCartItem,
        navCartId,
        state.quantity
      );
      updateItemInCartState(navCartId, state.quantity);
      ShowToast(
        "customSuccessToast",
        "Cart",
        `${state.productData?.productName} updated successfully`
      );
      nav.goBack();
    } catch (error) {
      console.log(error);
      ShowToast("customErrorToast", "Cart Error", error.message);
      dispatch({ type: ACTIONS.BTN_IS_LOADING, payload: false });
    }
  };

  return [state, dispatch, nav, addToCart, updateCartItem];
};

export default useProducts;
