import { ACTIONS } from "./reducerActions";
import { dbGetModelBasedOnMakeId } from "../../../services/modelFetch";
import { dbGetYearsBasedOnModelId } from "../../../services/yearFetch";
import { dbGetSubCategory } from "../../../services/categoriesFetch";
import timeOutWrapper from "../../../timeOutWrapper";
import { dbGetMake } from "../../../services/makeFetch";
import ShowToast from "../../../helper/ShowToast";
import tokenAwareFetchWrapper from "../../../helper/tokenAwareFetchWrapper";

// Get Make Options
export const getMakeOptions = async (
  state,
  dispatch,
  accessToken,
  setAuthData
) => {
  try {
    const responce = await tokenAwareFetchWrapper(
      dbGetMake,
      accessToken,
      setAuthData,
      []
    );
    dispatch({
      type: ACTIONS.ADD_OPTIONS,
      payload: { modelOptions: responce },
    });
  } catch (error) {
    console.log(error);
    ShowToast("customErrorToast", "Error", error.message);
  }
};

// Get mdel Options
export const getModelOptions = async (
  state,
  dispatch,
  accessToken,
  setAuthData
) => {
  try {
    const responce = await tokenAwareFetchWrapper(
      dbGetModelBasedOnMakeId,
      accessToken,
      setAuthData,
      [state.makeDropDownBox.selectedValueId]
    );

    dispatch({
      type: ACTIONS.ADD_OPTIONS,
      payload: { modelOptions: responce },
    });
  } catch (error) {
    console.log(error);
    ShowToast("customErrorToast", "Error", error.message);
  }
};

export const getYearOptions = async (
  state,
  dispatch,
  accessToken,
  setAuthData
) => {
  try {
    const responce = await timeOutWrapper(() =>
      dbGetYearsBasedOnModelId(state.modelDropDownBox.selectedValueId)
    );
    dispatch({
      type: ACTIONS.ADD_OPTIONS,
      payload: { modelOptions: responce },
    });
  } catch (error) {
    console.log(error);
    ShowToast("customErrorToast", "Error", error.message);
  }
};

export const getSubCategoryOptions = async (
  state,
  dispatch,
  accessToken,
  setAuthData
) => {
  try {
    const responce = await timeOutWrapper(() => dbGetSubCategory());
    dispatch({
      type: ACTIONS.ADD_OPTIONS,
      payload: { modelOptions: responce },
    });
  } catch (error) {
    console.log(error);
    ShowToast("customErrorToast", "Error", error.message);
  }
};
