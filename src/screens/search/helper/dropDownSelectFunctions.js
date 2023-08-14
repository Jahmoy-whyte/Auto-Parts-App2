import { ACTIONS } from "./reducerActions";
import { dbGetModelBasedOnMakeId } from "../../../services/modelFetch";
import { dbGetYearsBasedOnModelId } from "../../../services/yearFetch";
import timeOutWrapper from "../../../timeOutWrapper";

// Make dropdown box
export const makeSelect = async (makeId, makeName, dispatch) => {
  if (makeId == 0) return;
  try {
    dispatch({
      type: ACTIONS.SELECTED_VALUE,
      payload: {
        selectedValue: makeName,
        selectedValueId: makeId,
        dropDownBox: "makeDropDownBox",
        nextDropDown: "modelDropDownBox",
      },
    });

    const responce = await timeOutWrapper(() =>
      dbGetModelBasedOnMakeId(makeId)
    );

    dispatch({
      type: ACTIONS.ADD_OPTIONS,
      payload: { dropDownBox: "modelDropDownBox", options: responce },
    });
  } catch (error) {
    console.log(error);
  }
};
// model dropdown box
export const modelSelect = async (modelId, modelName, dispatch) => {
  try {
    dispatch({
      type: ACTIONS.SELECTED_VALUE,
      payload: {
        selectedValue: modelName,
        selectedValueId: modelId,
        dropDownBox: "modelDropDownBox",
        nextDropDown: "yearDropDownBox",
      },
    });

    const responce = await timeOutWrapper(() =>
      dbGetYearsBasedOnModelId(modelId)
    );

    dispatch({
      type: ACTIONS.ADD_OPTIONS,
      payload: { dropDownBox: "yearDropDownBox", options: responce },
    });
  } catch (error) {
    console.log(error);
  }
};

// year dropdown box
export const yearSelect = async (yearId, year, dispatch) => {
  dispatch({
    type: ACTIONS.SELECTED_VALUE,
    payload: {
      selectedValue: year,
      selectedValueId: yearId,
      dropDownBox: "yearDropDownBox",
      nextDropDown: null,
    },
  });
  dispatch({
    type: ACTIONS.DISABLE_ALL_DROPDOWN,
    payload: false,
  });
};

// Make dropdown box
export const categorySelect = async (categoryId, categoryName, dispatch) => {
  dispatch({
    type: ACTIONS.SELECTED_VALUE,
    payload: {
      selectedValue: categoryName,
      selectedValueId: categoryId,
      dropDownBox: "categoriesDropDownBox",
      nextDropDown: null,
    },
  });
  dispatch({
    type: ACTIONS.DISABLE_ALL_DROPDOWN,
    payload: false,
  });
};
