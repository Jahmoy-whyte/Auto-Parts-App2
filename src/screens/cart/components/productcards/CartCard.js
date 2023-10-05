import { memo } from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";
import styles from "./styles";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import formattedCost from "../../../../helper/formattedCost";
const CartCard = ({
  id,
  title,
  price,
  quantity,
  image,
  func,
  productId,
  updateItem,
  deleteItem,
}) => {
  const formattedPrice = formattedCost(price * quantity);

  return (
    <View style={styles.container} onPress={() => func(productId)}>
      <View style={styles.imagecontainer}>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <View style={styles.textview}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>
          <Text style={styles.pricetext}>Price: </Text>
          {formattedPrice}
        </Text>
        <Text style={styles.description}>Quantity: {quantity}</Text>
      </View>
      <View style={styles.actionbtncontainer}>
        <TouchableOpacity onPress={() => updateItem(productId, quantity, id)}>
          <AntDesign name="edit" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteItem(id)}>
          <MaterialIcons name="delete-outline" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(CartCard);
