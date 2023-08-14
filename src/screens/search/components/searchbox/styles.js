import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    minHeight: 60,
    borderBottomWidth: 0.5,
    borderColor: "#B3B3B3",
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  searchiconandtext: {
    flex: 1,
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    flex: 1,
    fontSize: 12,
    fontFamily: "Inter-Regular",
  },

  optionscontainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    minHeight: 50,
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    borderColor: "#B3B3B3",
  },
  optiontext: {
    flex: 1,
    fontSize: 12,
    fontFamily: "Inter-Regular",
  },
});
export default styles;
