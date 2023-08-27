import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginBottom: 10,
    borderWidth: 0.5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 6,
  },

  textcontainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 14,
    fontFamily: "Inter-Bold",
  },
  subtext: {
    fontSize: 12,
    fontFamily: "Inter-Regular",
  },
});
export default styles;
