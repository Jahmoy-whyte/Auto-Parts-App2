import { ACTIONS } from "./reducerActions";
import { dbGetModelBasedOnMakeId } from "../../../services/modelFetch";
import { dbGetYearsBasedOnModelId } from "../../../services/yearFetch";
import { dbGetSubCategory } from "../../../services/categoriesFetch";
import timeOutWrapper from "../../../timeOutWrapper";
import { dbGetMake } from "../../../services/makeFetch";
import ShowToast from "../../../helper/ShowToast";

// Get Make Options
export const getMakeOptions = async (
  state,
  dispatch,
  tokenAwareFetchWrapper
) => {
  try {
    const responce = await tokenAwareFetchWrapper(dbGetMake);
    dispatch({
      type: ACTIONS.ADD_OPTIONS,
      payload: { modelOptions: responce },
    });
  } catch (error) {
    ShowToast("customErrorToast", "Error", error.message);
  }
};

// Get mdel Options
export const getModelOptions = async (
  state,
  dispatch,
  tokenAwareFetchWrapper
) => {
  try {
    const responce = await tokenAwareFetchWrapper(
      dbGetModelBasedOnMakeId,
      state.makeDropDownBox.selectedValueId
    );

    dispatch({
      type: ACTIONS.ADD_OPTIONS,
      payload: { modelOptions: responce },
    });
  } catch (error) {
    ShowToast("customErrorToast", "Error", error.message);
  }
};

export const getYearOptions = async (
  state,
  dispatch,
  tokenAwareFetchWrapper
) => {
  try {
    const responce = await tokenAwareFetchWrapper(
      dbGetYearsBasedOnModelId,
      state.modelDropDownBox.selectedValueId
    );

    dispatch({
      type: ACTIONS.ADD_OPTIONS,
      payload: { modelOptions: responce },
    });
  } catch (error) {
    ShowToast("customErrorToast", "Error", error.message);
  }
};

export const getSubCategoryOptions = async (
  state,
  dispatch,
  tokenAwareFetchWrapper
) => {
  try {
    const responce = await tokenAwareFetchWrapper(dbGetSubCategory);
    dispatch({
      type: ACTIONS.ADD_OPTIONS,
      payload: { modelOptions: responce },
    });
  } catch (error) {
    ShowToast("customErrorToast", "Error", error.message);
  }
};
