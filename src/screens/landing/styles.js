import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  topcontainer: {
    backgroundColor: "#0954B6",
    minHeight: 220,

    justifyContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  title: {
    width: "80%",
    color: "white",
    fontSize: 30,
    fontFamily: "Inter-Bold",
  },
  subtitle: {
    width: "80%",
    color: "white",
    fontSize: 12,
    fontFamily: "Inter-Regular",
  },
  textboxcontainer: {
    marginHorizontal: 15,
    marginVertical: 25,
    gap: 10,
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

  btn: {
    borderWidth: 0.5,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 50,
    // backgroundColor: "#F47A00",
  },

  btntext: {
    fontSize: 14,
    fontFamily: "Inter-Bold",
    // color: "white",
  },

  btnsignup: {
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 50,
    backgroundColor: "#F47A00",
  },

  btnsignuptext: {
    fontSize: 14,
    fontFamily: "Inter-Bold",
    color: "white",
  },

  btnlogin: {
    borderWidth: 0.5,
    borderColor: "#F47A00",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 50,
    //   backgroundColor: "#F47A00",
  },

  btnlogintext: {
    fontSize: 14,
    fontFamily: "Inter-Bold",
    color: "#F47A00",
  },

  bottomtextcontainer: {
    marginHorizontal: 15,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  bottomtext: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: "Inter-Regular",
  },

  bottomtextbold: {
    fontSize: 14,
    fontFamily: "Inter-Bold",
    color: "#F47A00",
  },
});
export default styles;
