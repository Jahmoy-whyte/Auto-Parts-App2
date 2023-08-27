import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
const BackButton = ({
  text,
  isLoading,
  subText,
  useCustomFunc,
  custumFunc,
}) => {
  const nav = useNavigation();
  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        disabled={isLoading}
        onPress={() => {
          useCustomFunc ? custumFunc() : nav.goBack();
        }}
        style={styles.btn}
      >
        <MaterialIcons name="keyboard-arrow-left" size={24} color="#0954B6" />
      </TouchableOpacity>

      <View style={styles.textcontainer}>
        <Text style={styles.btntext}>{text}</Text>
        {subText ? <Text style={styles.btnsubtext}>{subText}</Text> : null}
      </View>
    </View>
  );
};

export default BackButton;
