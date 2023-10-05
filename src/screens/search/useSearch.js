import { useEffect, useState, useReducer, useCallback } from "react";
import { dbGetMake } from "../../services/makeFetch";
import { ACTIONS } from "./helper/reducerActions";
import timeOutWrapper from "../../timeOutWrapper";
import { dbGetSubCategory } from "../../services/categoriesFetch";
import intitalState from "./helper/intitalState";
import ShowToast from "../../helper/ShowToast";
import {
  dbGetNewArrival,
  dbGetProducts,
  dbSearchForProductWithCategory,
  dbSearchForProducts,
} from "../../services/prouductFetch";
import { useNavigation } from "@react-navigation/native";
import useRefreshToken from "../../hooks/useRefreshToken";
import { useAuthContext } from "../../context/UserAuthContextWarpper";
const useSearch = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "add_options": {
        const modelOptions = action.payload.modelOptions;
        return {
          ...state,
          modelOptions: modelOptions,
          modelIsLoading: false,
        };
      }

      case "is_searching": {
        const trueOrFalse = action.payload;
        return {
          ...state,
          isSearching: trueOrFalse,
          disableAllDropdown: trueOrFalse,
        };
      }

      case "add_products_data": {
        const data = action.payload;
        return {
          ...state,
          isSearching: false,
          disableAllDropdown: false,
          productsData: data,
        };
      }

      case "show_model": {
        const modelShow = action.payload.modelShow;
        const modelTitle = action.payload.modelTitle;
        const modelOptionsKey = action.payload.modelOptionsKey;
        const modelSelectedDropDownKey =
          action.payload.modelSelectedDropDownKey;
        const modelNextDropDownKey = action.payload.modelNextDropDownKey;
        return {
          ...state,
          modelShow: modelShow,
          modelTitle: modelTitle,
          modelIsLoading: true,
          modelOptionsKey: modelOptionsKey,
          modelSelectedDropDownKey: modelSelectedDropDownKey,
          modelNextDropDownKey: modelNextDropDownKey,
        };
      }

      case "selected_value": {
        const selectedValue = action.payload.selectedValue;
        const selectedValueId = action.payload.selectedValueId;
        const dropDownBoxKey = action.payload.dropDownBoxKey;
        const nextDropDownKey = action.payload.nextDropDownKey;

        const newState = {
          ...state,
          modelShow: false,
          [dropDownBoxKey]: {
            ...state[dropDownBoxKey],
            selectedValue: selectedValue,
            selectedValueId: selectedValueId,
          },
        };

        if (dropDownBoxKey == "makeDropDownBox") {
          return {
            ...newState,
            [nextDropDownKey]: {
              ...state[nextDropDownKey],
              isDisabled: false,
              selectedValue: "",
              selectedValueId: "",
            },
            yearDropDownBox: {
              ...state.yearDropDownBox,
              isDisabled: true,
              selectedValue: "",
              selectedValueId: "",
            },
          };
        }

        if (nextDropDownKey) {
          return {
            ...newState,
            [nextDropDownKey]: {
              ...state[nextDropDownKey],
              isDisabled: false,
              selectedValue: "",
              selectedValueId: "",
            },
          };
        }

        return newState;
      }
    }
  };

  const nav = useNavigation();
  const [state, dispatch] = useReducer(reducer, intitalState);
  const { tokenAwareFetchWrapper } = useAuthContext();

  useEffect(() => {
    const getInitialData = async () => {
      try {
        const responce = await tokenAwareFetchWrapper(dbGetNewArrival);
        dispatch({ type: ACTIONS.ADD_PRODUCTS_DATA, payload: responce });
      } catch (error) {
        ShowToast("customWarnToast", "Error", error.message);
      }
    };
    getInitialData();
  }, []);

  const searchFunc = async () => {
    const makeId = state.makeDropDownBox.selectedValueId;
    const modelId = state.modelDropDownBox.selectedValueId;
    const yearId = state.yearDropDownBox.selectedValueId;
    const categoryId = state.categoriesDropDownBox.selectedValueId;

    if (!testValue(makeId)) {
      return ShowToast("customWarnToast", "Make", "Please select make");
    } else if (!testValue(modelId)) {
      return ShowToast("customWarnToast", "Model", "Please select model");
    } else if (!testValue(yearId)) {
      return ShowToast("customWarnToast", "Year", "Please select year");
    }
    try {
      dispatch({ type: ACTIONS.IS_SEARCHING, payload: true });
      let responce;
      if (!testValue(categoryId)) {
        responce = await tokenAwareFetchWrapper(
          dbSearchForProducts,
          makeId,
          modelId,
          yearId
        );
      } else {
        responce = await tokenAwareFetchWrapper(
          dbSearchForProductWithCategory,
          makeId,
          modelId,
          yearId,
          categoryId
        );
      }

      dispatch({ type: ACTIONS.ADD_PRODUCTS_DATA, payload: responce });
    } catch (error) {
      ShowToast("customErrorToast", "Error", error.message);
      dispatch({ type: ACTIONS.IS_SEARCHING, payload: false });
    }
  };

  const testValue = (valueId) => {
    return valueId === "" ? false : true;
  };

  const navigateToProduct = useCallback((productId) => {
    nav.navigate("product", {
      navProductId: productId,
      navActionType: "ADD",
      navQuantity: 1,
      navCartId: null,
    });
  }, []);

  return [
    state,
    dispatch,
    searchFunc,
    navigateToProduct,
    tokenAwareFetchWrapper,
  ];
};

export default useSearch;
