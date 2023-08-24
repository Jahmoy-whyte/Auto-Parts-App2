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
import AllNav from "./AllNav";

const App = () => {
  //  console.log(fgf);w

  return (
    <>
      <UserAuthContextWarpper>
        <UserInfoContextWarpper>
          <Test />
        </UserInfoContextWarpper>
      </UserAuthContextWarpper>
      <Toast config={toastConfig} />
    </>
  );
};

const Test = () => {
  const Stack = createNativeStackNavigator();
  const { isAuth } = useAuthContext();
  console.log("===============================");
  console.log(isAuth);
  const [fontsLoaded] = useFonts({
    "Inter-Bold": require("./src/assets/fonts/Inter-Bold.ttf"),
    "Inter-Regular": require("./src/assets/fonts/Inter-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <View></View>;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: "fade",
          headerShown: false,
          gestureEnabled: false,
        }}
      >
        {!isAuth ? (
          <Stack.Group>
            <Stack.Screen name="signup" component={SignUpScreen} />
            <Stack.Screen name="login" component={LoginScreen} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="home" component={BottomTabs} />
            <Stack.Screen name="search" component={SearchScreen} />
            <Stack.Screen name="product" component={ProductsScreen} />
            <Stack.Screen name="cart" component={CartScreen} />
            <Stack.Screen name="signup1" component={SignUpScreen} />
            <Stack.Screen name="login1" component={LoginScreen} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
