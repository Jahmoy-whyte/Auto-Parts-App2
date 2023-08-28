import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import BottomTabs from "./src/screens/bottomTabs/BottomTabs";
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
import LandingScreen from "./src/screens/landing/LandingScreen";
import GuestToUserSignUp from "./src/screens/guestToUserSignUp/GuestToUserSignUp";
import CheckOutScreen from "./src/screens/checkout/CheckOutScreen";
import AccountSettings from "./src/screens/accountSettings/AccountSettings";
import LocationLanding from "./src/screens/locationLanding/LocationLanding";
import SavedAddress from "./src/screens/savedAddress/SavedAddress";
import EnterLocation from "./src/screens/enterLocation/EnterLocation";
import NotificationScreen from "./src/screens/notification/NotificationScreen";
import PaymentMethod from "./src/screens/paymentMethod/PaymentMethod";
import PaymentScreen from "./src/screens/payment/PaymentScreen";
import ReceiptScreen from "./src/screens/receipt/ReceiptScreen";
import AccountTab from "./src/screens/account/AccountTab";
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
  // console.log("===============================");
  // console.log(isAuth);
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
            <Stack.Screen name="landing" component={LandingScreen} />
            <Stack.Screen name="signup" component={SignUpScreen} />
            <Stack.Screen name="login" component={LoginScreen} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="home" component={BottomTabs} />
            <Stack.Screen name="search" component={SearchScreen} />
            <Stack.Screen name="product" component={ProductsScreen} />
            <Stack.Screen name="cart" component={CartScreen} />
            <Stack.Screen name="checkout" component={CheckOutScreen} />
            <Stack.Screen name="accountsettings" component={AccountSettings} />
            <Stack.Screen name="locationlanding" component={LocationLanding} />
            <Stack.Screen name="enterlocation" component={EnterLocation} />
            <Stack.Screen name="savedaddress" component={SavedAddress} />
            <Stack.Screen name="notification" component={NotificationScreen} />
            <Stack.Screen name="payment" component={PaymentMethod} />
            <Stack.Screen name="paymentscreen" component={PaymentScreen} />

            <Stack.Screen name="receipt" component={ReceiptScreen} />

            <Stack.Screen
              name="guestToUserSignUp"
              component={GuestToUserSignUp}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
