import Toast from "react-native-toast-message";
const ShowToast = (toastType, title, text) => {
  Toast.show({
    type: toastType,
    text1: title,
    text2: text,
  });
};
export default ShowToast;
