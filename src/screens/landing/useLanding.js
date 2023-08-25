import { useState } from "react";
import ShowToast from "../../helper/ShowToast";
import { useAuthContext } from "../../context/UserAuthContextWarpper";
import { useNavigation } from "@react-navigation/native";
const useLanding = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { loginAsGuest } = useAuthContext();
  const nav = useNavigation();

  const continueAsGuest = async () => {
    try {
      setIsLoading(true);
      await loginAsGuest();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      ShowToast("customErrorToast", error.message);
    }
  };

  return [isLoading, nav, continueAsGuest];
};

export default useLanding;
