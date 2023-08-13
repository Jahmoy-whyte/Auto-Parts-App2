import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import BottomTabs from "./src/screens/bottomTabs/BottomTabs";
import Home from "./src/screens/home/Home";
import Search from "./src/screens/search/Search";

const Test = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to startw working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

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
          <Stack.Screen name="search" component={Search} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
