import { useEffect, useState, useContext, useReducer } from "react";
import { dbGetNewArrival } from "../../services/prouductFetch";
//import { UserAuthContext } from "../../context/UserAuthContextWarpper";
import ShowToast from "../../helper/ShowToast";
import { ACTIONS } from "./helper/reducerActions";
import tokenAwareFetchWrapper from "../../helper/tokenAwareFetchWrapper";
import { useAuthContext } from "../../context/UserAuthContextWarpper";
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

  const { accessToken, setAuthData } = useAuthContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const responce = await tokenAwareFetchWrapper(
          dbGetNewArrival,
          accessToken,
          setAuthData,
          []
        );

        dispatch({ type: ACTIONS.NEW_ARRIVAL, payload: responce });
      } catch (error) {
        dispatch({ type: ACTIONS.ON_ERROR });
        ShowToast("customErrorToast", "Error", error.message);
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return [state, dispatch];
};

export default useHome;
