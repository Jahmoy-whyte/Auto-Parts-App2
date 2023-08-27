import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from "react-native";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import locationImg from "../../assets/images/locationbig1.png";
import { MaterialIcons, Ionicons, AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import BackButton from "../../components/backbutton/BackButton";
import useLocationLanding from "./useLocationLanding";
import SearchCards from "./components/searchCards/SearchCards";
import Loading from "../../components/loading/Loading";

const LocationLanding = ({ navigation }) => {
  const [data, navTo, showModel, onChangeHandler, findloaction] =
    useLocationLanding();
  return (
    <>
      <ExpoStatusBar style="light" />
      <View style={GlobalStyles.backDrop}></View>
      <SafeAreaView style={GlobalStyles.container}>
        <BackButton text={"Location"} />

        <View style={styles.imageandtextcontainer}>
          <Text style={styles.subtext}>
            Add you loaction to help us delivery to you
          </Text>

          <View
            style={styles.btncontainer}
            onPress={() => navigation.navigate("enterlocation")}
          >
            <TouchableOpacity style={styles.btn1} onPress={findloaction}>
              {data.findLoactionIsLoading ? (
                <>
                  <ActivityIndicator color={"white"} />
                  <Text style={styles.btn1text}>searching...</Text>
                </>
              ) : (
                <>
                  <MaterialIcons name="my-location" size={24} color="white" />

                  <Text style={styles.btn1text}>Find Current Location</Text>
                </>
              )}
            </TouchableOpacity>

            <View style={styles.orcontainer}>
              <View style={styles.orlines}></View>
              <Text style={styles.ortext}>OR</Text>
              <View style={styles.orlines}></View>
            </View>
            <TouchableOpacity
              style={styles.btn2}
              onPress={() => showModel(true)}
            >
              <Ionicons name="search" size={24} color="black" />
              <Text style={styles.btn2text}>Search For Location</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Modal
          animationType="slide"
          transparent={false}
          visible={data.showModel}
          onRequestClose={() => showModel(false)}
        >
          <SafeAreaView style={styles.SafeAreaView}>
            <BackButton
              text={"Search"}
              useCustomFunc={true}
              custumFunc={() => showModel(false)}
            />

            <View style={styles.inputcontainer}>
              <Ionicons name="search" size={24} color="#B3B3B3" />
              <TextInput
                style={styles.input}
                placeholder="Search for Your location"
                onChangeText={(value) => onChangeHandler(value)}
              />
            </View>

            {data.searchIsLoading ? (
              <Loading />
            ) : (
              <FlatList
                data={data.listOfLocations}
                renderItem={({ item }) => (
                  <SearchCards name={item.name} func={navTo} />
                )}
                keyExtractor={(item) => item.id}
              />
            )}
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
    </>
  );
};

export default LocationLanding;
