import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headingcontainer: {
    minHeight: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0954B6",
  },
  heading: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Inter-Bold",
    color: "white",
  },

  accountcartcontainer: {
    backgroundColor: "#509CFF",
    minHeight: 120,
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    gap: 10,
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 6,
  },

  profile: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: 60,
    width: 60,
    borderRadius: 60,
  },
  profileletter: {
    color: "#509CFF",
    fontSize: 16,
    fontFamily: "Inter-Bold",
  },
  accountcarttextcontainer: {
    flex: 1,
  },
  titlewhite: {
    color: "white",
    fontSize: 16,
    fontFamily: "Inter-Bold",
  },
  subtextwhite: {
    color: "white",
    fontSize: 14,
    fontFamily: "Inter-Regular",
  },
});
export default styles;
