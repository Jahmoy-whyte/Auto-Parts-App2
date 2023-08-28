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
    borderBottomWidth: 0.5,
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
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 14,
    fontFamily: "Inter-Bold",
  },
  subtext: {
    fontSize: 12,
    fontFamily: "Inter-Regular",
  },
  backarrow: {
    backgroundColor: "#F47A00",
    borderRadius: 30,
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default styles;
