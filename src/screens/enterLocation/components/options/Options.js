import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { memo } from "react";
const Options = ({ children, text, data, func }) => {
  return (
    <TouchableOpacity
      style={[
        styles.option,
        data.placeType == text ? { backgroundColor: "#0954B6" } : null,
      ]}
      onPress={() => func(text)}
    >
      {children}
      <Text style={styles.optiontext}>{text}</Text>
    </TouchableOpacity>
  );
};

export default memo(Options);
