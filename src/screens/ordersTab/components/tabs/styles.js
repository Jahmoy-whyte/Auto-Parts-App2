import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  constainer: {
    minHeight: 45,
    flexDirection: "row",
    backgroundColor: "#ededed",
    borderRadius: 20,
    marginHorizontal: 10,
    marginTop: 10,
    paddingHorizontal: 5,
    paddingVertical: 3,
  },

  tab: {
    minWidth: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  selected: {
    minWidth: 50,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  tabText: {
    paddingHorizontal: 10,
    textAlign: "center",
    fontSize: 12,
    fontFamily: "Inter-Regular",
  },

  selectedText: {
    paddingHorizontal: 10,
    textAlign: "center",
    fontSize: 12,
    fontFamily: "Inter-Bold",
  },
});
export default styles;
