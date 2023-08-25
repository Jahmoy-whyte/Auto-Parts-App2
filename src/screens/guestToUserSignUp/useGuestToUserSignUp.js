import { useReducer } from "react";
import ShowToast from "../../helper/ShowToast";
import useRefreshToken from "../../hooks/useRefreshToken";
import { dbGetUserInfo, dbUpdateGuestToUser } from "../../services/usersFetch";
import {
  deleteTokensFromStorage,
  useAuthContext,
} from "../../context/UserAuthContextWarpper";
import { ACTIONS } from "./helper/reducerActions";
import { useNavigation } from "@react-navigation/native";
import { useUserInfoContext } from "../../context/UserInfoContextWarpper";
const useGuestToUserSignUp = () => {
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
  const { login, tokenAwareFetchWrapper } = useAuthContext();
  const { setUserInfo } = useUserInfoContext();
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

      await tokenAwareFetchWrapper(dbUpdateGuestToUser, email, password);
      await login(email, password);
      const res = await tokenAwareFetchWrapper(dbGetUserInfo);
      setUserInfo(res);
      ShowToast(
        "customSuccessToast",
        "Success",
        "Account created successfully"
      );
      setIsLoading(false);
      nav.navigate("home");
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
    } else if (!state.checked) {
      bool = true;
      message = "Please read and check our privacy policy";
    }
    return { bool, message };
  };

  //const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return [state, dispatch, submit, nav];
};

export default useGuestToUserSignUp;
