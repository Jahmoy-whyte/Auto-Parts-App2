import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
const Tabs = ({ onPress, selected = "Sent" }) => {
  const tabs = [
    { text: "Sent", value: "sent" },
    { text: "Delivered", value: "delivered" },
    { text: "In Transit", value: "transit" },
    { text: "Cancelled", value: "cancelled" },
  ];

  return (
    <View style={styles.constainer}>
      {tabs.map((tab) => {
        return (
          <TouchableOpacity
            key={tab.value}
            onPress={() => onPress(tab.value)}
            style={selected == tab.value ? styles.selected : styles.tab}
          >
            <Text
              style={
                selected == tab.value ? styles.selectedText : styles.tabText
              }
            >
              {tab.text}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Tabs;
