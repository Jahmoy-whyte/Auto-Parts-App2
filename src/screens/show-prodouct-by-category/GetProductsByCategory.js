import { View, SafeAreaView, FlatList } from "react-native";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import BackButton from "../../components/backbutton/BackButton";
import useGetProductsByCategory from "./useGetProductsByCategory";
import ProductCard from "./components/productcards/ProductCard";
import styles from "./styles";
import Loading from "../../components/loading/Loading";
const GetProductsByCategory = () => {
  const [state, navigateToProduct, category] = useGetProductsByCategory();
  return (
    <>
      <ExpoStatusBar style="light" />
      <View style={GlobalStyles.backDrop}></View>
      <SafeAreaView style={GlobalStyles.container}>
        <BackButton text={category} />

        {state.isLoading ? (
          <Loading />
        ) : (
          <FlatList
            data={state.products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <ProductCard
                  title={`${item.productName} ${item.model}`}
                  image={item.image}
                  price={item.price}
                  func={navigateToProduct}
                  productId={item.id}
                  status={item.status}
                />
              );
            }}
          />
        )}
      </SafeAreaView>
    </>
  );
};

export default GetProductsByCategory;
