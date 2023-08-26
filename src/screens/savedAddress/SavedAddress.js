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
import BackButton from "../../components/backbutton/BackButton";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import useSaveAddress from "./useSaveAddress";
import { useNavigation } from "@react-navigation/native";
import Loading from "../../components/loading/Loading";

const SavedAddress = () => {
  const nav = useNavigation();
  const [address, isLoading, deleteAddress] = useSaveAddress();
  const AddressCard = () => {
    return (
      <View>
        <Text>dwdwdwd</Text>
      </View>
    );
  };
  return (
    <>
      <ExpoStatusBar style="light" />
      <View style={GlobalStyles.backDrop}></View>
      <SafeAreaView style={GlobalStyles.container}>
        <BackButton text={"Saved Address"} />

        <View style={styles.container}>
          <View style={styles.topcontainer}>
            <Text style={styles.title}>Your Address</Text>

            <TouchableOpacity
              style={styles.addbtn}
              onPress={() => nav.navigate("locationlanding")}
            >
              <AntDesign name="pluscircleo" size={24} color="#F47A00" />
              <Text style={styles.addbtntext}>Add </Text>
            </TouchableOpacity>
          </View>
        </View>

        {isLoading ? (
          <Loading />
        ) : (
          <FlatList
            data={address}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return <AddressCard />;
            }}
          />
        )}
      </SafeAreaView>
    </>
  );
};

export default SavedAddress;
