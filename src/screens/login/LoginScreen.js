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
import useLogin from "./useLogin";
import { Ionicons } from "@expo/vector-icons";
import { ACTIONS } from "./helper/reducerActions";
const LoginScreen = () => {
  const [state, dispatch, submit, nav] = useLogin();
  return (
    <>
      <ExpoStatusBar style="light" />
      <View style={GlobalStyles.backDrop}></View>

      <SafeAreaView style={GlobalStyles.container}>
        <BackButton isLoading={state.isLoading} />

        <ScrollView>
          <View style={styles.topcontainer}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.subtitle}>Please Login To Continue</Text>
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

            <CustomButton
              marginVertical={10}
              text={"Login"}
              FUNC={submit}
              isLoading={state.isLoading}
            />
          </View>
        </ScrollView>
        <View style={styles.bottomtextcontainer}>
          <Text style={styles.bottomtext}> Dont Have An Account?</Text>
          <TouchableOpacity onPress={() => nav.navigate("signup")}>
            <Text style={styles.bottomtextbold}> SignUp</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default LoginScreen;
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
