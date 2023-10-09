import {
  Image,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { memo } from "react";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
const CategoriesCards = ({ func }) => {
  console.log("=================================wdwdwd");
  const data = [
    { text: "Side Steps", id: 2 },
    { text: "Side Door Mirrors", id: 7 },
    { text: "Rear Window Glass", id: 8 },
    { text: "Rear Bumpers", id: 1 },
    { text: "Front Windshields Glass", id: 9 },
    { text: "Doors Rear Right", id: 5 },
  ];

  return (
    <View>
      {data.map((data) => {
        return (
          <TouchableOpacity
            key={data.id}
            style={styles.optionscontainer}
            onPress={() => {
              func(data.text, data.id);
            }}
          >
            <AntDesign name="search1" size={20} color="black" />
            <Text style={styles.optiontext}>{data.text}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default memo(CategoriesCards);

/*
<TouchableOpacity style={[styles.container, { width: width / 2 - 20 }]}>
<Image source={image} style={styles.image} resizeMode="contain" />
<View style={styles.TextContainer}>
  <Text style={styles.Title}>{text}</Text>
  <Text style={styles.SubText}>{subText}</Text>
</View>
</TouchableOpacity>

*/
