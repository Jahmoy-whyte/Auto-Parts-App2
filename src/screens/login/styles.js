import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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

  topcontainer: {
    backgroundColor: "#0954B6",
    minHeight: 120,
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  title: {
    color: "white",
    fontSize: 25,
    fontFamily: "Inter-Bold",
  },
  subtitle: {
    color: "white",
    fontSize: 14,
    fontFamily: "Inter-Regular",
  },
  textboxcontainer: {
    marginHorizontal: 15,
    marginTop: 15,
    gap: 10,
  },
  inputandlabelcontainer: {},
  label: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
  },

  inputcontainer: {
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: "#B3B3B3",
    minHeight: 50,
    fontSize: 14,
    fontFamily: "Inter-Regular",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  input: {
    flex: 1,
  },

  bottomtextcontainer: {
    marginHorizontal: 15,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  bottomtext: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
  },

  bottomtextbold: {
    fontSize: 14,
    fontFamily: "Inter-Bold",
    color: "#F47A00",
  },

  checkboxcontainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginVertical: 10,
  },
  checkboxtext: {
    fontSize: 12,
    fontFamily: "Inter-Regular",
  },

  checkboxtextcontainer: {
    flexWrap: "wrap",
    flex: 1,
    flexDirection: "row",
  },

  checkboxtextbold: {
    fontSize: 12,
    fontFamily: "Inter-Bold",
    color: "#F47A00",
  },

  orcontainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    gap: 10,
  },

  orlines: {
    flex: 1,
    height: 1,
    backgroundColor: "#B3B3B3",
  },

  ortext: {
    fontSize: 16,
    fontFamily: "Inter-Regular",
  },

  guestbtn: {
    borderWidth: 0.5,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 50,
    // backgroundColor: "#F47A00",
  },

  guestbtntext: {
    fontSize: 14,
    fontFamily: "Inter-Bold",
    // color: "white",
  },
});
export default styles;
