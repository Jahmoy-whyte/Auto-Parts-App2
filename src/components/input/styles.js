import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textboxcontainer: {
    marginHorizontal: 15,
    marginTop: 15,
    gap: 10,
  },
  inputandlabelcontainer: {},
  label: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
  },

  inputcontainer: {
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: "#B3B3B3",
    minHeight: 50,
    fontSize: 14,
    fontFamily: "Inter-Regular",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  input: {
    flex: 1,
  },
});
export default styles;
