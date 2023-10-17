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

  container: {
    flex: 1,
  },

  statuscontainer: {
    minHeight: 30,
    minWidth: 50,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F47A00",
    borderRadius: 50,
  },
  statustext: {
    color: "white",
    fontSize: 12,
    fontFamily: "Inter-Bold",
  },

  noOrdersText: {
    fontSize: 12,
    fontFamily: "Inter-Bold",
  },
  noOrders: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default styles;
