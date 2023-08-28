import { useCallback, useEffect, useState } from "react";
import { dbDeleteAddress, dbGetAddress } from "../../services/addressFetch";
import { useAuthContext } from "../../context/UserAuthContextWarpper";
import ShowToast from "../../helper/ShowToast";
import { useIsFocused } from "@react-navigation/native";
import { dbUpdateSelectedAddress } from "../../services/usersFetch";
import { useUserInfoContext } from "../../context/UserInfoContextWarpper";

const useSaveAddress = () => {
  const [address, setAddress] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { userInfo, setUserInfo } = useUserInfoContext();
  const { tokenAwareFetchWrapper } = useAuthContext();
  const [selected, setSelected] = useState(userInfo?.addressId);
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
    const currentAddress = userInfo?.address;
    const currentPlaceType = userInfo?.placeType;
    const addressId = userInfo?.addressId;

    let tempKeep = { ...address.find((address) => address.id == id) };
    try {
      clientSideAddressSave("", "", "");
      setAddress((prev) => address.filter((address) => address.id !== id));

      await tokenAwareFetchWrapper(dbDeleteAddress, id);
    } catch (error) {
      clientSideAddressSave(addressId, currentAddress, currentPlaceType);
      setAddress((prev) => [...prev, tempKeep]);
      ShowToast("customErrorToast", "Error", error.message);
    }
  };

  const clientSideAddressSave = (id, address, placeType) => {
    setUserInfo((prev) => ({
      ...prev,
      addressId: id,
      address: address,
      placeType: placeType,
    }));
  };

  const selectAddress = async (info) => {
    const currentAddress = userInfo?.address;
    const currentPlaceType = userInfo?.placeType;
    const id = userInfo?.addressId;
    if (info.id === id) return;

    try {
      setSelected(info.id);
      clientSideAddressSave(info.id, info.address, info.placeType);
      await tokenAwareFetchWrapper(dbUpdateSelectedAddress, info.id);
    } catch (error) {
      clientSideAddressSave(id, currentAddress, currentPlaceType);
      setSelected(id);
      ShowToast("customErrorToast", "Error", error.message);
    }
  };

  return [address, isLoading, deleteAddress, selectAddress, selected];
};

export default useSaveAddress;
