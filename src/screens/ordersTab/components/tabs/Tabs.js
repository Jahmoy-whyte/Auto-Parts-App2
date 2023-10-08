import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import styles from "./styles";
import { memo } from "react";
const Tabs = ({ onPress, selected = "sent" }) => {
  console.log("tabs =====================================");
  const tabs = [
    { text: "All", value: "all" },
    { text: "Sent", value: "sent" },

    { text: "In Transit", value: "transit" },
    { text: "Delivered", value: "delivered" },
    { text: "Cancelled", value: "cancelled" },
  ];

  return (
    <View style={styles.constainer}>
      <FlatList
        style={styles.flatList}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={tabs}
        keyExtractor={(item) => item.value}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.value}
            onPress={() => onPress(item.value)}
            style={selected == item.value ? styles.selected : styles.tab}
          >
            <Text
              style={
                selected == item.value ? styles.selectedText : styles.tabText
              }
            >
              {item.text}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default memo(Tabs);
