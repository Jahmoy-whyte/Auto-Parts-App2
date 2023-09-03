import { StyleSheet } from "react-native";
///    backgroundColor: "rgba(0, 0, 0, 0.17)",
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#B3B3B3",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 25,
    justifyContent: "space-between",
    gap: 10,
  },

  imagecontainer: {
    width: 80,
    height: 80,
    backgroundColor: "#EBEBEB",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 60,
    height: 60,
    objectFit: "contain",
  },

  title: {
    fontFamily: "Inter-Bold",
    fontSize: 14,
  },
  price: {
    fontFamily: "Inter-Regular",
    fontSize: 14,
  },
  pricetext: {
    fontFamily: "Inter-Bold",
    fontSize: 14,
  },
  description: {
    fontFamily: "Inter-Regular",
    fontSize: 12,
    color: "#B3B3B3",
  },
  textview: {
    gap: 2,
    flex: 1,
  },
});
export default styles;
