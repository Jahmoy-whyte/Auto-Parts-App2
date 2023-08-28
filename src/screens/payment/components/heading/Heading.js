import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../styles";

const Heading = ({ children, title, subtext, func, navigation }) => {
  console.log("ddddddddddddd");
  return (
    <View
      style={styles.optionscontainer}
      onPress={() => navigation.navigate("paymentscreen")}
    >
      <View style={styles.imageandtextcontainer}>
        <View style={styles.backimg}>{children}</View>

        <View style={styles.textcontainer}>
          <Text style={styles.title}>{title}</Text>
          {subtext ? <Text style={styles.subtext}>{subtext}</Text> : null}
        </View>
      </View>
      <TouchableOpacity style={styles.backarrow} onPress={func}>
        <Text style={styles.edittext}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Heading;
