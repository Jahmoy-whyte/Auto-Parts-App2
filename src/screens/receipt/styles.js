import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "#0954B6",
  },
  container: {
    marginHorizontal: 15,
    marginVertical: 10,
    gap: 5,
  },

  imagecontainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    height: 100,

    marginTop: 15,
  },

  image: {
    width: 50,
    height: 50,
  },

  heading: {
    color: "white",
    fontSize: 20,
    fontFamily: "Inter-Bold",
  },

  section: {
    gap: 15,

    backgroundColor: "white",
    borderBottomColor: "#B3B3B3",
    borderRadius: 10,
    padding: 10,
  },

  innercontainer: {
    borderTopWidth: 0.5,
    borderTopColor: "#B3B3B3",
    paddingVertical: 10,
    gap: 15,
  },

  inforow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  infotextleft: {
    fontSize: 14,
    flex: 1,
    fontFamily: "Inter-Regular",
  },
  infotextright: {
    fontSize: 14,
    fontFamily: "Inter-Bold",
  },
});
export default styles;
