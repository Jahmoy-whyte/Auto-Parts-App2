import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TextInput,
  ScrollView,
  FlatList,
  Image,
  Pressable,
  Button,
  TouchableOpacity,
} from "react-native";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import BackButton from "../../components/backbutton/BackButton";
import useOrderDetails from "./useOrderDetails";
import styles from "./styles";
import formattedCost from "../../helper/formattedCost";
import Loading from "../../components/loading/Loading";
import CustomButton from "../../components/button/CustomButton";
const OrderDetails = () => {
  const [details] = useOrderDetails();
  const Rows = ({ leftText, rightText }) => {
    return (
      <View style={styles.inforow}>
        <Text style={styles.infotextleft}>{leftText}</Text>
        <Text style={styles.infotextright}>{rightText}</Text>
      </View>
    );
  };

  return (
    <>
      <ExpoStatusBar style="light" />
      <View style={GlobalStyles.backDrop}></View>
      <SafeAreaView style={GlobalStyles.container}>
        <BackButton text={"Details"} />
        {details.isLoading ? (
          <Loading />
        ) : (
          <ScrollView>
            <View style={styles.section}>
              <Text style={styles.heading}>Status:</Text>

              <View style={styles.inforow}>
                <Text style={styles.infotextleft}>Status:</Text>
                <View style={styles.infotextright2conatiner}>
                  <Text style={styles.infotextright2}>
                    {details.data.status != "" ? details.data.status : "Sent"}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.heading}>Details</Text>
              <Rows leftText={"Order-Id:"} rightText={"#" + details.data.id} />
              <Rows
                leftText={"Date:"}
                rightText={details.data?.date?.split("T")[0]}
              />
              <Rows leftText={"Deliver To:"} rightText={details.data.address} />
            </View>

            <View style={styles.section}>
              <Text style={styles.heading}>Items</Text>

              {details.data.items.map((item) => {
                const price = item.price * item.quantity;
                return (
                  <Rows
                    key={item.id}
                    leftText={`${item.productName} x(${item.quantity}):`}
                    rightText={formattedCost(item.price)}
                  />
                );
              })}
            </View>

            <View style={styles.section}>
              <Text style={styles.heading}>Total</Text>

              <Rows
                leftText={"Total:"}
                rightText={formattedCost(details.data.total)}
              />
            </View>
            <CustomButton
              text={"Track"}
              marginHorizontal={15}
              marginVertical={10}
              FUNC={() => alert("comming soon")}
            />
          </ScrollView>
        )}
      </SafeAreaView>
    </>
  );
};

export default OrderDetails;
