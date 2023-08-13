import {
  Image,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import styles from "./styles";
import { useEffect, useState } from "react";
import {
  manipulateAsync,
  FlipType,
  ActionResize,
} from "expo-image-manipulator";

const Advert = ({ image, text, subtext }) => {
  /**
  const { height, width } = useWindowDimensions();
  const [w, w2] = useState();
  const uri =
    "https://firebasestorage.googleapis.com/v0/b/fir-learning-efa3c.appspot.com/o/Frame%2055%20(4).png?alt=media&token=351b82af-6724-48da-bca6-2b4fc7642702";
  useEffect(() => {
    const test = async () => {
      //  const manipResult = await manipulateAsync(image, ActionResize);
    };

    const _rotate90andFlip = async () => {
      const manipResult = await manipulateAsync(
        uri,
        [{ resize: { height: 190, width: width - 30 } }],
        { compress: 1 }
      );
      w2(manipResult);
    };

    _rotate90andFlip();
  }, []);
 */
  return (
    <View style={styles.imageContainer}>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <View style={styles.overlay}></View>
    </View>
  );
};

export default Advert;
