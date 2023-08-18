import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "#0954B6",
  },
  topcontainer: {
    height: 250,
    backgroundColor: "#0954B6",
    position: "relative",
  },
  navcontainer: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 15,
    marginVertical: 10,
    zIndex: 1,
  },
  actionbtn: {
    backgroundColor: "white",
    height: 35,
    width: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  imagecontainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 250,
    position: "absolute",
  },
  image: {
    width: 180,
    height: 180,
  },
  infocontainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontFamily: "Inter-Bold",
  },
  subtext: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: "#B3B3B3",
  },

  quantitycontainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 25,
    marginBottom: 25,
  },
  quantity: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#ACACAC",
    height: 38,
    borderRadius: 38,
    width: 125,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  quantitytext: {
    color: "white",
    fontSize: 14,
    fontFamily: "Inter-Bold",
  },
  price: {
    color: "#F47A00",
    fontSize: 20,
    fontFamily: "Inter-Bold",
  },
  descriptioncontainer: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginVertical: 10,
  },
  descriptiontitle: {
    fontSize: 14,
    fontFamily: "Inter-Bold",
  },
  descriptiontext: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: "#B3B3B3",
  },
  cardcontainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "white",
    minHeight: 60,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#B3B3B3",
  },
  texttitle: {
    fontSize: 14,
    fontFamily: "Inter-Bold",
  },
  text: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
  },
  bottomcontainer: {
    backgroundColor: "#EBEBEB",
  },
});
export default styles;
