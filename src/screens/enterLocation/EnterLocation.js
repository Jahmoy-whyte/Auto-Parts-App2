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
  Button,
  TouchableOpacity,
} from "react-native";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import BackButton from "../../components/backbutton/BackButton";
import styles from "./styles";
import CustomButton from "../../components/button/CustomButton";
const EnterLocation = () => {
  return (
    <>
      <ExpoStatusBar style="light" />
      <View style={GlobalStyles.backDrop}></View>
      <SafeAreaView style={GlobalStyles.container}>
        <BackButton text={"Address"} />
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.inputandlabelcontainer}>
              <Text style={styles.label}>
                Address <Text style={styles.highlight}> (required)</Text>:
              </Text>
              <TextInput
                style={styles.inputcontainer}
                placeholder="Please Enter Your Address"
              />
            </View>

            <View style={styles.inputandlabelcontainer}>
              <Text style={styles.label}>
                Street <Text style={styles.highlight}> (required)</Text>:
              </Text>
              <TextInput
                style={styles.inputcontainer}
                placeholder="Please Enter Your Street"
              />
            </View>

            <View style={styles.inputandlabelcontainer}>
              <Text style={styles.label}>
                Additional Info
                <Text style={styles.highlight}> (optional)</Text>:
              </Text>
              <TextInput
                style={styles.inputcontainer}
                placeholder="Enter Additional Info"
              />
            </View>

            <CustomButton text={"Save"} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default EnterLocation;
