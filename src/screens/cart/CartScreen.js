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
import formattedCost from "../../helper/formattedCost";
const CartScreen = () => {
  const [
    state,
    dispatch,
    updateItem,
    deleteItem,
    userInfo,
    subTotal,
    checkOut,
  ] = useCart();
  console.log("======================= cart screenz");
  return (
    <>
      <ExpoStatusBar style="light" />
      <View style={GlobalStyles.backDrop}></View>
      <SafeAreaView style={GlobalStyles.container}>
        <BackButton
          text={"Your Cart"}
          subText={"Items (" + userInfo?.cart?.length + ")"}
        />

        {state.isLoading ? (
          <Loading />
        ) : (
          <FlatList
            keyExtractor={(item) => item.id}
            data={userInfo.cart}
            renderItem={({ item }) => (
              <CartCard
                updateItem={updateItem}
                deleteItem={deleteItem}
                id={item.id}
                productId={item.productId}
                title={item.productName}
                image={item.image}
                price={item.price}
                quantity={item.quantity}
              />
            )}
          />
        )}

        <View style={styles.checkoutview}>
          <View style={styles.checkouttextview}>
            <Text style={styles.checkouttitle}>SubTotal:</Text>
            <Text style={GlobalStyles.sml12Black}>
              {formattedCost(subTotal)}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.checkoutbtn}
            onPress={() => checkOut()}
          >
            <Text style={GlobalStyles.sml14WhiteBold}>Check Out</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default CartScreen;
