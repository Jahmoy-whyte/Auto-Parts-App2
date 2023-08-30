import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { useUserInfoContext } from "../../context/UserInfoContextWarpper";
import useAsyncStore from "../../hooks/useAsyncStore";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import ShowToast from "../../helper/ShowToast";
import { io } from "socket.io-client";
import { ACTIONS } from "./helper/reducerData";
import { initialState } from "./helper/reducerData";
import formattedCost from "../../helper/formattedCost";
import validater from "./helper/validater";
import {
  getRefreshTokenFromStorage,
  useAuthContext,
} from "../../context/UserAuthContextWarpper";
import { getNewAccessToken } from "../../services/refreshTokenFetch";
import { dbInsertOrders } from "../../services/ordersFetch";
const usePayment = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "deliveryText":
        return { ...state, deliveryText: action.payload };
      case "couponText":
        return { ...state, couponText: action.payload };
      case "isLoading":
        return { ...state, isLoading: action.payload };

      case "showdelivery":
        return { ...state, showDelivery: action.payload, deliveryText: "" };
      case "showcoupon":
        return { ...state, showCoupon: action.payload, couponText: "" };
      case "setcardinfo":
        return { ...state, cardInfo: action.payload };

      case "btnisloading":
        return { ...state, btnisloading: action.payload };

      default:
        state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { userInfo, setUserInfo } = useUserInfoContext();
  const { accessToken, setAuthData, tokenAwareFetchWrapper } = useAuthContext();
  const { getData } = useAsyncStore();
  const focus = useIsFocused();
  const nav = useNavigation();
  const socketRef = useRef();

  useEffect(() => {
    const socket = io("http://192.168.100.28:3000", {
      auth: {
        token: accessToken,
      },
    });

    socket.on("connect", () => {
      console.log("connected ===============================");
      socketRef.current = socket;
      dispatch({ type: ACTIONS.ISLOADING, payload: false });
    });

    socket.on("connect_error", async (error) => {
      try {
        if (error.message !== "jwt expired") throw error;
        console.log(
          "=========================================================error"
        );
        const refreshToken = await getRefreshTokenFromStorage();
        const newAccessToken = await getNewAccessToken(refreshToken);
        socket.auth.token = newAccessToken;
        socket.connect();
      } catch (error) {
        if (
          error.message == "forbidden(R101)" ||
          error.message == "forbidden(R102)"
        ) {
          setAuthData((prev) => ({
            ...prev,
            isAuth: false,
          }));
          return;
        }

        ShowToast("customErrorToast", error.message);
      }
    });
    return () => socket.disconnect();
  }, []);

  useEffect(() => {
    if (!focus) return;
    const getPaymentInfo = async () => {
      const cardInfoJson = await getData("cardInfo");
      if (!cardInfoJson) return;
      const cardInfo = JSON.parse(cardInfoJson);
      dispatch({
        type: ACTIONS.SETCARDINFO,
        payload: cardInfo.cardNumber.substring(cardInfo.cardNumber.length - 4),
      });
    };

    getPaymentInfo();
  }, [focus]);

  const subTotal = useMemo(() => {
    const total = userInfo?.cart?.reduce(
      (prev, item) => prev + item.price * item.quantity,
      0
    );
    return total ? formattedCost(total) : 0;
  }, []);

  const fnShowDelivery = useCallback(() => {
    dispatch({ type: ACTIONS.SHOWDELIVERY, payload: !state.showDelivery });
  }, [state.showDelivery]);

  const fnShowCoupon = useCallback(() => {
    dispatch({ type: ACTIONS.SHOWCOUPON, payload: !state.showCoupon });
  }, [state.showCoupon]);

  const submit = async () => {
    dispatch({ type: ACTIONS.BTNISLOADING, payload: true });
    const total = userInfo?.cart?.reduce(
      (prev, item) => prev + item.price * item.quantity,
      0
    );

    try {
      const { bool, message } = validater(userInfo, state);
      if (bool) ShowToast("customErrorToast", message);

      const orderId = await tokenAwareFetchWrapper(
        dbInsertOrders,
        userInfo.address,
        userInfo.cart,
        total
      );

      socketRef.current.emit("hello", "this is my messahe");
      nav.navigate("receipt", {
        orderId: orderId,
      });
    } catch (error) {
      ShowToast("customErrorToast", error.message);
      console.log(error);
    }
    dispatch({ type: ACTIONS.BTNISLOADING, payload: false });
    // const dwdw = await dbInsertOrders()
  };

  return [
    state,
    dispatch,
    userInfo,
    nav,
    fnShowCoupon,
    fnShowDelivery,
    subTotal,
    submit,
  ];
};

export default usePayment;

/*


*/
