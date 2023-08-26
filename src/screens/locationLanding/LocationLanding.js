import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import locationImg from "../../assets/images/locationbig1.png";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import BackButton from "../../components/backbutton/BackButton";

const LocationLanding = ({ navigation }) => {
  return (
    <>
      <ExpoStatusBar style="light" />
      <View style={GlobalStyles.backDrop}></View>
      <SafeAreaView style={GlobalStyles.container}>
        <BackButton text={"Location"} />

        <View style={styles.imageandtextcontainer}>
          <Text style={styles.subtext}>
            Add you loaction to help us delivery to you
          </Text>

          <View
            style={styles.btncontainer}
            onPress={() => navigation.navigate("enterlocation")}
          >
            <TouchableOpacity style={styles.btn1}>
              <MaterialIcons name="my-location" size={24} color="white" />

              <Text style={styles.btn1text}>Find Current Location</Text>
            </TouchableOpacity>

            <View style={styles.orcontainer}>
              <View style={styles.orlines}></View>
              <Text style={styles.ortext}>OR</Text>
              <View style={styles.orlines}></View>
            </View>
            <TouchableOpacity
              style={styles.btn2}
              onPress={() => navigation.navigate("enterlocation")}
            >
              <Ionicons name="search" size={24} color="black" />
              <Text style={styles.btn2text}>Search For Location</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default LocationLanding;
