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
import { MaterialIcons } from "@expo/vector-icons";
import delivery from "../../assets/images/delivery.png";
import pickup from "../../assets/images/pickup.png";
import styles from "./styles";
const CheckOutScreen = () => {
  const Options = ({ img, title, subtext }) => {
    return (
      <TouchableOpacity style={styles.optionscontainer}>
        <View style={styles.imageandtextcontainer}>
          <View style={styles.backimg}>
            <Image style={styles.image} source={img} />
          </View>

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
        <BackButton text={"CheckOut"} subText={`items`} />
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.heading}>Select An Option</Text>

            <Options
              img={delivery}
              title={"Delivery"}
              subtext={"Have you parts delivery straight to your door step"}
            />
            <Options
              img={pickup}
              title={"Pick Up"}
              subtext={"Head to our nearest location an pick up your parts."}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default CheckOutScreen;
