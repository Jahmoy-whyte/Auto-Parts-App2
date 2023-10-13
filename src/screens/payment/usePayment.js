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
import useSocket from "../../hooks/useSocket";
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
  const { userInfo } = useUserInfoContext();
  const { tokenAwareFetchWrapper } = useAuthContext();
  const { getData } = useAsyncStore();
  const { socket } = useSocket();
  const focus = useIsFocused();
  const nav = useNavigation();

  useEffect(() => {
    if (socket.isLoading) return;
    dispatch({ type: ACTIONS.ISLOADING, payload: false });
  }, [socket]);

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
    try {
      const { bool, message } = validater(userInfo, state);
      if (bool) return ShowToast("customErrorToast", message);
      dispatch({ type: ACTIONS.BTNISLOADING, payload: true });
      const total = userInfo?.cart?.reduce(
        (prev, item) => prev + item.price * item.quantity,
        0
      );

      const orderId = await tokenAwareFetchWrapper(
        dbInsertOrders,
        userInfo.address,
        userInfo.cart,
        total
      );

      socket.socket.emit("OrderSent", userInfo.id);
      nav.navigate("receipt", {
        orderId: orderId,
      });
    } catch (error) {
      ShowToast("customErrorToast", error.message);
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
