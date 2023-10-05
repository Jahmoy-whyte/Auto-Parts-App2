import { View, Text, SafeAreaView, FlatList } from "react-native";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import BackButton from "../../components/backbutton/BackButton";
import useFavorite from "./useFavorite";
import ProductCard from "./components/productcards/ProductCard";
import Loading from "../../components/loading/Loading";
import styles from "./styles";

const FavoritesScreen = () => {
  const [isLoading, favorites, navToProduct] = useFavorite();

  return (
    <>
      <ExpoStatusBar style="light" />
      <View style={GlobalStyles.backDrop}></View>

      <SafeAreaView style={GlobalStyles.container}>
        <BackButton text={"Favorites"} />

        {isLoading ? (
          <Loading />
        ) : favorites.length ? (
          <FlatList
            data={favorites}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <ProductCard
                  title={item.productName}
                  price={item.price}
                  image={item.image}
                  func={navToProduct}
                  productId={item.id}
                  status={item.status}
                />
              );
            }}
          />
        ) : (
          <View style={styles.textContainer}>
            <Text style={styles.text}>No Favorites Found</Text>
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

export default FavoritesScreen;
