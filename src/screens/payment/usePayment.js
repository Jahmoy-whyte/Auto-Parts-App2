import { useCallback, useEffect, useState } from "react";
import { useUserInfoContext } from "../../context/UserInfoContextWarpper";
import useAsyncStore from "../../hooks/useAsyncStore";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import ShowToast from "../../helper/ShowToast";

const usePayment = () => {
  const { userInfo, setUserInfo } = useUserInfoContext();
  const { getData } = useAsyncStore();
  const focus = useIsFocused();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({
    cardInfo: "",
    showDelivery: false,
    deliveryText: "",
    showCoupon: false,
    couponText: "",
  });

  const nav = useNavigation();
  const setDataState = (key, value) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const navigate = useCallback((screen) => {
    nav.navigate(screen);
  }, []);

  useEffect(() => {
    if (!focus) return;

    const getPaymentInfo = async () => {
      setIsLoading(true);

      try {
        const cardInfoJson = await getData("cardInfo");
        const cardInfo = JSON.parse(cardInfoJson);
        console.log(cardInfo);
        setDataState("cardInfo", cardInfo);
      } catch (error) {
        ShowToast("customErrorToast", errorm.message);
      }

      setIsLoading(false);
    };
    getPaymentInfo();
  }, [focus]);

  console.log(data);
  return [userInfo, data, nav, setDataState, navigate];
};

export default usePayment;
