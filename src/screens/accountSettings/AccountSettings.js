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
import styles from "./styles";
import CustomButton from "../../components/button/CustomButton";
import BackButton from "../../components/backbutton/BackButton";
import { AntDesign } from "@expo/vector-icons";
import useAccountSettings from "./useAccountSettings";
const AccountSettings = () => {
  const [isLoading, textBoxData, updateInfo, setTextboxText] =
    useAccountSettings();
  return (
    <>
      <ExpoStatusBar style="light" />
      <View style={GlobalStyles.backDrop}></View>
      <SafeAreaView style={GlobalStyles.container}>
        <BackButton text={"Account"} />
        <ScrollView>
          <View style={styles.textboxcontainer}>
            <View style={styles.inputandlabelcontainer}>
              <Text style={styles.label}>First Name:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Your First Name"
                value={textBoxData.firstName}
                onChangeText={(value) => setTextboxText("firstName", value)}
              />
            </View>

            <View style={styles.inputandlabelcontainer}>
              <Text style={styles.label}>Last Name:</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Your Last Name"
                value={textBoxData.lastName}
                onChangeText={(value) => setTextboxText("lastName", value)}
              />
            </View>

            <View style={styles.inputandlabelcontainer}>
              <Text style={styles.label}>Phone Number:</Text>
              <TextInput
                keyboardType="number-pad"
                style={styles.input}
                placeholder="Enter Your Phone Number"
                value={textBoxData.phone}
                onChangeText={(value) => setTextboxText("phone", value)}
              />
            </View>

            <View style={styles.inputandlabelcontainer}>
              <Text style={styles.label}>Email:</Text>
              <View style={styles.input}>
                <TextInput
                  style={styles.input1}
                  editable={false}
                  value={textBoxData.email}
                />
                <AntDesign name="warning" size={24} color="black" />
              </View>
            </View>

            <CustomButton
              text={"Save"}
              FUNC={updateInfo}
              isLoading={isLoading}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default AccountSettings;
