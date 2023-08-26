import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 10,
  },

  topcontainer: {
    minHeight: 45,
    borderRadius: 6,

    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },

  addbtn: {
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
  },

  addbtntext: {
    color: "#F47A00",
    fontSize: 14,
    fontFamily: "Inter-Bold",
  },

  title: {
    fontSize: 14,
    fontFamily: "Inter-Bold",
  },
});
export default styles;
