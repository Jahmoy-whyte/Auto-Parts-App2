import { useEffect, useState } from "react";
import useAsyncStore from "../../hooks/useAsyncStore";
import ShowToast from "../../helper/ShowToast";
const usePaymentMethod = () => {
  const [testBoxState, setTextBoxState] = useState({
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    cardHolder: "",
    isLoading: false,
  });

  const { getData, storeData } = useAsyncStore();

  useEffect(() => {
    const test = async () => {
      const data = await getData("cardInfo");
      console.log(data);
    };

    test();
  }, []);
  const onChangeHandler = (value, name) => {
    setTextBoxState((prev) => ({ ...prev, [name]: value }));
  };

  const saveCardInfo = async () => {
    const { bool, message } = checkTextBox();
    if (bool) return ShowToast("customErrorToast", message);

    setTextBoxState((prev) => ({ ...prev, isLoading: true }));
    try {
      const value = JSON.stringify(testBoxState);
      await storeData("cardInfo", value);
      ShowToast("customSuccessToast", "Added");
    } catch (e) {
      ShowToast("customErrorToast", "error", e.message);
    }

    setTextBoxState((prev) => ({ ...prev, isLoading: false }));
  };

  const checkTextBox = () => {
    let bool = false;
    let message = "";
    if (testBoxState.cardNumber == "") {
      bool = true;
      message = "Enter card number";
    } else if (testBoxState.expiryDate == "") {
      bool = true;
      message = "Enter expiry date";
    } else if (testBoxState.cvc == "") {
      bool = true;
      message = "Enter cvc/cvv";
    } else if (testBoxState.cardHolder == "") {
      bool = true;
      message = "Enter card holder name";
    }
    return { bool, message };
  };

  return [testBoxState, onChangeHandler, saveCardInfo];
};

export default usePaymentMethod;
