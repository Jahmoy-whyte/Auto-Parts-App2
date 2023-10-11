import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import BackButton from "../../components/backbutton/BackButton";
import {
  MaterialIcons,
  Ionicons,
  AntDesign,
  Feather,
} from "@expo/vector-icons";
import delivery from "../../assets/images/delivery.png";
import pickup from "../../assets/images/pickup.png";
import styles from "./styles";
import * as Linking from "expo-linking";
import Loading from "../../components/loading/Loading";
import usePushNotifications from "../../hooks/usePushNotifications";
const CheckOutScreen = ({ navigation }) => {
  const { expoPushTokenData, retryTokenData } = usePushNotifications();

  if (expoPushTokenData.isLoading)
    return (
      <>
        <View style={GlobalStyles.backDrop}></View>

        <SafeAreaView style={GlobalStyles.container}>
          <BackButton text={"CheckOut"} />
          <Loading />
        </SafeAreaView>
      </>
    );

  if (expoPushTokenData.error)
    return (
      <>
        <View style={GlobalStyles.backDrop}></View>
        <SafeAreaView style={GlobalStyles.container}>
          <BackButton text={"CheckOut"} />
          <View style={styles.permissionContainer}>
            <View style={[styles.bellbackground, { backgroundColor: "red" }]}>
              <AntDesign name="close" size={40} color="white" />
            </View>

            <Text style={styles.permissionText}>
              {expoPushTokenData.message}
            </Text>
            <Text style={styles.permissionRetry} onPress={retryTokenData}>
              Retry
            </Text>
          </View>
        </SafeAreaView>
      </>
    );

  if (!expoPushTokenData.isPermitted)
    return (
      <>
        <View style={GlobalStyles.backDrop}></View>
        <SafeAreaView style={GlobalStyles.container}>
          <BackButton text={"CheckOut"} />
          <View style={styles.permissionContainer}>
            <View style={styles.bellbackground}>
              <Feather name="bell" size={40} color="white" />
            </View>

            <Text style={styles.permissionText}>
              {expoPushTokenData.message}
            </Text>

            <Text
              style={styles.opensettings}
              onPress={() => Linking.openSettings()}
            >
              OpenSettings
            </Text>
            <TouchableOpacity style={styles.retrybtn} onPress={retryTokenData}>
              <Text style={styles.permissionRetry}>Retry</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </>
    );

  const Options = ({ children, title, subtext }) => {
    return (
      <TouchableOpacity
        style={styles.optionscontainer}
        onPress={() => navigation.navigate("paymentscreen")}
      >
        <View style={styles.imageandtextcontainer}>
          <View style={styles.backimg}>{children}</View>

          <View style={styles.textcontainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtext}>{subtext}</Text>
          </View>
        </View>
        <View style={styles.backarrow}>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <ExpoStatusBar style="light" />
      <View style={GlobalStyles.backDrop}></View>
      <SafeAreaView style={GlobalStyles.container}>
        <BackButton text={"CheckOut"} subText={`Select An Option`} />
        <ScrollView>
          <View style={styles.container}>
            <Options
              title={"Delivery"}
              subtext={"Have you parts delivery straight to your door step"}
            >
              <AntDesign name="car" size={24} color="white" />
            </Options>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

/*
     <Options
            
              title={"Pick Up"}
              subtext={"Head to our nearest location an pick up your parts."}
            >
              <Ionicons name="walk-sharp" size={24} color="white" />
            </Options>

*/

export default CheckOutScreen;
