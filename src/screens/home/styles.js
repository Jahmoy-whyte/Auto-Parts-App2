import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headingView: {
    flexDirection: "column",
    backgroundColor: "#0954B6",
    paddingHorizontal: 15,

    paddingVertical: 15,
  },

  menuTitleAndCart: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  menuAndTitle: {
    flexDirection: "row",
    alignItems: "center",

    flex: 1,
  },
  textBoxView: {
    minHeight: 50,
    borderRadius: 40,
    borderWidth: 0.5,
    borderColor: "white",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 15,
    marginTop: 10,

    backgroundColor: "#0954B6",
  },
  textBoxText: {
    flex: 1,
    color: "white",
    fontSize: 12,
    fontFamily: "Inter-Regular",
  },
  quickCategoriesContainer: {
    backgroundColor: "white",
    marginVertical: 10,
    marginLeft: 15,
  },
  flatlist: {
    backgroundColor: "white",
    marginLeft: 15,
  },
  CategoriesContainer: {
    marginTop: 10,
    flexDirection: "row",
    marginHorizontal: 15,
    justifyContent: "space-between",
  },

  lcontainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  liconcontainer: {
    paddingRight: 5,
  },
  ltextcontainter: {
    flex: 1,
  },
  ltxttitle: {
    color: "white",
    fontSize: 12,
    fontFamily: "Inter-Bold",
  },
  ltextsubtext: {
    color: "white",
    fontSize: 12,
    fontFamily: "Inter-Regular",
  },
  cartcontainer: {
    position: "relative",
    alignItems: "center",
    flexDirection: "row-reverse",
    gap: 5,
    backgroundColor: "#F47A00",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
  },
  cartbadge: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  cartbadgetext: {
    color: "white",
    fontSize: 10,
    fontFamily: "Inter-Regular",
  },
  test: {
    marginLeft: 15,
    marginTop: 10,
  },
});
export default styles;
