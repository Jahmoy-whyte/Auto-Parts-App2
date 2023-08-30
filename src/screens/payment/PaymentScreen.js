import { View, Text, SafeAreaView, TextInput, ScrollView } from "react-native";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import BackButton from "../../components/backbutton/BackButton";
import CustomButton from "../../components/button/CustomButton";
import usePayment from "./usePayment";

import Heading from "./components/heading/Heading";
import UserInfoRow from "./components/userinfocard/UserInfoCard";

import location from "../../assets/images/location.png";
import phone from "../../assets/images/phone.png";
import user from "../../assets/images/user.png";
import email from "../../assets/images/email.png";
import card from "../../assets/images/card.png";
import { ACTIONS } from "./helper/reducerData";
import { useCallback } from "react";
import Loading from "../../components/loading/Loading";

const PaymentScreen = () => {
  const [
    state,
    dispatch,
    userInfo,
    nav,
    fnShowCoupon,
    fnShowDelivery,
    subTotal,
    submit,
  ] = usePayment();

  //let cardNumber = data.cardInfo?.cardNumber?.substring(
  //  data.cardInfo?.cardNumber.length - 4
  // );

  return (
    <>
      <ExpoStatusBar style="light" />
      <View style={GlobalStyles.backDrop}></View>
      <SafeAreaView style={GlobalStyles.container}>
        <BackButton text={"Delivery"} />
        {state.isLoading ? (
          <Loading />
        ) : (
          <>
            <ScrollView style={styles}>
              <View style={styles.section}>
                <Heading
                  title={"Your Information"}
                  subtext={"Please ensure your information is correct"}
                  func={() => nav.navigate("accountsettings")}
                />

                <UserInfoRow
                  image={user}
                  text={"Name: "}
                  subtext={userInfo?.firstName + " " + userInfo?.lastName}
                />
                <UserInfoRow
                  image={phone}
                  text={"Phone Number: "}
                  subtext={userInfo?.phone}
                />
                <UserInfoRow
                  image={email}
                  text={"Email: "}
                  subtext={userInfo?.email}
                />
                <UserInfoRow
                  image={location}
                  text={"Address: "}
                  subtext={userInfo?.address}
                  func={() => nav.navigate("savedaddress")}
                />
              </View>

              <View style={styles.section}>
                <Heading
                  title={"Payment Method"}
                  func={() => nav.navigate("payment")}
                />
                {state.cardInfo != "" ? (
                  <UserInfoRow
                    image={card}
                    text={"Visa: "}
                    subtext={"Visa ending with: " + state.cardInfo}
                  />
                ) : null}
              </View>

              <View style={styles.section}>
                <Heading
                  title={"Delivery Instructions"}
                  func={fnShowDelivery}
                  editText={state.showDelivery ? "Delete" : null}
                />
                {state.showDelivery ? (
                  <TextInput
                    style={styles.textbox}
                    numberOfLines={3}
                    multiline={true}
                    textAlignVertical="top"
                    placeholder="Enter delivery indtructions"
                    onChangeText={(value) =>
                      dispatch({ type: ACTIONS.DELIVERYTEXT, payload: value })
                    }
                    value={state.deliveryText}
                  />
                ) : null}
              </View>

              <View style={styles.section}>
                <Heading
                  title={"Coupon"}
                  subtext={"Enter Coupon Code For Discount"}
                  func={fnShowCoupon}
                  editText={state.showCoupon ? "Delete" : null}
                />
                {state.showCoupon ? (
                  <TextInput
                    style={styles.textbox}
                    placeholder="Code"
                    value={state.couponText}
                    onChangeText={(value) =>
                      dispatch({ type: ACTIONS.COUPONTEXT, payload: value })
                    }
                  />
                ) : null}
              </View>

              <View style={styles.pricecontainer}>
                <View style={styles.inforow}>
                  <Text style={styles.infotextleft}>SubTotal:</Text>
                  <Text style={styles.infotextright}>{subTotal}</Text>
                </View>
                <View style={styles.inforow}>
                  <Text style={styles.infotextleft}>Tax:</Text>
                  <Text style={styles.infotextright}>$0</Text>
                </View>
                <View style={styles.inforow}>
                  <Text style={styles.infotextleft}>Total:</Text>
                  <Text style={styles.infotextright}>{subTotal}</Text>
                </View>
              </View>
            </ScrollView>

            <View style={styles.section}>
              <CustomButton
                isLoading={state.btnisloading}
                text={"Confirm Order"}
                marginVertical={10}
                FUNC={submit}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

export default PaymentScreen;
