import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 10,
    gap: 5,
  },
  heading: {
    color: "black",
    fontSize: 16,
    fontFamily: "Inter-Bold",
  },

  optionscontainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderBottomWidth: 0,
    borderBottomColor: "#B3B3B3",
    paddingVertical: 15,
  },

  imageandtextcontainer: {
    alignItems: "center",
    gap: 10,
    flexDirection: "row",
    flex: 1,
  },

  backimg: {
    backgroundColor: "#509CFF",
    borderRadius: 10,

    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textcontainer: {
    flex: 1,
  },
  image: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 14,
    fontFamily: "Inter-Bold",
  },
  subtext: {
    fontSize: 12,
    fontFamily: "Inter-Regular",
  },
  edittext: {
    fontSize: 12,
    fontFamily: "Inter-Bold",
    color: "#F47A00",
  },

  section: {
    marginHorizontal: 15,

    borderBottomColor: "#B3B3B3",
    borderBottomWidth: 0.5,
  },

  pricecontainer: {
    padding: 15,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#B3B3B3",
    marginHorizontal: 15,
    marginVertical: 10,
    gap: 10,
  },

  inforow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  infotextleft: {
    fontSize: 12,
    fontFamily: "Inter-Bold",
  },
  infotextright: {
    fontSize: 12,
    fontFamily: "Inter-Regular",
  },

  rowcontainer: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
    gap: 10,
  },

  rowtext1: {
    fontSize: 14,
    fontFamily: "Inter-Bold",
  },
  rowtext2: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
  },
  rowtextcontainer: {
    flex: 1,
  },

  backspace: {
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#B3B3B3",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  textbox: {
    borderRadius: 6,
    borderWidth: 0.5,
    minHeight: 45,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  socketErrorView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  socketErrorText: {
    fontSize: 14,
    fontFamily: "Inter-Bold",
  },
  socketErrorText1: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
  },
});
export default styles;
