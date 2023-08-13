import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";
const QuickCategories = ({ text, fill = "" }) => {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: fill }]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default QuickCategories;
