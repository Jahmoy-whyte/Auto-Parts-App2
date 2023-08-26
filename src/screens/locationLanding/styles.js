import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 10,
    gap: 15,
  },

  imageandtextcontainer: {
    gap: 10,
    marginHorizontal: 15,

    flex: 1,
  },

  image: {
    width: 130,
    height: 130,
  },

  title: {
    textAlign: "center",
    fontSize: 25,
    fontFamily: "Inter-Bold",
  },
  subtext: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: "Inter-Regular",
    marginTop: 10,
  },
  backarrow: {
    position: "absolute",

    borderRadius: 30,
    borderWidth: 0.5,
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    left: 15,
    top: 10,
  },

  btncontainer: {
    gap: 10,
  },

  btn1: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 55,
    backgroundColor: "#F47A00",
    padding: 10,
    flexDirection: "row",
    gap: 10,
    borderRadius: 6,
  },
  btn1text: {
    color: "white",
    fontSize: 14,
    fontFamily: "Inter-Bold",
  },

  btn2: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 55,
    borderWidth: 0.5,
    padding: 10,
    flexDirection: "row",
    gap: 10,

    borderRadius: 6,
  },
  btn2text: {
    fontSize: 14,
    fontFamily: "Inter-Bold",
  },

  orcontainer: {
    flexDirection: "row",
    alignItems: "center",

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
});
export default styles;
