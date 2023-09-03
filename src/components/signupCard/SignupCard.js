import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import CustomButton from "../button/CustomButton";
import img from "../../assets/images/signupimg.png";
import { useNavigation } from "@react-navigation/native";
import { useAuthContext } from "../../context/UserAuthContextWarpper";
//  <Image source={img} resizeMode="contain" style={styles.img} />
const SignupCard = () => {
  const nav = useNavigation();
  const { logout } = useAuthContext();
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.text2}>{"Please Sign Up To View This Screen"}</Text>
        <TouchableOpacity
          onPress={() => nav.navigate("guestToUserSignUp")}
          style={styles.btn}
        >
          <Text style={styles.text1}>{"Sign Up"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={logout} style={styles.btn3}>
          <Text style={styles.text3}>{"Logout"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    justifyContent: "center",
  },
  container2: {
    marginHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  btn: {
    borderRadius: 10,
    backgroundColor: "#F47A00",
  },
  img: {
    height: "60%",
    width: "60%",
  },
  text1: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    color: "white",
    fontFamily: "Inter-Bold",
    fontSize: 14,
  },
  text2: {
    marginBottom: 5,
    textAlign: "center",
    color: "#B3B3B3",
    fontFamily: "Inter-Regular",
    fontSize: 14,
  },

  btn3: {
    marginTop: 5,
    borderRadius: 10,
    borderWidth: 0.5,
  },
  text3: {
    textAlign: "center",
    paddingHorizontal: 15,
    paddingVertical: 5,
    fontFamily: "Inter-Bold",
    fontSize: 14,
  },
});

export default SignupCard;
