import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 6,
  },
  imageContainer: {
    backgroundColor: "#EBEBEB",
    overflow: "hidden",

    height: 170,
    marginTop: 15,
    marginHorizontal: 15,
    borderRadius: 10,
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
    fontSize: 12,
    fontFamily: "Inter-Bold",
    color: "white",
  },
  subText: {
    fontSize: 10,
    fontFamily: "Inter-Regular",
    color: "#B3B3B3",
    color: "white",
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
  overlay: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.19)",
    position: "absolute",
    zIndex: 1,
  },
});
export default styles;
