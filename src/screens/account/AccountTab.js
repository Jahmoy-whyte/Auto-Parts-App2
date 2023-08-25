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
import { MaterialIcons } from "@expo/vector-icons";
const AccountTab = () => {
  const Cards = ({ title, subtext, image }) => {
    return (
      <TouchableOpacity style={styles}>
        <View style={styles}>
          <View style={styles}>
            <Image style={styles} source={image} />
          </View>
          <View style={styles}>
            <Text>{title}</Text>
            <Text>{subtext}</Text>
          </View>
        </View>

        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </TouchableOpacity>
    );
  };
  return (
    <>
      <ExpoStatusBar style="light" />
      <View style={GlobalStyles.backDrop}></View>
      <SafeAreaView style={GlobalStyles.container}>
        <ScrollView>
          <View>
            <Text>Account</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default AccountTab;
