import { useEffect, useState, useReducer } from "react";
import { dbGetMake } from "../../services/makeFetch";
import { ACTIONS } from "./helper/reducerActions";
import timeOutWrapper from "../../timeOutWrapper";
import { dbGetSubCategory } from "../../services/categoriesFetch";
import intitalState from "./helper/intitalState";

const useSearch = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "add_options": {
        const dropDownBox = action.payload.dropDownBox;
        const options = action.payload.options;
        return {
          ...state,
          disableAllDropdown: false,
          [dropDownBox]: {
            ...state[dropDownBox],
            options: options,
            isLoading: false,
            isDisabled: false,
          },
        };
      }
      case "show_options": {
        const dropDownBox = action.payload.dropDownBox;
        const show = action.payload.show;
        return {
          ...state,
          [dropDownBox]: {
            ...state[dropDownBox],
            show: show,
          },
        };
      }
      case "selected_value": {
        const dropDownBox = action.payload.dropDownBox;
        const selectedValue = action.payload.selectedValue;
        const selectedValueId = action.payload?.selectedValueId;
        const nextDropDown = action.payload?.nextDropDown;

        const newState = {
          ...state,
          disableAllDropdown: true,
          [dropDownBox]: {
            ...state[dropDownBox],
            selectedValue: selectedValue,
            selectedValueId: selectedValueId,
            show: false,
          },

          [nextDropDown]: {
            ...state[nextDropDown],
            isDisabled: true,
            isLoading: true,
            show: false,
            selectedValue: "",
            selectedValueId: "",
          },
        };

        if (dropDownBox === "makeDropDownBox") {
          return {
            ...newState,
            yearDropDownBox: {
              ...state.yearDropDownBox,
              selectedValue: "",
              selectedValueId: "",
              isDisabled: true,
            },
          };
        }
        if (!nextDropDown) {
          return {
            ...state,
            disableAllDropdown: true,
            [dropDownBox]: {
              ...state[dropDownBox],
              selectedValue: selectedValue,
              selectedValueId: selectedValueId,
              show: false,
            },
          };
        }

        return newState;
      }
      case "disable_all_dropdown": {
        return {
          ...state,
          disableAllDropdown: action.payload,
        };
      }

      case "close_all": {
        return {
          ...state,
          makeDropDownBox: {
            ...state.makeDropDownBox,
            show: false,
          },
          modelDropDownBox: {
            ...state.modelDropDownBox,
            show: false,
          },
          yearDropDownBox: {
            ...state.yearDropDownBox,
            show: false,
          },
          categoriesDropDownBox: {
            ...state.categoriesDropDownBox,
            show: false,
          },
        };
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, intitalState);

  const [] = useState();

  useEffect(() => {
    const getMake = async () => {
      try {
        const makeOptions = await timeOutWrapper(() => dbGetMake());
        const categoryOptions = await timeOutWrapper(() => dbGetSubCategory());
        dispatch({
          type: ACTIONS.ADD_OPTIONS,
          payload: { dropDownBox: "makeDropDownBox", options: makeOptions },
        });

        dispatch({
          type: ACTIONS.ADD_OPTIONS,
          payload: {
            dropDownBox: "categoriesDropDownBox",
            options: categoryOptions,
          },
        });
      } catch (error) {
        console.log(error);
      }
    };

    getMake();
  }, []);

  //console.log(state.makeDropDownBox);
  return [state, dispatch];
};

export default useSearch;
