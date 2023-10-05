import { useEffect, useState } from "react";
import ShowToast from "../../helper/ShowToast";
import { useAuthContext } from "../../context/UserAuthContextWarpper";
import { dbGetFavorites } from "../../services/favoriteFetch";
import { useIsFocused, useNavigation } from "@react-navigation/native";

const useFavorite = () => {
  const [favorites, setFavorites] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const nav = useNavigation();
  const { tokenAwareFetchWrapper } = useAuthContext();
  const focused = useIsFocused();
  useEffect(() => {
    const getFavorites = async () => {
      setIsLoading(true);
      try {
        const favoriteData = await tokenAwareFetchWrapper(dbGetFavorites);
        setFavorites(favoriteData);
      } catch (error) {
        ShowToast("customErrorToast", error.message);
      }
      setIsLoading(false);
    };

    if (focused) getFavorites();
  }, [focused]);

  const navToProduct = (productId) => {
    nav.navigate("product", {
      navProductId: productId,
      navActionType: "ADD",
      navQuantity: 1,
      navCartId: null,
    });
  };

  return [isLoading, favorites, navToProduct];
};

export default useFavorite;
