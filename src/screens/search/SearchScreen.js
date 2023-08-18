import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TextInput,
  ScrollView,
  FlatList,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import styles from "./styles";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import DropDownBox from "./components/dropdownbox/DropDownBox";
import CustomButton from "../../components/button/CustomButton";
import BackButton from "../../components/backbutton/BackButton";
import useSearch from "./useSearch";
import {
  getMakeOptions,
  getModelOptions,
  getSubCategoryOptions,
  getYearOptions,
} from "./helper/dropDownSelectFunctions";
import SearhModel from "./components/searchmodel/SearchModel";
import ShowToast from "../../helper/ShowToast";
import ProductCard from "./components/productcards/ProductCard";

const SearchScreen = () => {
  const [state, dispatch, searchFunc, navigateToProduct] = useSearch();
  console.log("render");

  const Top = () => {
    return (
      <View style={styles.searchcontainer}>
        <View style={styles.SearchBoxContainer}>
          <DropDownBox
            dispatch={dispatch}
            state={state}
            getOptionsFunc={getMakeOptions}
            dropDownBoxKey={"makeDropDownBox"}
            nextDropDownkey={"modelDropDownBox"}
            text={"Select Make"}
            modelOptionsKey={"make"}
          />

          <DropDownBox
            dispatch={dispatch}
            state={state}
            getOptionsFunc={getModelOptions}
            dropDownBoxKey={"modelDropDownBox"}
            nextDropDownkey={"yearDropDownBox"}
            text={"Select Model"}
            modelOptionsKey={"model"}
          />

          <DropDownBox
            dispatch={dispatch}
            state={state}
            getOptionsFunc={getYearOptions}
            dropDownBoxKey={"yearDropDownBox"}
            nextDropDownkey={null}
            text={"Select Year"}
            modelOptionsKey={"year"}
          />
        </View>

        <View style={styles.separate}>
          <DropDownBox
            dispatch={dispatch}
            state={state}
            getOptionsFunc={getSubCategoryOptions}
            dropDownBoxKey={"categoriesDropDownBox"}
            nextDropDownkey={null}
            text={"Select Category"}
            modelOptionsKey={"category"}
          />
        </View>

        <CustomButton
          text={"Search"}
          marginHorizontal={15}
          marginVertical={10}
          FUNC={searchFunc}
          isLoading={state.isSearching}
        />
      </View>
    );
  };

  return (
    <>
      <ExpoStatusBar style="light" />
      <View style={GlobalStyles.backDrop}></View>
      <SafeAreaView style={GlobalStyles.container}>
        <BackButton text={"Search"} subText={"Search For You Parts"} />

        <FlatList
          ListHeaderComponent={Top}
          data={state.productsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <ProductCard
                title={`${item.productName} ${item.model}`}
                image={item.image}
                description={item.description}
                price={item.price}
                func={navigateToProduct}
                productId={item.id}
              />
            );
          }}
        />
        <SearhModel dispatch={dispatch} state={state} />
      </SafeAreaView>
    </>
  );
};

//              <AntDesign name="search1" size={24} color="black" />

export default SearchScreen;
