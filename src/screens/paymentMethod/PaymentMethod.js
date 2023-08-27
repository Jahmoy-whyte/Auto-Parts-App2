import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  useWindowDimensions,
} from "react-native";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import BackButton from "../../components/backbutton/BackButton";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import CustomInput from "../../components/input/CustomInput";
import CustomButton from "../../components/button/CustomButton";
import usePaymentMethod from "./usePaymentMethod";

const PaymentMethod = () => {
  const { height, width } = useWindowDimensions();

  const [testBoxState, onChangeHandler, saveCardInfo] = usePaymentMethod();
  return (
    <>
      <ExpoStatusBar style="light" />
      <View style={GlobalStyles.backDrop}></View>

      <SafeAreaView style={GlobalStyles.container}>
        <BackButton text={"Payment Method"} />

        <ScrollView>
          <View style={styles.textboxcontainer}>
            <CustomInput
              placeholder={"0000-0000-0000-0000"}
              label={"Card number:"}
              name={"cardNumber"}
              onChangeHandler={onChangeHandler}
            >
              <AntDesign name="creditcard" size={24} color="#B3B3B3" />
            </CustomInput>

            <View style={styles.textboxcontainer2}>
              <CustomInput
                width={width / 2 - 20}
                placeholder={"MM/YY"}
                label={"Expiry date:"}
                name={"expiryDate"}
                onChangeHandler={onChangeHandler}
              >
                <AntDesign name="calendar" size={24} color="#B3B3B3" />
              </CustomInput>
              <CustomInput
                label={"CVC/CVV:"}
                width={width / 2 - 20}
                placeholder={"000"}
                name={"cvc"}
                onChangeHandler={onChangeHandler}
              ></CustomInput>
            </View>
            <CustomInput
              name={"cardHolder"}
              onChangeHandler={onChangeHandler}
              label={"Cardholder name:"}
              placeholder={"Enter cardholder name"}
            />

            <CustomButton
              text={"Add Card"}
              isLoading={testBoxState.isLoading}
              FUNC={saveCardInfo}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default PaymentMethod;
