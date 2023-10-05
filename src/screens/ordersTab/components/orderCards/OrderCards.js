import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { memo } from "react";

const OrderCards = ({ date, orderId, nav, status }) => {
  console.log("================== order cards");
  const newDate = date.split("T");
  return (
    <TouchableOpacity
      style={styles.ordercontainer}
      onPress={() =>
        nav.navigate("orderdetails", {
          orderId: orderId,
        })
      }
    >
      <View style={styles.blue}></View>
      <View style={styles.textcontainer}>
        <Text style={styles.title}>OrderId#: {orderId}</Text>
        <Text style={styles.text}>delivery</Text>
        <Text style={styles.text}>Date: {newDate[0]}</Text>
      </View>

      <View style={styles.statuscontainer}>
        <Text style={styles.statustext}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(OrderCards);
