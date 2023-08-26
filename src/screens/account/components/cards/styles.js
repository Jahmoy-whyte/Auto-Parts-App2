import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  optionscontainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#B3B3B3",
    minHeight: 80,
    paddingVertical: 15,
    marginHorizontal: 15,
  },

  imageandtextcontainer: {
    alignItems: "center",
    gap: 10,
    flexDirection: "row",
    flex: 1,
  },

  backimg: {
    borderRadius: 10,
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  textcontainer: {
    flex: 1,
  },
  image: {
    width: 25,
    height: 25,
  },
  title: {
    fontSize: 14,
    fontFamily: "Inter-Bold",
  },
  subtext: {
    color: "#B3B3B3",
    fontSize: 12,
    fontFamily: "Inter-Regular",
  },
});
export default styles;
