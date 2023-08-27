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

  optioncontainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  option: {
    backgroundColor: "#F47A00",
    borderRadius: 6,
    flexDirection: "row",
    padding: 5,
    gap: 5,
    alignItems: "center",
  },
  optiontext: {
    color: "white",
    fontSize: 12,
    fontFamily: "Inter-Regular",
  },
});
export default styles;
