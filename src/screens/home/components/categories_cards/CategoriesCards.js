import {
  Image,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { memo } from "react";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
const CategoriesCards = ({ image, text, subText, func }) => {
  const { height, width } = useWindowDimensions();
  return (
    <TouchableOpacity
      style={styles.optionscontainer}
      onPress={() => {
        func();
      }}
    >
      <AntDesign name="search1" size={20} color="black" />
      <Text style={styles.optiontext}>{text}</Text>
    </TouchableOpacity>
  );
};

export default memo(CategoriesCards);

/*
<TouchableOpacity style={[styles.container, { width: width / 2 - 20 }]}>
<Image source={image} style={styles.image} resizeMode="contain" />
<View style={styles.TextContainer}>
  <Text style={styles.Title}>{text}</Text>
  <Text style={styles.SubText}>{subText}</Text>
</View>
</TouchableOpacity>

*/
