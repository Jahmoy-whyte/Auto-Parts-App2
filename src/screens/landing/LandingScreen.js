import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import styles from "./styles";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import useLanding from "./useLanding";

const LandingScreen = () => {
  console.log("======= render landing");

  const [isLoading, nav, continueAsGuest] = useLanding();
  return (
    <>
      <ExpoStatusBar style="light" />
      <View style={GlobalStyles.backDrop}></View>

      <SafeAreaView style={GlobalStyles.container}>
        <ScrollView>
          <View style={styles.topcontainer}>
            <Text style={styles.title}>Welcome To Auto Parts</Text>
            <Text style={styles.subtitle}>
              One Stop Shop For All Your Car Needs Now Offering Delivery
            </Text>
          </View>

          <View style={styles.textboxcontainer}>
            <TouchableOpacity
              style={styles.btnsignup}
              onPress={() => nav.navigate("signup")}
            >
              <Text style={styles.btnsignuptext}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnlogin}
              onPress={() => nav.navigate("login")}
            >
              <Text style={styles.btnlogintext}>Login</Text>
            </TouchableOpacity>

            <View style={styles.orcontainer}>
              <View style={styles.orlines}></View>
              <Text style={styles.ortext}>OR</Text>
              <View style={styles.orlines}></View>
            </View>

            <TouchableOpacity style={styles.btn} onPress={continueAsGuest}>
              <Text style={styles.btntext}>
                {isLoading ? "Please Wait" : "Continue As Guest"}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.bottomtextcontainer}>
          <Text style={styles.bottomtext}>
            Click Here To Read About Our
            <Text style={styles.bottomtextbold}> Privacy Policy</Text>
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default LandingScreen;
