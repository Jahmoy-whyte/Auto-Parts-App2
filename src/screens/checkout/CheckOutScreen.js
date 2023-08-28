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
import { MaterialIcons, Ionicons, AntDesign } from "@expo/vector-icons";
import delivery from "../../assets/images/delivery.png";
import pickup from "../../assets/images/pickup.png";
import styles from "./styles";
const CheckOutScreen = ({ navigation }) => {
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
            <Options
              title={"Pick Up"}
              subtext={"Head to our nearest location an pick up your parts."}
            >
              <Ionicons name="walk-sharp" size={24} color="white" />
            </Options>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default CheckOutScreen;
