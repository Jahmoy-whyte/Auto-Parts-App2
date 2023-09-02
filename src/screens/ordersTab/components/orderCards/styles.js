import { StyleSheet } from "react-native";
// backgroundColor: "#509CFF",
const styles = StyleSheet.create({
  ordercontainer: {
    minHeight: 100,
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
    borderRadius: 6,
    borderBottomWidth: 0.5,
    borderColor: "#B3B3B3",
  },

  blue: {
    width: 5,
    backgroundColor: "#509CFF",
    height: "100%",
    borderRadius: 6,
  },

  textcontainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontFamily: "Inter-Bold",
  },
  text: {
    fontSize: 12,
    fontFamily: "Inter-Regular",
  },

  statuscontainer: {
    minHeight: 30,
    minWidth: 50,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F47A00",
    borderRadius: 50,
  },
  statustext: {
    color: "white",
    fontSize: 12,
    fontFamily: "Inter-Bold",
  },
});
export default styles;
