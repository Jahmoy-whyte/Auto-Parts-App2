import {
  CustomErrorToast,
  CustomWarnToast,
  CustomSuccessToast,
} from "../components/customtoast/AllCustomToast";

const toastConfig = {
  customErrorToast: ({ text1, text2 }) => (
    <CustomErrorToast text={text1} subtext={text2} />
  ),
  customWarnToast: ({ text1, text2 }) => (
    <CustomWarnToast text={text1} subtext={text2} />
  ),
  customSuccessToast: ({ text1, text2 }) => (
    <CustomSuccessToast text={text1} subtext={text2} />
  ),
};

export default toastConfig;
