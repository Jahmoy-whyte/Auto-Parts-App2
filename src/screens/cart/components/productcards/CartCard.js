import { useEffect, useState, memo } from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import formattedCost from "../../../../helper/formattedCost";
const CartCard = ({
  cartId,
  title,
  price,
  quantity,
  image,
  func,
  productId,
  updateItem,
}) => {
  const formattedPrice = formattedCost(price);
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
        <TouchableOpacity
          onPress={() => updateItem(productId, quantity, cartId)}
        >
          <AntDesign name="edit" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="delete" size={24} color="#F47A00" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartCard;
