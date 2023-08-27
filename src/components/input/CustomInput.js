import { View, TextInput, Text } from "react-native";
import styles from "./styles";
const CustomInput = ({
  placeholder,
  onChangeHandler,
  children,
  label,
  name,
  width,
}) => {
  return (
    <View style={styles.inputandlabelcontainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputcontainer, width ? { width: width } : null]}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onChangeText={(value) => onChangeHandler(value, name)}
        />
        {children}
      </View>
    </View>
  );
};

export default CustomInput;
