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
import styles from "./styles";
import useCart from "./useCart";
import CartCard from "./components/productcards/CartCard";
import Loading from "../../components/loading/Loading";
const CartScreen = () => {
  const [state, dispatch, userInfo, updateItem, deleteItem] = useCart();
  console.log("======================= cart screen");
  return (
    <>
      <ExpoStatusBar style="light" />
      <View style={GlobalStyles.backDrop}></View>
      <SafeAreaView style={GlobalStyles.container}>
        <BackButton text={"Your Cart"} subText={"Items"} />

        {state.isLoading ? (
          <Loading />
        ) : (
          <FlatList
            data={state.cartItems}
            renderItem={({ item }) => (
              <CartCard
                updateItem={updateItem}
                deleteItem={deleteItem}
                cartId={item.id}
                productId={item.productId}
                title={item.productName}
                image={item.image}
                price={item.price}
                quantity={item.quantity}
              />
            )}
          />
        )}
      </SafeAreaView>
    </>
  );
};

export default CartScreen;
