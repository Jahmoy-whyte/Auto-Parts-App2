import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { memo } from "react";
import { MaterialIcons } from "@expo/vector-icons";
const Cards = ({ title, subtext, image, func, showarrow = true }) => {
  return (
    <TouchableOpacity style={styles.optionscontainer} onPress={func}>
      <View style={styles.imageandtextcontainer}>
        <View style={styles.backimg}>
          <Image style={styles.image} resizeMode="contain" source={image} />
        </View>
        <View style={styles.textcontainer}>
          <Text style={styles.title}>{title}</Text>
          {subtext ? <Text style={styles.subtext}>{subtext}</Text> : null}
        </View>
      </View>

      {showarrow ? (
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      ) : null}
    </TouchableOpacity>
  );
};

export default memo(Cards);
