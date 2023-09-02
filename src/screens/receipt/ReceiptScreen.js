import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  Image,
  BackHandler,
  Alert,
} from "react-native";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import styles from "./styles";

import checkmark from "../../assets/images/checkmark.png";
import CustomButton from "../../components/button/CustomButton";
import { useUserInfoContext } from "../../context/UserInfoContextWarpper";
import formattedCost from "../../helper/formattedCost";
import { StackActions } from "@react-navigation/native";
import { useEffect } from "react";
const ReceiptScreen = ({ navigation, route }) => {
  const { setUserInfo, userInfo } = useUserInfoContext();

  const Rows = ({ leftText, rightText }) => {
    return (
      <View style={styles.inforow}>
        <Text style={styles.infotextleft}>{leftText}</Text>
        <Text style={styles.infotextright}>{rightText}</Text>
      </View>
    );
  };

  const total = userInfo?.cart?.reduce(
    (prev, item) => prev + item.price * item.quantity,
    0
  );
  const orderId = route.params?.orderId;
  const date = new Date();

  useEffect(() => {
    const backAction = () => {
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <>
      <ExpoStatusBar style="light" />
      <View style={GlobalStyles.backDrop}></View>
      <SafeAreaView style={GlobalStyles.container}>
        <ScrollView style={styles.scroll}>
          <View style={styles.container}>
            <View style={styles.imagecontainer}>
              <Image style={styles.image} source={checkmark} />
              <Text style={styles.heading}>Payment Successful</Text>
            </View>

            <View style={styles.section}>
              <Rows leftText={"OrderId:"} rightText={orderId} />

              <Rows leftText={"Date:"} rightText={date.toDateString()} />

              <View style={styles.innercontainer}>
                <Rows leftText={"Items:"} rightText={userInfo.cart.length} />
                {userInfo.cart.map((item) => (
                  <Rows
                    key={item.id}
                    leftText={item.productName}
                    rightText={item.quantity}
                  />
                ))}
              </View>
              <View style={styles.innercontainer}>
                <Rows leftText={"SubTotal:"} rightText={formattedCost(total)} />
                <Rows leftText={"Tax:"} rightText={"$0"} />
                <Rows leftText={"Total:"} rightText={formattedCost(total)} />
              </View>
            </View>
            <CustomButton
              text={"Home"}
              FUNC={() => {
                setUserInfo((prev) => ({ ...prev, cart: [] }));
                navigation.dispatch(StackActions.popToTop());
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ReceiptScreen;
