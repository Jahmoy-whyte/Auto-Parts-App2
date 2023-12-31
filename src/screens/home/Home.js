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
import usePushNotifications from "../../hooks/usePushNotifications";

/*

 <Button title="logout" onPress={() => logout()} />

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
*/
const Home = ({ navigation }) => {
  const [
    state,
    userInfo,
    navigateToProduct,
    place,
    address,
    navToShowAll,
    navToGetProductsByCategory,
  ] = useHome();
  console.log("======= render home");
  // console.log(userInfo);

  return (
    <>
      <ExpoStatusBar style="light" />
      <View style={GlobalStyles.backDrop}></View>
      <SafeAreaView style={GlobalStyles.container}>
        <View style={styles.headingView}>
          <View style={styles.menuTitleAndCart}>
            <View style={styles.menuAndTitle}>
              <TouchableOpacity
                style={styles.lcontainer}
                onPress={() => navigation.navigate("savedaddress")}
              >
                <View style={styles.liconcontainer}>
                  <Ionicons name="location-outline" size={24} color="white" />
                </View>

                <View style={styles.ltextcontainter}>
                  <Text style={styles.ltxttitle}>{place}</Text>
                  <Text style={styles.ltextsubtext} numberOfLines={1}>
                    {address}
                  </Text>
                </View>
              </TouchableOpacity>
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
          <Pressable
            style={styles.textBoxView}
            onPress={() => navigation.navigate("search")}
          >
            <AntDesign name="search1" size={20} />
            <Text style={styles.textBoxText}>Search For Your Car Parts</Text>
          </Pressable>
        </View>
        {state.isLoading ? (
          <Loading
            text={
              "Node sever hosted on the free tier on render.com, free instance will spin down with inactivity. so it may take a minute to connect to server. Please wait"
            }
          />
        ) : (
          <ScrollView>
            <Advert image={mainimage} />

            <Headings
              func={navToShowAll}
              showShowall={true}
              image={newstar}
              text={"New Arrival"}
              subText={"Recent items"}
            />
            <FlatList
              style={styles.flatlist}
              data={state.newArrival}
              horizontal
              renderItem={({ item }) => (
                <HomePartCards
                  id={item.id}
                  navigateToProduct={navigateToProduct}
                  image={item.image}
                  text={item.productName + " " + item.model}
                  price={item.price}
                  subtext={"Model: " + item.model}
                  status={item.status}
                />
              )}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />

            <Headings
              func={navToShowAll}
              image={star}
              text={"Most Popular"}
              subText={"Most popular items"}
              showShowall={true}
            />
            <FlatList
              style={styles.flatlist}
              data={state.products}
              horizontal
              renderItem={({ item }) => (
                <HomePartCards
                  id={item.id}
                  navigateToProduct={navigateToProduct}
                  image={item.image}
                  text={item.productName + " " + item.model}
                  price={item.price}
                  subtext={"Model: " + item.model}
                  status={item.status}
                />
              )}
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />

            <Headings
              image={star}
              text={"Categories"}
              subText={"Most search categories"}
            />
            <CategoriesCards func={navToGetProductsByCategory} />
          </ScrollView>
        )}
      </SafeAreaView>
    </>
  );
};

export default Home;

/*

   <View style={styles.CategoriesContainer}>
            
              <CategoriesCards
                image={engine}
                text={"item.text"}
                subText={"item.subtext"}
                func={navToShowAll}
              />
            </View>
            <View style={styles.CategoriesContainer}>
              <CategoriesCards
                image={headlight}
                text={"item.text"}
                subText={"item.subtext"}
                func={navToShowAll}
              />
            </View>
*/
