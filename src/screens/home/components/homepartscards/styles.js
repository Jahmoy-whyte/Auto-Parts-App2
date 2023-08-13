import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: 232.33,

    marginRight: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },

  imagecontainer: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#EBEBEB",
    alignItems: "center",
    justifyContent: "center",
    height: 152.86,
  },
  img: {
    width: 150,
    height: 150,
    objectFit: "contain",
  },
  textAndPriceContainer: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 14,
    fontFamily: "Inter-Bold",
  },
  subText: {
    fontSize: 12,
    fontFamily: "Inter-Regular",
    color: "#B3B3B3",
  },
  priceContainer: {
    backgroundColor: "#F47A00",
    borderRadius: 10,
  },
  priceText: {
    fontSize: 12,
    fontFamily: "Inter-Regular",
    color: "white",
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
});
export default styles;
