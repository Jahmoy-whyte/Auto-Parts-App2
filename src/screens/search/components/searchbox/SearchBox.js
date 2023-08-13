import { View, Text } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";
const SearchBox = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchiconandtext}>
        <AntDesign name="search1" size={20} color="black" />
        <Text style={styles.text}>{text}</Text>
      </View>
      <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
    </View>
  );
};

export default SearchBox;
