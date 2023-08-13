import { Text, TouchableOpacity, View } from "react-native";
import { ActivityIndicator } from "react-native";
import styles from "./styles";
const CustomButton = ({
  text,
  isLoading,
  FUNC,
  width,
  marginHorizontal = 0,
  marginVertical = 0,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        {
          width: width ? width : "auto",
          marginHorizontal: marginHorizontal,
          marginVertical: marginVertical,
        },
      ]}
      disabled={isLoading}
      onPress={() => FUNC()}
    >
      {isLoading ? (
        <ActivityIndicator color={"white"} />
      ) : (
        <Text style={styles.btntext}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
