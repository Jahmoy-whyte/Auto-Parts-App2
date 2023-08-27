import AsyncStorage from "@react-native-async-storage/async-storage";
import ShowToast from "../helper/ShowToast";

const useAsyncStore = () => {
  const storeData = async (key, value) => {
    await AsyncStorage.setItem(key, value);
  };

  const getData = async (key) => {
    const value = await AsyncStorage.getItem(key);
    return value;
  };

  const removeValue = async (key) => {
    await AsyncStorage.removeItem(key);
  };

  return {
    storeData,
    getData,
    removeValue,
  };
};
export default useAsyncStore;
