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
  status,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => (status === "Out of stock" ? null : navigateToProduct(id))}
    >
      <View style={styles.imagecontainer}>
        <Image source={{ uri: image }} style={styles.img} />
      </View>

      <View style={styles.textAndPriceContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{text}</Text>

          <Text
            style={
              status === "Out of stock" ? styles.statusRed : styles.statusGreen
            }
            numberOfLines={2}
          >
            {status}
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
{
  /* <Text style={styles.subText} numberOfLines={2}>
{subtext}
</Text> */
}
