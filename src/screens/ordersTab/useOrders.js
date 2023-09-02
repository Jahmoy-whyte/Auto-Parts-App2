import { useEffect, useState } from "react";
import { dbGetOrders } from "../../services/ordersFetch";
import { useAuthContext } from "../../context/UserAuthContextWarpper";
import ShowToast from "../../helper/ShowToast";
import { useIsFocused } from "@react-navigation/native";

const useOrders = () => {
  const [orders, setOrders] = useState({ isLoading: true, data: [] });
  const { tokenAwareFetchWrapper } = useAuthContext();

  const focus = useIsFocused();
  useEffect(() => {
    if (!focus) return;
    const getOrders = async () => {
      setOrders((prev) => ({ ...prev, isLoading: true }));
      try {
        const orders = await tokenAwareFetchWrapper(dbGetOrders);

        setOrders((prev) => ({ ...prev, data: orders }));
      } catch (error) {
        ShowToast("customErrorToast", "Error", error.message);
      }
      setOrders((prev) => ({ ...prev, isLoading: false }));
    };

    getOrders();
  }, [focus]);

  return [orders];
};

export default useOrders;
