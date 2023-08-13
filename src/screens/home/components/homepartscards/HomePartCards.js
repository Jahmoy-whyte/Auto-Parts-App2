import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
const HomePartCards = ({ image, text, subtext, price }) => {
  return (
    <TouchableOpacity style={styles.container}>
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
          <Text style={styles.priceText}>{price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomePartCards;
