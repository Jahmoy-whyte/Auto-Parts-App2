import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import BottomTabs from "./src/screens/bottomTabs/BottomTabs";
import Home from "./src/screens/home/Home";
import SearchScreen from "./src/screens/search/SearchScreen";
import Toast from "react-native-toast-message";
import toastConfig from "./src/helper/toastConfig";

const Stack = createNativeStackNavigator();
const App = () => {
  const [fontsLoaded] = useFonts({
    "Inter-Bold": require("./src/assets/fonts/Inter-Bold.ttf"),
    "Inter-Regular": require("./src/assets/fonts/Inter-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <View></View>;
  }
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
          <Stack.Screen name="Home" component={BottomTabs} />
          <Stack.Screen name="search" component={SearchScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast config={toastConfig} />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
