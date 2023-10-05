import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius: 6,
  },
  imageContainer: {
    backgroundColor: "#0954B6",
    flexDirection: "row",
    height: 136,
    marginTop: 15,
    marginHorizontal: 15,
    borderRadius: 10,
    gap: 10,
    alignItems: "center",
    paddingHorizontal: 10,
  },

  infoContainer: {
    position: "absolute",
    bottom: 0,
    gap: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
    justifyContent: "space-between",
    zIndex: 2,
  },

  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontFamily: "Inter-Bold",
    color: "white",
  },
  subText: {
    fontSize: 10,
    fontFamily: "Inter-Regular",

    color: "white",
  },

  subTextcolor: {
    fontSize: 10,
    fontFamily: "Inter-Bold",
    color: "#F47A00",
  },

  LearnMoreContainer: {
    backgroundColor: "#F47A00",
    minHeight: 35,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    borderRadius: 6,
  },
  learnMoreText: {
    fontSize: 10,
    fontFamily: "Inter-Bold",
    color: "white",
  },
  overlay: {},
});
export default styles;
