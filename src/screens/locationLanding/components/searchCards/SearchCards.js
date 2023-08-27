import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import { memo } from "react";
const SearchCards = ({ name, func }) => {
  return (
    <>
      <TouchableOpacity style={styles.container} onPress={() => func(name)}>
        <Ionicons name="ios-location-outline" size={24} color="black" />
        <View>
          <Text style={styles.title}>{name}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default memo(SearchCards);
