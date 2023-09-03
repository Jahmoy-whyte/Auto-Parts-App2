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
  ActivityIndicator,
} from "react-native";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import BackButton from "../../components/backbutton/BackButton";
import useShowAllHook from "./useShowAllHook";
import ProductCard from "./components/productcards/ProductCard";
import styles from "./styles";
import Loading from "../../components/loading/Loading";
const ShowAll = () => {
  const [state, dispatch, getMoreProducts, navigateToProduct] =
    useShowAllHook();
  return (
    <>
      <ExpoStatusBar style="light" />
      <View style={GlobalStyles.backDrop}></View>
      <SafeAreaView style={GlobalStyles.container}>
        <BackButton text={"Show All"} />

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
                  description={item.description}
                  price={item.price}
                  func={navigateToProduct}
                  productId={item.id}
                />
              );
            }}
            onEndReached={() => getMoreProducts()}
            ListFooterComponent={() =>
              state.loadMore ? (
                <View>
                  <ActivityIndicator color={"#0954B6"} size={"large"} />
                </View>
              ) : null
            }
          />
        )}
      </SafeAreaView>
    </>
  );
};

export default ShowAll;
