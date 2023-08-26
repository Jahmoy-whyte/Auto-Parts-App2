import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TextInput,
  ScrollView,
  FlatList,
  Image,
  Pressable,
  Button,
  TouchableOpacity,
} from "react-native";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import styles from "./styles";

import accountImg from "./images/account.png";
import location from "./images/location.png";
import payment from "./images/payment.png";
import bell from "./images/bell.png";
import web from "./images/web.png";
import logoutImg from "./images/logout.png";
import { useAuthContext } from "../../context/UserAuthContextWarpper";
import Cards from "./components/cards/Cards";
import { useCallback } from "react";
import { useUserInfoContext } from "../../context/UserInfoContextWarpper";

const AccountTab = ({ navigation }) => {
  console.log("================ AccountTab");
  const { logout } = useAuthContext();
  // const { userInfo } = useUserInfoContext();
  /*
    <View style={styles.accountcartcontainer}>
            <View style={styles.profile}>
              <Text style={styles.profileletter}>{"M"}</Text>
            </View>
            <View style={styles.accountcarttextcontainer}>
              <Text style={styles.titlewhite}>{" Mave Mack"}</Text>
              <Text style={styles.subtextwhite}>{"mack@gmail.comk"}</Text>
            </View>
          </View>
*/
  return (
    <>
      <ExpoStatusBar style="light" />
      <View style={GlobalStyles.backDrop}></View>
      <SafeAreaView style={GlobalStyles.container}>
        <ScrollView>
          <View style={styles.headingcontainer}>
            <Text style={styles.heading}>Account</Text>
          </View>

          <Cards
            image={accountImg}
            title={"Account"}
            subtext={"Name, email, phone number"}
            func={() => navigation.navigate("accountsettings")}
          />
          <Cards
            image={location}
            title={"Location"}
            subtext={"Add your address"}
            func={() => navigation.navigate("savedaddress")}
          />
          <Cards
            image={payment}
            title={"Payment Method"}
            subtext={"Visa | Debit | Credit"}
          />
          <Cards image={bell} title={"Notifications"} />
          <Cards image={web} title={"Privacy Policy"} />
          <Cards
            image={logoutImg}
            title={"Logout"}
            func={logout}
            showarrow={false}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default AccountTab;
