import { useEffect, useState } from "react";
import { dbGetUserOrderDetail } from "../../services/ordersFetch";
import { useAuthContext } from "../../context/UserAuthContextWarpper";
import ShowToast from "../../helper/ShowToast";
import { useNavigation, useRoute } from "@react-navigation/native";

const useOrderDetails = () => {
  const [orders, setOrders] = useState({ isLoading: true, data: [] });
  const { tokenAwareFetchWrapper } = useAuthContext();
  const route = useRoute();
  useEffect(() => {
    const getOrders = async () => {
      setOrders((prev) => ({ ...prev, isLoading: true }));
      try {
        const orders = await tokenAwareFetchWrapper(
          dbGetUserOrderDetail,
          route.params.orderId
        );
        console.log(orders[0]);
        setOrders((prev) => ({ ...prev, data: orders[0] }));
      } catch (error) {
        ShowToast("customErrorToast", "Error", error.message);
      }
      setOrders((prev) => ({ ...prev, isLoading: false }));
    };

    getOrders();
  }, []);

  return [orders];
};

export default useOrderDetails;
