import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TextInput,
  ScrollView,
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import BackButton from "../../components/backbutton/BackButton";
import styles from "./styles";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import CustomButton from "../../components/button/CustomButton";
import {
  MaterialCommunityIcons,
  AntDesign,
  Feather,
  Ionicons,
} from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import useSignUp from "./useSignUp";
import { ACTIONS } from "./helper/reducerActions";
import * as Linking from "expo-linking";
import { PRIVACY_POLICY_URL } from "../../helper/privacy-policy-url";
const SignUpScreen = ({ navigation }) => {
  const [state, dispatch, submit, nav] = useSignUp();

  return (
    <>
      <ExpoStatusBar style="light" />
      <View style={GlobalStyles.backDrop}></View>

      <SafeAreaView style={GlobalStyles.container}>
        <BackButton isLoading={state.isLoading} />

        <ScrollView>
          <View style={styles.topcontainer}>
            <Text style={styles.title}>Sign Up</Text>
            <Text style={styles.subtitle}>Please Sign Up To Continue</Text>
          </View>

          <View style={styles.textboxcontainer}>
            <View style={styles.inputandlabelcontainer}>
              <Text style={styles.label}>Email:</Text>
              <View style={styles.inputcontainer}>
                <TextInput
                  value={state.email}
                  editable={!state.isLoading}
                  style={styles.input}
                  placeholder="Please Enter Your Email"
                  onChangeText={(value) =>
                    dispatch({
                      type: ACTIONS.SET_INPUT,
                      payload: { name: "email", value: value },
                    })
                  }
                />
              </View>
            </View>
            <View style={styles.inputandlabelcontainer}>
              <Text style={styles.label}>Password:</Text>
              <View style={styles.inputcontainer}>
                <TextInput
                  value={state.password}
                  editable={!state.isLoading}
                  style={styles.input}
                  placeholder="Please Enter Your Password"
                  onChangeText={(value) =>
                    dispatch({
                      type: ACTIONS.SET_INPUT,
                      payload: { name: "password", value: value },
                    })
                  }
                  secureTextEntry={!state.showPassword}
                />
                <TouchableOpacity
                  onPress={() => dispatch({ type: ACTIONS.SHOW_PASSWORD })}
                >
                  <Ionicons
                    name={
                      state.showPassword ? "eye-outline" : "eye-off-outline"
                    }
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.checkboxcontainer}>
              <Checkbox
                style={styles.checkbox}
                value={state.checked}
                onValueChange={() => dispatch({ type: ACTIONS.SET_CHECKED })}
                color={state.checked ? "#F47A00" : null}
              />
              <View style={styles.checkboxtextcontainer}>
                <Text style={styles.checkboxtext}>
                  I Have Read And Agreed Our
                </Text>
                <TouchableOpacity>
                  <Text
                    style={styles.checkboxtextbold}
                    onPress={() => Linking.openURL(PRIVACY_POLICY_URL)}
                  >
                    {" "}
                    Privacy Policy
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <CustomButton
              text={"Sign Up"}
              FUNC={submit}
              isLoading={state.isLoading}
            />
          </View>
        </ScrollView>
        <View style={styles.bottomtextcontainer}>
          <Text style={styles.bottomtext}> Already Have An Account?</Text>

          <TouchableOpacity onPress={() => nav.navigate("login")}>
            <Text style={styles.bottomtextbold}> Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SignUpScreen;
/*
 <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                resizeMode="center"
                source={require("../../assets/ts1.png")}
                style={{
                  width: 150,
                  height: 150,
                  flex: 1,
                }}
              />
            </View>
*/
