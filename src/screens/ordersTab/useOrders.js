import { useCallback, useEffect, useState } from "react";
import { dbGetOrders } from "../../services/ordersFetch";
import { useAuthContext } from "../../context/UserAuthContextWarpper";
import ShowToast from "../../helper/ShowToast";
import { useIsFocused } from "@react-navigation/native";
import useSocket from "../../hooks/useSocket";
import { useUserInfoContext } from "../../context/UserInfoContextWarpper";

const useOrders = () => {
  const [orders, setOrders] = useState({
    isLoading: true,
    data: [],
    selected: "all",
  });
  const { tokenAwareFetchWrapper } = useAuthContext();

  const { userInfo } = useUserInfoContext();
  const { socket } = useSocket();

  useEffect(() => {
    if (socket.isLoading) return;

    socket.socket.on("OrderUpdate", (arg) => {
      if (arg.userId === userInfo.id) {
        getOrders();
      }
    });

    socket.socket.on("refresh", (arg) => {
      getOrders();
    });

    getOrders();
  }, [socket]);

  const getOrders = async () => {
    setOrders((prev) => ({ ...prev, isLoading: true }));
    try {
      const orderData = await tokenAwareFetchWrapper(dbGetOrders);

      setOrders((prev) => ({ ...prev, data: orderData }));
    } catch (error) {
      ShowToast("customErrorToast", "Error", error.message);
    }
    setOrders((prev) => ({ ...prev, isLoading: false }));
  };

  const selectOrderStatus = useCallback((orderStatus) => {
    setOrders((prev) => ({ ...prev, selected: orderStatus }));
  }, []);

  return [orders, selectOrderStatus];
};

export default useOrders;
