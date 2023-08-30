import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../styles";
import { memo } from "react";
const Heading = ({ title, subtext, editText, func }) => {
  console.log("ddddddddddddd");
  return (
    <View style={styles.optionscontainer}>
      <View style={styles.imageandtextcontainer}>
        <View style={styles.backimg}></View>

        <View style={styles.textcontainer}>
          <Text style={styles.title}>{title}</Text>
          {subtext ? <Text style={styles.subtext}>{subtext}</Text> : null}
        </View>
      </View>
      <TouchableOpacity style={styles.backarrow} onPress={func}>
        <Text style={styles.edittext}>{editText ? editText : "Edit"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(Heading);
