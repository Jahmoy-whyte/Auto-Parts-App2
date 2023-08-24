import { useReducer, useState } from "react";
import ShowToast from "../../helper/ShowToast";
import { useAuthContext } from "../../context/UserAuthContextWarpper";
import { ACTIONS } from "./helper/reducerActions";
import { useNavigation, useRoute } from "@react-navigation/native";
const useLogin = () => {
  //   data
  const intitalState = {
    email: "",
    password: "",

    isLoading: false,
    showPassword: false,
    guestBtnLoading: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "set_input":
        return { ...state, [action.payload.name]: action.payload.value };
      case "show_password":
        return { ...state, showPassword: !state.showPassword };
      case "is_loading":
        return { ...state, isLoading: action.payload };
      case "guest":
        return { ...state, guestBtnLoading: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, intitalState);
  const { login, loginAsGuest } = useAuthContext();
  const nav = useNavigation();
  // const route = useRoute();
  // const signUpOptional = route.params?.signUpOptional;

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
      await login(email, password);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);

      ShowToast("customErrorToast", error.message);
    }
  };

  const checkInputs = () => {
    let bool = false;
    let message = "";
    if (state.email === "") {
      bool = true;
      message = "Please your enter email address";
    } else if (state.password === "") {
      bool = true;
      message = "Please your enter password";
    }
    return { bool, message };
  };

  //const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return [state, dispatch, submit, nav];
};

export default useLogin;
