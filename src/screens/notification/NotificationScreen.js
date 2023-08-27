import { View, Text, SafeAreaView } from "react-native";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import BackButton from "../../components/backbutton/BackButton";

const NotificationScreen = () => {
  return (
    <>
      <ExpoStatusBar style="light" />
      <View style={GlobalStyles.backDrop}></View>

      <SafeAreaView style={GlobalStyles.container}>
        <BackButton text={"Notifications"} />
      </SafeAreaView>
    </>
  );
};

export default NotificationScreen;
