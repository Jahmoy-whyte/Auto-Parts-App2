import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { dbSearchForLocation } from "../../services/addressFetch";
import ShowToast from "../../helper/ShowToast";
import { useAuthContext } from "../../context/UserAuthContextWarpper";
import * as Location from "expo-location";

const useLocationLanding = () => {
  const [data, setData] = useState({
    showModel: false,
    listOfLocations: [],
    seachBoxText: "",
    searchIsLoading: false,
    findLoactionIsLoading: false,
  });

  const nav = useNavigation();

  const { tokenAwareFetchWrapper } = useAuthContext();
  useEffect(() => {
    if (data.seachBoxText == "") {
      searchIsLoading(false);
      return;
    }

    searchIsLoading(true);
    const time = setTimeout(async () => {
      try {
        const list = await tokenAwareFetchWrapper(
          dbSearchForLocation,
          data.seachBoxText
        );
        setData((prev) => ({ ...prev, listOfLocations: list }));
      } catch (error) {
        ShowToast("customErrorToast", "Error", error.message);
      }
      searchIsLoading(false);
    }, 1000);

    return () => clearTimeout(time);
  }, [data.seachBoxText]);

  const navTo = (name) => {
    showModel(false);
    nav.navigate("enterlocation", {
      address: name,
      addressIsDisabled: true,
    });
  };

  const showModel = (value) => {
    setData((prev) => ({ ...prev, showModel: value, listOfLocations: [] }));
  };

  const searchIsLoading = (value) => {
    setData((prev) => ({ ...prev, searchIsLoading: value }));
  };

  const onChangeHandler = (value) => {
    setData((prev) => ({ ...prev, seachBoxText: value }));
  };

  const findLoactionIsLoading = (value) => {
    setData((prev) => ({ ...prev, findLoactionIsLoading: value }));
  };

  const findloaction = async () => {
    findLoactionIsLoading(true);
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        findLoactionIsLoading(false);
        ShowToast(
          "customErrorToast",
          "Error",
          "Permission to access location was denied"
        );
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      let address = await Location.reverseGeocodeAsync({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
      });

      navTo(address[0].city + "," + address[0].name);
    } catch (error) {
      ShowToast("customErrorToast", "Error", error.message);
    }
    findLoactionIsLoading(false);
  };

  return [data, navTo, showModel, onChangeHandler, findloaction];
};

export default useLocationLanding;
