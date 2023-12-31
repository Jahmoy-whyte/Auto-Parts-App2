import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headingView: {
    flexDirection: "column",
    backgroundColor: "#0954B6",
    paddingHorizontal: 15,

    paddingVertical: 20,
  },

  menuTitleAndCart: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  menuAndTitle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },
  textBoxView: {
    minHeight: 50,
    borderRadius: 40,
    borderWidth: 0,
    borderColor: "#0954B6",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 15,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#0954B6",
    marginHorizontal: 15,
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
    marginTop: 5,
  },
  liconcontainer: {
    borderColor: "white",
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
    width: 30,
    height: 30,
    position: "relative",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  cartbadge: {
    top: -15,
    right: -5,
    position: "absolute",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    width: 15,
    height: 15,
  },
  cartbadgetext: {
    color: "white",
    fontSize: 10,
    fontFamily: "Inter-Regular",
  },

  checkoutview: {
    flexDirection: "row",
    borderRadius: 6,
    borderWidth: 0.5,
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    height: 80,
    borderColor: "#B3B3B3",
  },
  checkouttitle: {
    fontSize: 14,
    fontFamily: "Inter-Bold",
  },
  checkoutbtn: {
    backgroundColor: "#F47A00",
    minHeight: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  checkouttextview: {
    flex: 1,
  },

  noItemsText: {
    fontSize: 12,
    fontFamily: "Inter-Bold",
  },
  noItems: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default styles;
