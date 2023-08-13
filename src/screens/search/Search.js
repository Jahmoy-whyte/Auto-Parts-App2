import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TextInput,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import styles from "./styles";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import SearchBox from "./components/searchbox/SearchBox";
import CustomButton from "../../components/button/CustomButton";
import BackButton from "../../components/backbutton/BackButton";
const Search = () => {
  return (
    <>
      <ExpoStatusBar style="light" />
      <View style={GlobalStyles.backDrop}></View>
      <SafeAreaView style={GlobalStyles.container}>
        <BackButton text={"Search"} subText={"Search For You Parts"} />
        <ScrollView>
          <View style={styles.searchcontainer}>
            <View style={styles.SearchBoxContainer}>
              <SearchBox text={"Selcet Maker"} />
              <SearchBox text={"Selcet Maker"} />
              <SearchBox text={"Selcet Maker"} />
              <SearchBox text={"Selcet Maker"} />
            </View>
            <CustomButton
              text={"Search"}
              marginHorizontal={15}
              marginVertical={10}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Search;
