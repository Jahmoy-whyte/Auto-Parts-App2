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
        <Text style={styles.toptext}>
          {"Please Sign Up To View This Screen"}
        </Text>
        <TouchableOpacity
          onPress={() => nav.navigate("guestToUserSignUp")}
          style={styles.btn1}
        >
          <Text style={styles.text1}>{"Sign Up"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={logout} style={styles.btn2}>
          <Text style={styles.text2}>{"Logout"}</Text>
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
  toptext: {
    marginBottom: 5,
    textAlign: "center",
    color: "#B3B3B3",
    fontFamily: "Inter-Regular",
    fontSize: 14,
  },

  btn1: {
    borderRadius: 10,
    backgroundColor: "#F47A00",
    minHeight: 40,
    minWidth: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  text1: {
    marginHorizontal: 15,
    color: "white",
    fontFamily: "Inter-Bold",
    fontSize: 14,
  },

  btn2: {
    marginTop: 5,
    borderRadius: 10,
    borderWidth: 0.5,

    minHeight: 40,
    minWidth: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  text2: {
    marginHorizontal: 15,
    fontFamily: "Inter-Bold",
    fontSize: 14,
  },

  img: {
    height: "60%",
    width: "60%",
  },
});

export default SignupCard;
