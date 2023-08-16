import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, View, Text } from "react-native";
export const CustomErrorToast = ({ text, subtext }) => {
  return (
    <View style={styles.container}>
      <AntDesign name="closecircleo" size={24} color="black" />
      <View style={styles.textcontainer}>
        <Text style={styles.text1}>{text}</Text>
        {subtext ? <Text style={styles.text2}>{subtext}</Text> : null}
      </View>
    </View>
  );
};

export const CustomWarnToast = ({ text, subtext }) => {
  return (
    <View style={[styles.container, { backgroundColor: "#F47A00" }]}>
      <AntDesign name="closecircleo" size={24} color="black" />
      <View style={styles.textcontainer}>
        <Text style={styles.text1}>{text}</Text>
        {subtext ? <Text style={styles.text2}>{subtext}</Text> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 60,
    width: "95%",
    backgroundColor: "tomato",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  textcontainer: {
    flex: 1,
  },
  text1: {
    fontFamily: "Inter-Bold",
    fontSize: 14,
  },
  text2: {
    fontFamily: "Inter-Regular",
    fontSize: 12,
  },
});
