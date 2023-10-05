import { useEffect, useState } from "react";
import ShowToast from "../../helper/ShowToast";
import { useUserInfoContext } from "../../context/UserInfoContextWarpper";
import { useAuthContext } from "../../context/UserAuthContextWarpper";
import { dbUpdateUser } from "../../services/usersFetch";

const useAccountSettings = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { userInfo, setUserInfo } = useUserInfoContext();

  const { tokenAwareFetchWrapper } = useAuthContext();
  const [textBoxData, setTextBoxData] = useState({
    firstName: userInfo?.firstName ? userInfo?.firstName : "",
    lastName: userInfo?.lastName ? userInfo?.lastName : "",
    phone: userInfo?.phone ? userInfo?.phone : "",
    email: userInfo?.email ? userInfo?.email : "",
  });

  const setTextboxText = (textbox, value) => {
    setTextBoxData((prev) => ({ ...prev, [textbox]: value }));
  };

  const updateInfo = async () => {
    const { bool, message } = textBoxCheck();
    if (bool) return ShowToast("customErrorToast", "Error", message);
    try {
      setIsLoading(true);

      const firstName = textBoxData.firstName;
      const lastName = textBoxData.lastName;
      const phone = textBoxData.phone;
      await tokenAwareFetchWrapper(dbUpdateUser, firstName, lastName, phone);
      setUserInfo((prev) => ({
        ...prev,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
      }));
      ShowToast("customSuccessToast", "Saved");
    } catch (error) {
      ShowToast("customErrorToast", "Error", error.message);
    }
    setIsLoading(false);
  };

  const textBoxCheck = () => {
    let bool = false;
    let message = "";
    if (userInfo?.userStatus != "user") {
      bool = true;
      message = "Please Sign Up";
    } else if (textBoxData.firstName == "") {
      bool = true;
      message = "Please Enter First Name";
    } else if (textBoxData.lastName == "") {
      bool = true;
      message = "Please Enter Last Name";
    } else if (textBoxData.phone == "") {
      bool = true;
      message = "Please Enter Phone Number";
    }

    return { bool, message };
  };

  return [isLoading, textBoxData, updateInfo, setTextboxText];
};

export default useAccountSettings;
