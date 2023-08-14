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
import useSearch from "./useSearch";
import {
  makeSelect,
  modelSelect,
  yearSelect,
  categorySelect,
} from "./helper/dropDownSelectFunctions";

const Search = () => {
  const [state, dispatch] = useSearch();
  console.log("render");
  return (
    <>
      <ExpoStatusBar style="light" />
      <View style={GlobalStyles.backDrop}></View>
      <SafeAreaView style={GlobalStyles.container}>
        <BackButton text={"Search"} subText={"Search For You Parts"} />
        <ScrollView>
          <View style={styles.searchcontainer}>
            <View style={styles.SearchBoxContainer}>
              <SearchBox
                text={"Selcet Make"}
                dispatch={dispatch}
                dropDownBoxKeyName={"makeDropDownBox"}
                dataKeyName={"make"}
                state={state}
                func={makeSelect}
              />

              <SearchBox
                text={"Selcet Model"}
                dispatch={dispatch}
                dropDownBoxKeyName={"modelDropDownBox"}
                dataKeyName={"model"}
                state={state}
                func={modelSelect}
              />
              <SearchBox
                text={"Selcet Year"}
                dispatch={dispatch}
                dropDownBoxKeyName={"yearDropDownBox"}
                dataKeyName={"year"}
                state={state}
                func={yearSelect}
              />

              <SearchBox
                text={"Selcet Category"}
                dispatch={dispatch}
                dropDownBoxKeyName={"categoriesDropDownBox"}
                dataKeyName={"category"}
                state={state}
                func={categorySelect}
              />
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
