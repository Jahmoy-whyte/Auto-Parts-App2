import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#0954B6",
  },

  btn: {
    backgroundColor: "white",
    borderRadius: 30,
    minHeight: 30,
    minWidth: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  btntext: {
    color: "white",
    fontSize: 20,
    fontFamily: "Inter-Bold",
  },
  btnsubtext: {
    color: "white",
    fontSize: 12,
    fontFamily: "Inter-Regular",
    lineHeight: 15,
  },
  textcontainer: {
    flex: 1,
  },
});
export default styles;
