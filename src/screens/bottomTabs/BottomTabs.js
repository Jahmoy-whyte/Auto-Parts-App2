import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import Home from "../home/Home";
import AccountTab from "../account/AccountTab";
import { View } from "react-native";
import OrdersTab from "../ordersTab/OrdersTab";
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#0954B6",
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "white",
            height: 50,
            paddingBottom: 5,
          },
        }}
      >
        <Tab.Screen
          name="Feed"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Orders"
          component={OrdersTab}
          options={{
            tabBarLabel: "Orders",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="user" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Account"
          component={AccountTab}
          options={{
            tabBarLabel: "Account",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="user" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomTabs;
