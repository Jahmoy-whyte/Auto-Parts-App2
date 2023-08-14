import { Text, TouchableOpacity, View } from "react-native";
import { ActivityIndicator } from "react-native";
import styles from "./styles";
const Loading = ({ text }) => {
  return (
    <View style={styles.loadingview}>
      <ActivityIndicator color={"#0954B6"} size={"large"} />
      {text ? <Text style={styles.loadingtext}>{text}</Text> : null}
    </View>
  );
};

export default Loading;
