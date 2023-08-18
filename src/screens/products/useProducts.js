import { useEffect, useState, useReducer } from "react";
import { dbGetProductById } from "../../services/prouductFetch";
import { ACTIONS } from "./helper/reducerActions";
import ShowToast from "../../helper/ShowToast";
import timeOutWrapper from "../../timeOutWrapper";
import { useNavigation } from "@react-navigation/native";

const useProducts = (productId) => {
  const intitalState = {
    isLoading: true,
    productData: null,
    buttonIsLoading: false,
    quantity: 1,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "get_product_data":
        const productData = action.payload;
        return { ...state, isLoading: false, productData: productData };
    }
  };

  const [state, dispatch] = useReducer(reducer, intitalState);
  const nav = useNavigation();
  useEffect(() => {
    const getProduct = async () => {
      try {
        const responce = await timeOutWrapper(() =>
          dbGetProductById(productId)
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

  return [state, dispatch, nav];
};

export default useProducts;
