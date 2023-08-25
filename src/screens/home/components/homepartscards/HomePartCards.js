import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import formattedCost from "../../../../helper/formattedCost";
import { memo } from "react";
const HomePartCards = ({
  image,
  text,
  subtext,
  price,
  id,
  navigateToProduct,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigateToProduct(id)}
    >
      <View style={styles.imagecontainer}>
        <Image source={image} style={styles.img} />
      </View>

      <View style={styles.textAndPriceContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.subText} numberOfLines={2}>
            {subtext}
          </Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>{formattedCost(price)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(HomePartCards);
