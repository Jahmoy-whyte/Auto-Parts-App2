import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  subHeadingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginVertical: 15,
    alignItems: "center",
  },

  subHeadingIconAndTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  subHeadingIcon: {
    width: 30,
    height: 30,
  },

  subHeadingTitle: {
    fontFamily: "Inter-Bold",
    fontSize: 16,
  },
  subHeadingSubText: {
    fontFamily: "Inter-Regular",
    fontSize: 12,
    color: "#7A7A7A",
  },
  showAllText: {
    fontFamily: "Inter-Bold",
    fontSize: 12,
    color: "#F47A00",
  },
});
export default styles;
