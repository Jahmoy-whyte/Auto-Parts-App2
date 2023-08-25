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
import useGuestToUserSignUp from "./useGuestToUserSignUp";
import { ACTIONS } from "./helper/reducerActions";

const GuestToUserSignUp = ({ navigation }) => {
  const [state, dispatch, submit, nav] = useGuestToUserSignUp();

  console.log("======= render signup");
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
                  <Text style={styles.checkboxtextbold}> Privacy Policy</Text>
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
      </SafeAreaView>
    </>
  );
};

export default GuestToUserSignUp;
