import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  constainer: {
    minHeight: 40,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "gray",
    borderRadius: 6,
    marginHorizontal: 10,
    marginTop: 10,
    paddingVertical: 3,
  },

  tab: {
    flex: 1,
    marginHorizontal: 2,
  },

  tabText: {
    textAlign: "center",
    fontSize: 12,
    fontFamily: "Inter-Bold",
    color: "white",
  },

  selected: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: 10,
    borderRadius: 6,
    marginHorizontal: 2,
  },
  selectedText: {
    textAlign: "center",
    fontSize: 12,
    fontFamily: "Inter-Bold",
  },
});
export default styles;
