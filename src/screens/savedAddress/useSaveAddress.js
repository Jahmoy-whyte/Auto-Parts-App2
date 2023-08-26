import { useEffect, useState } from "react";
import { dbDeleteAddress, dbGetAddress } from "../../services/addressFetch";
import { useAuthContext } from "../../context/UserAuthContextWarpper";
import ShowToast from "../../helper/ShowToast";
import { useIsFocused } from "@react-navigation/native";

const useSaveAddress = () => {
  const [address, setAddress] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { tokenAwareFetchWrapper } = useAuthContext();
  const focus = useIsFocused();
  useEffect(() => {
    if (!focus) return;
    const getAddress = async () => {
      try {
        const res = await tokenAwareFetchWrapper(dbGetAddress);
        setAddress(res);
      } catch (error) {
        ShowToast("customErrorToast", "Error", error.message);
      }
      setIsLoading(false);
    };
    getAddress();
  }, [focus]);

  const deleteAddress = async (id) => {
    try {
      await tokenAwareFetchWrapper(dbDeleteAddress, id);
    } catch (error) {
      ShowToast("customErrorToast", "Error", error.message);
    }
  };

  return [address, isLoading, deleteAddress];
};

export default useSaveAddress;
