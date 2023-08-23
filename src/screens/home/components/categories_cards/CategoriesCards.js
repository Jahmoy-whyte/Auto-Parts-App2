import {
  Image,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { memo } from "react";
import styles from "./styles";
const CategoriesCards = ({ image, text, subText, func }) => {
  const { height, width } = useWindowDimensions();
  return (
    <TouchableOpacity style={[styles.container, { width: width / 2 - 20 }]}>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <View style={styles.TextContainer}>
        <Text style={styles.Title}>{text}</Text>
        <Text style={styles.SubText}>{subText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(CategoriesCards);
