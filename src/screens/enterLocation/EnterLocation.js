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
import useEnterLocation from "./useEnterLocation";
import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";

import Options from "./components/options/Options";
const EnterLocation = () => {
  const [
    data,
    address,
    addressIsDisabled,
    onSave,
    onChangeHandler,
    selectPlaceType,
  ] = useEnterLocation();

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
                Address <Text style={styles.highlight}>(required)</Text>:
              </Text>
              <TextInput
                editable={addressIsDisabled ? false : !data.isLoading}
                value={data.address}
                style={styles.inputcontainer}
                placeholder="Please Enter Your Address"
                onChangeText={(value) => onChangeHandler("address", value)}
              />
            </View>

            <View style={styles.inputandlabelcontainer}>
              <Text style={styles.label}>
                Street <Text style={styles.highlight}>(required)</Text>:
              </Text>
              <TextInput
                editable={!data.isLoading}
                style={styles.inputcontainer}
                placeholder="Please Enter Your Street"
                value={data.street}
                onChangeText={(value) => onChangeHandler("street", value)}
              />
            </View>

            <View style={styles.inputandlabelcontainer}>
              <Text style={styles.label}>
                Additional Info
                <Text style={styles.highlight}>(optional)</Text>:
              </Text>
              <TextInput
                editable={!data.isLoading}
                style={styles.inputcontainer}
                placeholder="Enter Additional Info"
                value={data.additionalInfo}
                onChangeText={(value) =>
                  onChangeHandler("additionalInfo", value)
                }
              />
            </View>

            <View style={styles.optioncontainer}>
              <Options text={"Home"} data={data} func={selectPlaceType}>
                <Ionicons name="ios-home-outline" size={20} color="white" />
              </Options>
              <Options text={"Work"} data={data} func={selectPlaceType}>
                <MaterialIcons name="work-outline" size={20} color="white" />
              </Options>

              <Options text={"Others"} data={data} func={selectPlaceType}>
                <Entypo name="dot-single" size={20} color="white" />
              </Options>
            </View>

            <CustomButton
              text={"Save"}
              FUNC={onSave}
              isLoading={data.isLoading}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

//<MaterialIcons name="work-outline" size={24} color="black" />

export default EnterLocation;
