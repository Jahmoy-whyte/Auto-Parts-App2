import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import img from "../../assets/images/cardoor.png";
import {
  MaterialIcons,
  FontAwesome,
  Fontisto,
  FontAwesome5,
  Octicons,
} from "@expo/vector-icons";
import styles from "./styles";
import CustomButton from "../../components/button/CustomButton";
import useProducts from "./useProducts";
import Loading from "../../components/loading/Loading";
import { ACTIONS } from "./helper/reducerActions";
import formattedCost from "../../helper/formattedCost";

const ProductsScreen = ({ route }) => {
  console.log("======================== product screen");
  const { navProductId, navActionType, navQuantity, navCartId } = route.params;
  const [
    state,
    dispatch,
    nav,
    addToCart,
    updateCartItem,
    addFavorites,
    removeFavorite,
  ] = useProducts(navProductId, navActionType, navQuantity, navCartId);

  const Card = ({ title, text }) => {
    return (
      <View style={styles.cardcontainer}>
        <Octicons name="dot-fill" size={24} color="#0954B6" />
        <Text style={styles.texttitle}>
          {title}
          <Text style={styles.text}>: {text}</Text>
        </Text>
      </View>
    );
  };

  const data = state.productData;
  const image = data?.image;
  const condition = data?.conditionOfPart;
  const make = data?.make;
  const model = data?.model;
  const year = data?.year;
  const productName = data?.productName + " " + model;
  const makeModelYear = make + " | " + model + " | " + year;
  const quantityPrice = formattedCost(state.quantityPrice);
  const price = formattedCost(data?.price);

  return (
    <>
      <View style={GlobalStyles.backDrop}></View>
      <SafeAreaView style={GlobalStyles.container}>
        {state.isLoading ? (
          <Loading />
        ) : (
          <ScrollView style={styles.scroll}>
            <View style={styles.topcontainer}>
              <View style={styles.navcontainer}>
                <TouchableOpacity
                  style={styles.actionbtn}
                  onPress={() => nav.goBack()}
                >
                  <MaterialIcons
                    name="keyboard-arrow-left"
                    size={24}
                    color="#0954B6"
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.actionbtn}
                  onPress={state.isFavorite ? removeFavorite : addFavorites}
                >
                  {state.isFavorite ? (
                    <FontAwesome name="bookmark" size={20} color="#F47A00" />
                  ) : (
                    <FontAwesome name="bookmark-o" size={20} color="#0954B6" />
                  )}
                </TouchableOpacity>
              </View>
              <View style={styles.imagecontainer}>
                <Image
                  style={styles.image}
                  resizeMode="contain"
                  source={{ uri: image }}
                />
              </View>
            </View>

            <View style={styles.infocontainer}>
              <View style={styles.infotext}>
                <Text style={styles.title}>{productName}</Text>
                <Text style={styles.subtext}>{makeModelYear}</Text>
              </View>

              <View style={styles.quantitycontainer}>
                <View style={styles.quantity}>
                  <TouchableOpacity
                    style={styles.quantitybtn}
                    onPress={() =>
                      dispatch({ type: ACTIONS.QUANTITY, payload: "minus" })
                    }
                  >
                    <Fontisto name="minus-a" size={20} color="white" />
                  </TouchableOpacity>

                  <Text style={styles.quantitytext}>{state.quantity}</Text>
                  <TouchableOpacity
                    style={styles.quantitybtn}
                    onPress={() =>
                      dispatch({ type: ACTIONS.QUANTITY, payload: "plus" })
                    }
                  >
                    <FontAwesome5 name="plus" size={18} color="white" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.price}>{price} </Text>
              </View>

              <CustomButton
                FUNC={navActionType == "ADD" ? addToCart : updateCartItem}
                isLoading={state.btnIsLoading}
                text={`${
                  navActionType == "ADD" ? "Add" : "Update"
                } . ${quantityPrice}`}
              />
            </View>
            <View style={styles.bottomcontainer}>
              <View style={styles.descriptioncontainer}>
                <Text style={styles.descriptiontitle}>Description:</Text>
                <Text style={styles.descriptiontext}>
                  I compromise, and there is coupler installationIn the case top
                  surface crazing , Whole Body, Scratch, A little
                </Text>
              </View>

              <View>
                <Card title={"Condition"} text={condition} />
                <Card title={"Make"} text={make} />
                <Card title={"Model"} text={model} />
                <Card title={"Year"} text={year} />
              </View>
            </View>
          </ScrollView>
        )}
      </SafeAreaView>
    </>
  );
};

export default ProductsScreen;
