import {
  CustomErrorToast,
  CustomWarnToast,
} from "../components/customtoast/AllCustomToast";

const toastConfig = {
  customErrorToast: ({ text1, text2 }) => (
    <CustomErrorToast text={text1} subtext={text2} />
  ),
  customWarnToast: ({ text1, text2 }) => (
    <CustomWarnToast text={text1} subtext={text2} />
  ),
};

export default toastConfig;
