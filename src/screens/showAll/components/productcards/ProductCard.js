import { useEffect, useState, memo } from "react";
import { Text, TouchableOpacity, Image, View } from "react-native";
import styles from "./styles";
import formattedCost from "../../../../helper/formattedCost";

const ProductCard = ({
  title,
  price,

  image,
  func,
  productId,
  status,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => (status !== "In stock" ? null : func(productId))}
    >
      <View style={styles.imagecontainer}>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <View style={styles.textview}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>
          <Text style={styles.pricetext}>Price: </Text>
          {formattedCost(price)}
        </Text>
        <Text
          style={status === "In stock" ? styles.statusGreen : styles.statusRed}
        >
          {status}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(ProductCard);
