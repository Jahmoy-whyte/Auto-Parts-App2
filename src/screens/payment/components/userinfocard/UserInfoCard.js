import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "../../styles";
import { memo } from "react";
const UserInfoRow = ({ text, subtext, func, image }) => {
  return (
    <View style={styles.rowcontainer}>
      <View style={styles.rowtextcontainer}>
        <Text style={styles.rowtext1}>{text}</Text>
        {!subtext || subtext == "" ? null : (
          <Text style={styles.rowtext2}>{subtext}</Text>
        )}
      </View>

      {func ? (
        <TouchableOpacity onPress={func}>
          <Text style={styles.edittext}>Edit</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
export default memo(UserInfoRow);
