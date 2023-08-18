import { useEffect, useState, memo } from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";
import styles from "./styles";

const ProductCard = ({ title, price, description, image, func, productId }) => {
  console.log("ProductCard ===================");
  return (
    <TouchableOpacity style={styles.container} onPress={() => func(productId)}>
      <View style={styles.textview}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>
          <Text style={styles.pricetext}>Price: </Text>${price}
        </Text>
        <Text style={styles.description}>Description: {"description"}</Text>
      </View>
      <View style={styles.imagecontainer}>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
    </TouchableOpacity>
  );
};

export default memo(ProductCard);
