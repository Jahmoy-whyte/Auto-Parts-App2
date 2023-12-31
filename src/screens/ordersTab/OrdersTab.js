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
import styles from "./styles";
import OrderCards from "./components/orderCards/OrderCards";
import useOrders from "./useOrders";
import Loading from "../../components/loading/Loading";
import { useNavigation } from "@react-navigation/native";
import { useUserInfoContext } from "../../context/UserInfoContextWarpper";
import SignupCard from "../../components/signupCard/SignupCard";
import Tabs from "./components/tabs/Tabs";
const OrdersTab = () => {
  const [orders, selectOrderStatus] = useOrders();

  const nav = useNavigation();
  const { userInfo } = useUserInfoContext();
  console.log("orders ===================================");
  // <Tabs onPress={selectOrderStatus} selected={orders.selected} />
  return (
    <>
      <ExpoStatusBar style="light" />
      <View style={GlobalStyles.backDrop}></View>
      <SafeAreaView style={GlobalStyles.container}>
        {userInfo.userStatus != "user" ? (
          <SignupCard />
        ) : (
          <>
            <View style={styles.headingcontainer}>
              <Text style={styles.heading}>My Orders</Text>
            </View>

            <Tabs onPress={selectOrderStatus} selected={orders.selected} />
            {orders.isLoading ? (
              <Loading />
            ) : (
              <View style={styles.container}>
                {orders.data.length < 1 ? (
                  <View style={styles.noOrders}>
                    <Text style={styles.noOrdersText}>No Orders Found</Text>
                  </View>
                ) : (
                  <FlatList
                    data={
                      orders.selected == "all"
                        ? orders.data
                        : orders?.data.filter(
                            (data1) => data1.status == orders.selected
                          )
                    }
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                      <OrderCards
                        date={item.date}
                        orderId={item.id}
                        nav={nav}
                        status={item.status}
                        total={item.total}
                      />
                    )}
                  />
                )}
              </View>
            )}
          </>
        )}
      </SafeAreaView>
    </>
  );
};

export default OrdersTab;
/**
 

  <ScrollView horizontal>
              <View style={styles.statuscontainer}>
                <Text style={styles.statustext}>Current Orders</Text>
              </View>

              <View style={styles.statuscontainer}>
                <Text style={styles.statustext}>History</Text>
              </View>
            </ScrollView>
 */
