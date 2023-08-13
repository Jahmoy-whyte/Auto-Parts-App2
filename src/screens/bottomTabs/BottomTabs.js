import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import Home from "../home/Home";
import { View } from "react-native";
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
          name="Notifications"
          component={Home}
          options={{
            tabBarLabel: "Updates",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={size} color={color} />
            ),
            tabBarBadge: 3,
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomTabs;
