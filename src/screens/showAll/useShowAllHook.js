import { useEffect, useState, useCallback, useReducer } from "react";
import { dbProuductPagination } from "../../services/prouductFetch";
import ShowToast from "../../helper/ShowToast";
import { useAuthContext } from "../../context/UserAuthContextWarpper";
import { useNavigation } from "@react-navigation/native";

const useShowAllHook = () => {
  const { tokenAwareFetchWrapper } = useAuthContext();
  const nav = useNavigation();

  const intitalState = {
    products: [],
    isLoading: "",
    lastId: 0,
    loadMore: "",
    listEnd: false,
  };
  const ACTIONS = {
    IS_LOADING: "is_loading",
    SET_PRODUCTS: "set_products",
    SET_LOAD_MORE: "set_load_more",
    SET_LIST_END: "set_list_end",
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "set_products":
        const data = action.payload;
        return {
          ...state,
          products: [...state.products, ...data],
          lastId: data[data.length - 1].id,
        };
      case "is_loading":
        return { ...state, isLoading: action.payload };
      case "set_list_end":
        return { ...state, listEnd: true };
      case "set_load_more":
        return { ...state, loadMore: action.payload };
      default:
        state;
    }
  };

  const [state, dispatch] = useReducer(reducer, intitalState);

  const getProducts = async () => {
    try {
      const data = await tokenAwareFetchWrapper(
        dbProuductPagination,
        state.lastId
      );
      if (!data.length) return dispatch({ type: ACTIONS.SET_LIST_END });
      dispatch({ type: ACTIONS.SET_PRODUCTS, payload: data });
    } catch (error) {
      ShowToast("customErrorToast", "Error", error.message);
    }
  };

  useEffect(() => {
    const getInitProducts = async () => {
      dispatch({ type: ACTIONS.IS_LOADING, payload: true });
      await getProducts();
      dispatch({ type: ACTIONS.IS_LOADING, payload: false });
    };
    getInitProducts();
  }, []);

  const getMoreProducts = async () => {
    if (state.loadMore || state.listEnd) return;
    dispatch({ type: ACTIONS.SET_LOAD_MORE, payload: true });
    await getProducts();
    dispatch({ type: ACTIONS.SET_LOAD_MORE, payload: false });
  };

  const navigateToProduct = useCallback((productId) => {
    nav.navigate("product", {
      navProductId: productId,
      navActionType: "ADD",
      navQuantity: 1,
      navCartId: null,
    });
  }, []);

  return [state, dispatch, getMoreProducts, navigateToProduct];
};

export default useShowAllHook;
