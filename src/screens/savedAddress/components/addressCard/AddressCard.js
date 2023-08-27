import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons, Entypo, MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";

const AddressCard = ({ selectFunc, func, info, selected }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => selectFunc(info)}>
      {info.placeType === "Home" ? (
        <Ionicons name="home-outline" size={24} color="black" />
      ) : info.placeType === "Work" ? (
        <MaterialIcons name="work-outline" size={24} color="black" />
      ) : (
        <Entypo name="dot-single" size={24} color="black" />
      )}

      <View style={styles.textcontainer}>
        <Text style={styles.title}>{info.placeType}</Text>
        <Text style={styles.subtext}>{info.address}</Text>
      </View>

      <TouchableOpacity onPress={() => func(info.id)}>
        <MaterialIcons name="delete-outline" size={24} color="black" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
//
export default AddressCard;
