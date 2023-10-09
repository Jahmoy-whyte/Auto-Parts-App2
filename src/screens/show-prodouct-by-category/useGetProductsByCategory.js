import { useEffect, useCallback, useReducer } from "react";
import { dbGetProductsByCategory } from "../../services/prouductFetch";
import ShowToast from "../../helper/ShowToast";
import { useAuthContext } from "../../context/UserAuthContextWarpper";
import { useNavigation, useRoute } from "@react-navigation/native";

const useShowAllHook = () => {
  const { tokenAwareFetchWrapper } = useAuthContext();
  const nav = useNavigation();

  const intitalState = {
    products: [],
    isLoading: true,
  };
  const ACTIONS = {
    IS_LOADING: "is_loading",
    SET_PRODUCTS: "set_products",
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "set_products":
        const data = action.payload;
        return {
          ...state,
          products: data,
          isLoading: false,
        };
      case "is_loading":
        return { ...state, isLoading: action.payload };

      default:
        return state;
    }
  };

  const route = useRoute();
  const { category, id } = route.params;
  const [state, dispatch] = useReducer(reducer, intitalState);

  const getProducts = async () => {
    try {
      const data = await tokenAwareFetchWrapper(dbGetProductsByCategory, id);

      dispatch({ type: ACTIONS.SET_PRODUCTS, payload: data });
    } catch (error) {
      ShowToast("customErrorToast", "Error", error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const navigateToProduct = useCallback((productId) => {
    nav.navigate("product", {
      navProductId: productId,
      navActionType: "ADD",
      navQuantity: 1,
      navCartId: null,
    });
  }, []);

  return [state, navigateToProduct, category];
};

export default useShowAllHook;
