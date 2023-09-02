import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  heading: {
    fontSize: 14,
    fontFamily: "Inter-Bold",
  },

  section: {
    gap: 15,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#B3B3B3",
    borderRadius: 10,
    marginHorizontal: 15,
    paddingVertical: 10,
  },

  inforow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  infotextleft: {
    fontSize: 14,
    flex: 1,
    fontFamily: "Inter-Regular",
    maxWidth: "50%",
  },
  infotextright: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    maxWidth: "50%",
    textAlign: "right",
  },

  infotextright2conatiner: {
    minHeight: 30,
    minWidth: 50,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F47A00",
    borderRadius: 50,
  },
  infotextright2: {
    color: "white",
    fontSize: 12,
    fontFamily: "Inter-Bold",
  },
});
export default styles;
