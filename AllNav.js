import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import BottomTabs from "./src/screens/bottomTabs/BottomTabs";
import Home from "./src/screens/home/Home";
import CartScreen from "./src/screens/cart/CartScreen";
import SearchScreen from "./src/screens/search/SearchScreen";
import Toast from "react-native-toast-message";
import toastConfig from "./src/helper/toastConfig";
import ProductsScreen from "./src/screens/products/ProductsScreen";
import UserAuthContextWarpper from "./src/context/UserAuthContextWarpper";

import UserInfoContextWarpper from "./src/context/UserInfoContextWarpper";
import SignUpScreen from "./src/screens/signup/SignUpScreen";
import LoginScreen from "./src/screens/login/LoginScreen";
import { useAuthContext } from "./src/context/UserAuthContextWarpper";
const Stack = createNativeStackNavigator();
const AllNav = () => {
  const { accessToken } = useAuthContext();
  console.log("===============================");
  console.log(accessToken);

  const Test = () => {
    return (
      <View>
        <Text>hi there</Text>
      </View>
    );
  };
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            animation: "fade",
            headerShown: false,
            gestureEnabled: false,
          }}
        >
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="home" component={BottomTabs} />
          <Stack.Screen name="search" component={SearchScreen} />
          <Stack.Screen name="product" component={ProductsScreen} />
          <Stack.Screen name="cart" component={CartScreen} />
          <Stack.Screen name="signup" component={SignUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default AllNav;
