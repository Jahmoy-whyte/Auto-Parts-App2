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

const PaymentScreen = () => {
  const [userInfo, data, nav, setDataState, navigate] = usePayment();

  let cardNumber = data.cardInfo?.cardNumber?.substring(
    data.cardInfo?.cardNumber.length - 4
  );

  return (
    <>
      <ExpoStatusBar style="light" />
      <View style={GlobalStyles.backDrop}></View>
      <SafeAreaView style={GlobalStyles.container}>
        <BackButton text={"Delivery"} />

        <ScrollView style={styles}>
          <View style={styles.section}>
            <Heading
              title={"Your Information"}
              subtext={"Please ensure your information is correct"}
              func={() => navigate("accountsettings")}
            >
              <AntDesign name="user" size={24} color="white" />
            </Heading>

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
              func={() => navigate("savedaddress")}
            />
          </View>

          <View style={styles.section}>
            <Heading
              title={"Delivery Instructions"}
              func={() => setDataState("showDelivery", !data.showDelivery)}
            >
              <AntDesign name="user" size={24} color="white" />
            </Heading>
            {data.showDelivery ? (
              <TextInput
                style={styles.textbox}
                numberOfLines={3}
                multiline={true}
                textAlignVertical="top"
                placeholder="Enter delivery indtructions"
                onChangeText={(value) => setDataState("deliveryText", value)}
              />
            ) : null}
          </View>

          <View style={styles.section}>
            <Heading title={"Payment Method"} func={() => navigate("payment")}>
              <AntDesign name="user" size={24} color="white" />
            </Heading>

            {cardNumber ? (
              <UserInfoRow
                image={card}
                text={"Visa: "}
                subtext={"Visa ending in: " + cardNumber}
              />
            ) : null}
          </View>

          <View style={styles.section}>
            <Heading
              title={"Coupon"}
              subtext={"Enter Coupon Code For Discount"}
              func={() => setDataState("showCoupon", !data.showCoupon)}
            >
              <AntDesign name="user" size={24} color="white" />
            </Heading>

            {data.showCoupon ? (
              <TextInput
                style={styles.textbox}
                placeholder="Code"
                onChangeText={(value) => setDataState("couponText", value)}
              />
            ) : null}
          </View>

          <View style={styles.pricecontainer}>
            <View style={styles.inforow}>
              <Text style={styles.infotextleft}>SubTotal:</Text>
              <Text style={styles.infotextright}>0</Text>
            </View>
            <View style={styles.inforow}>
              <Text style={styles.infotextleft}>Tax:</Text>
              <Text style={styles.infotextright}>0</Text>
            </View>
            <View style={styles.inforow}>
              <Text style={styles.infotextleft}>Total:</Text>
              <Text style={styles.infotextright}>0</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.section}>
          <CustomButton text={"Confirm Order"} marginVertical={10} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default PaymentScreen;
