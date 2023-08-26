import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 10,
    gap: 15,
  },

  btn2text: {
    fontSize: 14,
    fontFamily: "Inter-Bold",
  },

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
  highlight: {
    color: "#0954B6",
    fontSize: 14,
    fontFamily: "Inter-Regular",
  },
});
export default styles;
