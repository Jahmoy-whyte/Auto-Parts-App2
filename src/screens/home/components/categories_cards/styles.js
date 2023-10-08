import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0954B6",

    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 150,
  },
  TextContainer: {
    marginTop: 10,
  },
  image: {
    width: 58,
    height: 58,
  },
  Title: {
    fontFamily: "Inter-Bold",
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  SubText: {
    fontFamily: "Inter-Regular",
    fontSize: 12,
    color: "white",
    textAlign: "center",
  },

  searchmodeltext: {
    flex: 1,
    fontFamily: "Inter-Regular",
    fontSize: 14,
  },

  optionscontainer: {
    marginHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    minHeight: 60,
    paddingVertical: 15,
    gap: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: "#B3B3B3",
  },
  optiontext: {
    flex: 1,
    fontSize: 14,
    fontFamily: "Inter-Regular",
  },
});
export default styles;
