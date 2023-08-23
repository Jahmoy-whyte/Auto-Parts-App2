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
import styles from "./styles";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Entypo, Feather, AntDesign, Ionicons } from "@expo/vector-icons";
import QuickCategories from "./components/quick_categories/QuickCategories";
import { CATEGORYDATA, fakeData, fakeData2 } from "./helper/categoryData";
import mainimage from "../../assets/images/mainimg2.png";
import cardoor from "../../assets/images/cardoor.png";

import newstar from "../../assets/images/newstar.png";
import star from "../../assets/images/star.png";
import engine from "../../assets/images/engine.png";
import headlight from "../../assets/images/headlight.png";

import HomePartCards from "./components/homepartscards/HomePartCards";
import Advert from "./components/advert/Advert";
import Headings from "./components/headings/Headings";
import CategoriesCards from "./components/categories_cards/CategoriesCards";
import useHome from "./useHome";
import Loading from "../../components/loading/Loading";
import * as SecureStore from "expo-secure-store";

/*


*/
const Home = ({ navigation }) => {
  const [state, dispatch, userInfo, getProducts] = useHome();
  console.log("======= render home");
  return (
    <>
      <ExpoStatusBar style="light" />
      <View style={GlobalStyles.backDrop}></View>
      <SafeAreaView style={GlobalStyles.container}>
        <Button
          title="clear"
          onPress={async () => {
            await SecureStore.deleteItemAsync("AccessToken");
            await SecureStore.deleteItemAsync("RefreshToken");
          }}
        />

        <Button
          title="get token"
          onPress={async () => {
            const token = await SecureStore.getItemAsync("AccessToken");
            const token2 = await SecureStore.getItemAsync("RefreshToken");
            alert(token + "==================REFRESH=============" + token2);
          }}
        />

        <Button title="test" onPress={() => getProducts()} />
        <View style={styles.headingView}>
          <View style={styles.menuTitleAndCart}>
            <View style={styles.menuAndTitle}>
              <Entypo name="menu" size={24} color="white" />
              <Text style={GlobalStyles.xl20White}>Auto Parts</Text>
            </View>
            <TouchableOpacity
              style={styles.cartcontainer}
              onPress={() => navigation.navigate("cart")}
            >
              {userInfo?.cart?.length > 0 ? (
                <View style={styles.cartbadge}>
                  <Text style={styles.cartbadgetext}>
                    {userInfo?.cart?.length}
                  </Text>
                </View>
              ) : null}

              <Feather name="shopping-cart" size={18} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.lcontainer}>
            <View style={styles.liconcontainer}>
              <Ionicons name="location-outline" size={24} color="white" />
            </View>

            <View style={styles.ltextcontainter}>
              <Text style={styles.ltxttitle}>Location</Text>
              <Text style={styles.ltextsubtext}>
                Please add a your location for delivery
              </Text>
            </View>
          </View>
        </View>
        {state.isLoading ? (
          <Loading text={"wdwdwd"} />
        ) : (
          <ScrollView>
            <Pressable
              style={styles.textBoxView}
              onPress={() => navigation.navigate("search")}
            >
              <AntDesign name="search1" size={20} color="white" />
              <Text style={styles.textBoxText}>Search For Your Car Parts</Text>
            </Pressable>
            <Advert image={mainimage} />

            <Headings
              image={newstar}
              text={"New Arrival"}
              subText={"Most select items"}
            />
            <FlatList
              style={styles.flatlist}
              data={state.newArrival}
              horizontal
              renderItem={({ item }) => (
                <HomePartCards
                  image={cardoor}
                  text={item.productName + " " + item.model}
                  price={item.price}
                  subtext={"Model: " + item.model}
                />
              )}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />

            <Headings
              image={star}
              text={"Categories"}
              subText={"Most select items"}
            />
            <FlatList
              style={styles.flatlist}
              data={state.newArrival}
              horizontal
              renderItem={({ item }) => (
                <HomePartCards
                  image={cardoor}
                  text={item.productName + " " + item.model}
                  price={item.price}
                  subtext={"Model: " + item.model}
                />
              )}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />

            <Headings
              image={star}
              text={"Categories"}
              subText={"Most select items"}
            />

            <View style={styles.CategoriesContainer}>
              <CategoriesCards
                image={headlight}
                text={"item.text"}
                subText={"item.subtext"}
              />
              <CategoriesCards
                image={engine}
                text={"item.text"}
                subText={"item.subtext"}
              />
            </View>
            <View style={styles.CategoriesContainer}>
              <CategoriesCards
                image={headlight}
                text={"item.text"}
                subText={"item.subtext"}
              />
            </View>
          </ScrollView>
        )}
      </SafeAreaView>
    </>
  );
};

export default Home;
