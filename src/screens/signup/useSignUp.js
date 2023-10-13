import { useReducer } from "react";
import ShowToast from "../../helper/ShowToast";

import {
  deleteTokensFromStorage,
  useAuthContext,
} from "../../context/UserAuthContextWarpper";
import { ACTIONS } from "./helper/reducerActions";
import { useNavigation } from "@react-navigation/native";
import isEmailFormat from "../../helper/isEmailFormat";

const useSignUp = () => {
  //   data
  const intitalState = {
    email: "",
    password: "",
    checked: false,
    isLoading: false,
    showPassword: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "set_input":
        return { ...state, [action.payload.name]: action.payload.value };
      case "set_checked":
        return { ...state, checked: !state.checked };
      case "show_password":
        return { ...state, showPassword: !state.showPassword };
      case "is_loading":
        return { ...state, isLoading: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, intitalState);
  const { signUp, login } = useAuthContext();
  const nav = useNavigation();

  const setIsLoading = (value) => {
    dispatch({ type: ACTIONS.IS_LOADING, payload: value });
  };

  const submit = async () => {
    const res = checkInputs();
    if (res.bool) return ShowToast("customErrorToast", res.message);
    setIsLoading(true);

    try {
      const email = state.email.trim();
      const password = state.password.trim();

      await signUp(email, password);

      ShowToast(
        "customSuccessToast",
        "Success",
        "Account created successfully please login"
      );

      await login(email, password);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      ShowToast("customErrorToast", error.message);
    }
  };

  const checkInputs = () => {
    const emailFormat = isEmailFormat(state.email.trim());

    let bool = false;
    let message = "";
    if (state.email === "") {
      bool = true;
      message = "Please your enter email address";
    } else if (!emailFormat.bool) {
      bool = true;
      message = emailFormat.message;
    } else if (state.password === "") {
      bool = true;
      message = "Please your enter password";
    } else if (!state.checked) {
      bool = true;
      message = "Please read and check our privacy policy";
    }
    return { bool, message };
  };

  //const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return [state, dispatch, submit, nav];
};

export default useSignUp;
