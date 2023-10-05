import { useNavigation, useRoute } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { useAuthContext } from "../../context/UserAuthContextWarpper";
import { dbAddAddress } from "../../services/addressFetch";
import ShowToast from "../../helper/ShowToast";

const useEnterLocation = () => {
  const route = useRoute();
  const { address, addressIsDisabled } = route.params;
  const nav = useNavigation();
  const { tokenAwareFetchWrapper } = useAuthContext();
  const [data, setData] = useState({
    isLoading: false,
    address: address,
    street: "",
    additionalInfo: "",
    placeType: "",
  });

  const onChangeHandler = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const selectPlaceType = useCallback((text) => {
    setData((prev) => ({ ...prev, placeType: text }));
  }, []);

  const onSave = async () => {
    const { bool, message } = checkTextBox();

    if (bool) return ShowToast("customErrorToast", message);
    setData((prev) => ({ ...prev, isLoading: true }));
    try {
      await tokenAwareFetchWrapper(
        dbAddAddress,
        data.address + " " + data.street,
        data.additionalInfo,
        data.placeType
      );
      ShowToast("customSuccessToast", "Address saved");
      nav.navigate("savedaddress");
    } catch (error) {
      ShowToast("customErrorToast", "Error", error.message);
    }

    setData((prev) => ({ ...prev, isLoading: false }));
  };

  const checkTextBox = () => {
    let bool = false;

    let message = "";
    if (data.address == "") {
      bool = true;
      message = "Please enter address";
    } else if (data.street == "") {
      bool = true;
      message = "Please enter street";
    } else if (data.placeType == "") {
      bool = true;
      message = "Please select a place";
    }
    return { bool, message };
  };

  return [
    data,
    address,
    addressIsDisabled,
    onSave,
    onChangeHandler,
    selectPlaceType,
  ];
};

export default useEnterLocation;
