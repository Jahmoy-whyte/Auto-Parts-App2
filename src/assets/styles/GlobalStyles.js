import { StyleSheet, Platform } from "react-native";
import { StatusBar } from "react-native";
const GlobalStyles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {},
      android: { marginTop: StatusBar.currentHeight },
    }),
    flex: 1,
    backgroundColor: "white",
  },

  backDrop: {
    height: "100%",
    backgroundColor: "red",
    position: "absolute",
    width: "100%",
    top: 0,
    backgroundColor: "#0954B6",
  },

  xl20White: {
    fontSize: 20,
    fontFamily: "Inter-Bold",
    color: "white",
  },

  xl20Black: {
    fontSize: 20,
    fontFamily: "Inter-Bold",
    color: "black",
  },

  l16White: {
    fontSize: 16,
    fontFamily: "Inter-Bold",
    color: "white",
  },

  l16Black: {
    fontSize: 16,
    fontFamily: "Inter-Bold",
    color: "black",
  },

  m18White: {
    fontSize: 18,
    fontFamily: "Inter-Bold",
    color: "white",
  },

  m18Black: {
    fontSize: 18,
    fontFamily: "Inter-Bold",
    color: "black",
  },

  sml14WhiteBold: {
    fontSize: 14,
    fontFamily: "Inter-Bold",
    color: "white",
  },
  sml14WhiteReg: {
    fontSize: 14,
    fontFamily: "Inter-Bold",
    color: "white",
  },

  sml12White: {
    fontSize: 12,
    fontFamily: "Inter-Regular",
    color: "white",
  },
  sml12Black: {
    fontSize: 12,
    fontFamily: "Inter-Regular",
    color: "black",
  },
});

export default GlobalStyles;
